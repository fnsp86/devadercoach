-- ═══════════════════════════════════════════════════════════════════
-- Fase 1 Migration: Dagelijkse Duel + Taak Delen
-- Run this in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════

-- 1. Daily Arena Scores table
CREATE TABLE IF NOT EXISTS daily_arena_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  date TEXT NOT NULL,
  score INTEGER NOT NULL,
  time_ms INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id, date)
);

-- Index for leaderboard queries (by date, sorted by score)
CREATE INDEX IF NOT EXISTS idx_daily_arena_scores_date
  ON daily_arena_scores(date, score DESC, time_ms ASC);

-- Index for user lookups
CREATE INDEX IF NOT EXISTS idx_daily_arena_scores_user
  ON daily_arena_scores(user_id, date);

-- RLS policies for daily_arena_scores
ALTER TABLE daily_arena_scores ENABLE ROW LEVEL SECURITY;

-- Anyone can read the leaderboard
CREATE POLICY "Anyone can view daily arena scores"
  ON daily_arena_scores FOR SELECT
  USING (true);

-- Users can insert/update their own scores
CREATE POLICY "Users can insert their own daily arena scores"
  ON daily_arena_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own daily arena scores"
  ON daily_arena_scores FOR UPDATE
  USING (auth.uid() = user_id);

-- 2. Add skill column to stories table (for Taak Delen)
ALTER TABLE stories ADD COLUMN IF NOT EXISTS skill TEXT;

-- Index for filtering stories by skill
CREATE INDEX IF NOT EXISTS idx_stories_skill
  ON stories(skill) WHERE skill IS NOT NULL;

-- ═══════════════════════════════════════════════════════════════════
-- Fase 2 Migration: Vader van de Week (challenge_week column)
-- ═══════════════════════════════════════════════════════════════════

-- 3. Add challenge_week column to stories table
ALTER TABLE stories ADD COLUMN IF NOT EXISTS challenge_week TEXT;

-- Index for filtering challenge stories by week
CREATE INDEX IF NOT EXISTS idx_stories_challenge_week
  ON stories(challenge_week) WHERE challenge_week IS NOT NULL;

-- ═══════════════════════════════════════════════════════════════════
-- Fase 3 Migration: Vader Groepen + Skill Duel
-- ═══════════════════════════════════════════════════════════════════

-- 4. Add last_message columns to groups table
ALTER TABLE groups ADD COLUMN IF NOT EXISTS last_message TEXT;
ALTER TABLE groups ADD COLUMN IF NOT EXISTS last_message_at TIMESTAMPTZ;

-- 5. Group messages table
CREATE TABLE IF NOT EXISTS group_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_group_messages_group
  ON group_messages(group_id, created_at DESC);

-- RLS for group_messages
ALTER TABLE group_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Group members can view group messages"
  ON group_messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM group_members
      WHERE group_members.group_id = group_messages.group_id
      AND group_members.user_id = auth.uid()
    )
  );

CREATE POLICY "Group members can send group messages"
  ON group_messages FOR INSERT
  WITH CHECK (
    auth.uid() = sender_id
    AND EXISTS (
      SELECT 1 FROM group_members
      WHERE group_members.group_id = group_messages.group_id
      AND group_members.user_id = auth.uid()
    )
  );

-- 6. Arena Duels table
CREATE TABLE IF NOT EXISTS arena_duels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  challenger_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  opponent_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  skill TEXT NOT NULL,
  question_seed TEXT NOT NULL,
  challenger_score INTEGER,
  opponent_score INTEGER,
  challenger_time_ms INTEGER,
  opponent_time_ms INTEGER,
  status TEXT CHECK (status IN ('pending', 'completed', 'expired', 'declined')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_arena_duels_challenger
  ON arena_duels(challenger_id, status);

CREATE INDEX IF NOT EXISTS idx_arena_duels_opponent
  ON arena_duels(opponent_id, status);

-- RLS for arena_duels
ALTER TABLE arena_duels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own duels"
  ON arena_duels FOR SELECT
  USING (auth.uid() = challenger_id OR auth.uid() = opponent_id);

CREATE POLICY "Users can create duels"
  ON arena_duels FOR INSERT
  WITH CHECK (auth.uid() = challenger_id);

CREATE POLICY "Duel participants can update"
  ON arena_duels FOR UPDATE
  USING (auth.uid() = challenger_id OR auth.uid() = opponent_id);

-- Enable realtime for group_messages (for live chat)
ALTER PUBLICATION supabase_realtime ADD TABLE group_messages;
