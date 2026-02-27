-- VaderCoach Community Schema
-- Run this in the Supabase SQL Editor
-- STAP 1: Kopieer ALLES en plak in SQL Editor → klik Run

-- ─── Profiles ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  naam TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  stad TEXT NOT NULL DEFAULT '',
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are publicly readable" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── Nearby search function (without PostGIS) ─────────────────
-- Uses haversine formula in pure SQL
CREATE OR REPLACE FUNCTION get_nearby_profiles(
  user_lat DOUBLE PRECISION,
  user_lng DOUBLE PRECISION,
  radius_km DOUBLE PRECISION DEFAULT 25
)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  naam TEXT,
  bio TEXT,
  stad TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  avatar_url TEXT,
  created_at TIMESTAMPTZ,
  distance_km DOUBLE PRECISION
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id, p.user_id, p.naam, p.bio, p.stad, p.latitude, p.longitude,
    p.avatar_url, p.created_at,
    (6371 * acos(
      cos(radians(user_lat)) * cos(radians(p.latitude)) *
      cos(radians(p.longitude) - radians(user_lng)) +
      sin(radians(user_lat)) * sin(radians(p.latitude))
    )) AS distance_km
  FROM profiles p
  WHERE p.latitude IS NOT NULL AND p.longitude IS NOT NULL
    AND (6371 * acos(
      cos(radians(user_lat)) * cos(radians(p.latitude)) *
      cos(radians(p.longitude) - radians(user_lng)) +
      sin(radians(user_lat)) * sin(radians(p.latitude))
    )) <= radius_km
  ORDER BY distance_km ASC;
END;
$$ LANGUAGE plpgsql;

-- ─── Stories ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('tip', 'ervaring', 'vraag', 'overwinning')),
  image_url TEXT,
  likes_count INTEGER DEFAULT 0 NOT NULL,
  comments_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE stories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Stories are publicly readable" ON stories FOR SELECT USING (true);
CREATE POLICY "Users can create own stories" ON stories FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can delete own stories" ON stories FOR DELETE USING (auth.uid() = author_id);

-- ─── Story Likes ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS story_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(story_id, user_id)
);

ALTER TABLE story_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Likes are publicly readable" ON story_likes FOR SELECT USING (true);
CREATE POLICY "Users can manage own likes" ON story_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove own likes" ON story_likes FOR DELETE USING (auth.uid() = user_id);

-- Auto-update likes_count
CREATE OR REPLACE FUNCTION update_story_likes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE stories SET likes_count = likes_count + 1 WHERE id = NEW.story_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE stories SET likes_count = GREATEST(likes_count - 1, 0) WHERE id = OLD.story_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_likes_count
  AFTER INSERT OR DELETE ON story_likes
  FOR EACH ROW EXECUTE FUNCTION update_story_likes_count();

-- ─── Story Comments ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS story_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE story_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Comments are publicly readable" ON story_comments FOR SELECT USING (true);
CREATE POLICY "Users can create own comments" ON story_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can delete own comments" ON story_comments FOR DELETE USING (auth.uid() = author_id);

-- Auto-update comments_count
CREATE OR REPLACE FUNCTION update_story_comments_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE stories SET comments_count = comments_count + 1 WHERE id = NEW.story_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE stories SET comments_count = GREATEST(comments_count - 1, 0) WHERE id = OLD.story_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_comments_count
  AFTER INSERT OR DELETE ON story_comments
  FOR EACH ROW EXECUTE FUNCTION update_story_comments_count();

-- ─── Conversations ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  participant1_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  participant2_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  last_message TEXT,
  last_message_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(participant1_id, participant2_id)
);

ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can see own conversations" ON conversations FOR SELECT
  USING (auth.uid() = participant1_id OR auth.uid() = participant2_id);
CREATE POLICY "Users can create conversations" ON conversations FOR INSERT
  WITH CHECK (auth.uid() = participant1_id OR auth.uid() = participant2_id);
CREATE POLICY "Users can update own conversations" ON conversations FOR UPDATE
  USING (auth.uid() = participant1_id OR auth.uid() = participant2_id);

-- ─── Messages ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id, created_at DESC);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can see messages in their conversations" ON messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM conversations c
      WHERE c.id = messages.conversation_id
      AND (c.participant1_id = auth.uid() OR c.participant2_id = auth.uid())
    )
  );
CREATE POLICY "Users can send messages" ON messages FOR INSERT
  WITH CHECK (auth.uid() = sender_id);

-- ─── Groups ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS groups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  type TEXT NOT NULL CHECK (type IN ('stad', 'thema')),
  city TEXT,
  member_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Groups are publicly readable" ON groups FOR SELECT USING (true);

-- ─── Group Members ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS group_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  joined_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(group_id, user_id)
);

ALTER TABLE group_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members are publicly readable" ON group_members FOR SELECT USING (true);
CREATE POLICY "Users can join groups" ON group_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can leave groups" ON group_members FOR DELETE USING (auth.uid() = user_id);

-- Auto-update member_count
CREATE OR REPLACE FUNCTION update_group_member_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE groups SET member_count = member_count + 1 WHERE id = NEW.group_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE groups SET member_count = GREATEST(member_count - 1, 0) WHERE id = OLD.group_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_member_count
  AFTER INSERT OR DELETE ON group_members
  FOR EACH ROW EXECUTE FUNCTION update_group_member_count();

-- ─── Group Messages ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS group_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_group_messages ON group_messages(group_id, created_at DESC);

ALTER TABLE group_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Group messages readable by members" ON group_messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM group_members gm
      WHERE gm.group_id = group_messages.group_id AND gm.user_id = auth.uid()
    )
  );
CREATE POLICY "Members can send group messages" ON group_messages FOR INSERT
  WITH CHECK (
    auth.uid() = sender_id
    AND EXISTS (
      SELECT 1 FROM group_members gm
      WHERE gm.group_id = group_messages.group_id AND gm.user_id = auth.uid()
    )
  );

-- ─── Reports ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  reported_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('story', 'comment', 'message', 'profile')),
  content_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can create reports" ON reports FOR INSERT WITH CHECK (auth.uid() = reporter_id);

-- ─── Blocks ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  blocked_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id, blocked_user_id)
);

ALTER TABLE blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can see own blocks" ON blocks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create blocks" ON blocks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove own blocks" ON blocks FOR DELETE USING (auth.uid() = user_id);

-- ─── Storage buckets & policies ─────────────────────────────────

-- Avatars bucket (public readable)
INSERT INTO storage.buckets (id, name, public)
  VALUES ('avatars', 'avatars', true)
  ON CONFLICT DO NOTHING;

-- Story images bucket (public readable)
INSERT INTO storage.buckets (id, name, public)
  VALUES ('story-images', 'story-images', true)
  ON CONFLICT DO NOTHING;

-- Users can upload/overwrite their own avatar
CREATE POLICY "Users can upload own avatar"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars'
    AND auth.role() = 'authenticated'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update own avatar"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Avatars are publicly readable
CREATE POLICY "Avatars are publicly readable"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

-- Users can upload story images to their own folder
CREATE POLICY "Users can upload own story images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'story-images'
    AND auth.role() = 'authenticated'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Story images are publicly readable
CREATE POLICY "Story images are publicly readable"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'story-images');

-- ─── Account deletion ───────────────────────────────────────────

CREATE OR REPLACE FUNCTION delete_own_account()
RETURNS void AS $$
BEGIN
  -- Delete all social content explicitly
  DELETE FROM group_messages WHERE sender_id = auth.uid();
  DELETE FROM group_members WHERE user_id = auth.uid();
  DELETE FROM messages WHERE sender_id = auth.uid();
  DELETE FROM conversations WHERE participant1_id = auth.uid() OR participant2_id = auth.uid();
  DELETE FROM story_likes WHERE user_id = auth.uid();
  DELETE FROM story_comments WHERE author_id = auth.uid();
  DELETE FROM stories WHERE author_id = auth.uid();
  DELETE FROM reports WHERE reporter_id = auth.uid();
  DELETE FROM blocks WHERE user_id = auth.uid() OR blocked_user_id = auth.uid();
  -- Delete storage objects (avatars, story images)
  DELETE FROM storage.objects WHERE owner = auth.uid();
  -- Delete profile
  DELETE FROM profiles WHERE user_id = auth.uid();
  -- Delete auth user
  DELETE FROM auth.users WHERE id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ─── Seed: Default theme groups ─────────────────────────────────
INSERT INTO groups (name, description, type) VALUES
  ('Nieuwe Vaders', 'Voor vaders met kinderen van 0-2 jaar', 'thema'),
  ('Tienerouders', 'Voor vaders met tieners (13+)', 'thema'),
  ('Co-ouderschap', 'Tips en steun bij gescheiden opvoeden', 'thema'),
  ('Actieve Vaders', 'Sport, natuur en avontuur met je kids', 'thema')
ON CONFLICT DO NOTHING;
