// Supabase Edge Function: notify-message
// Triggered by database webhook on INSERT into messages table.
// Sends push notification to the recipient via Expo Push API.
//
// Setup:
// 1. Deploy: supabase functions deploy notify-message
// 2. Create database webhook in Supabase Dashboard:
//    - Table: messages
//    - Events: INSERT
//    - Type: Supabase Edge Function
//    - Function: notify-message
// 3. Add push_token column to profiles:
//    ALTER TABLE profiles ADD COLUMN IF NOT EXISTS push_token TEXT;

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

interface MessagePayload {
  type: 'INSERT';
  table: 'messages';
  record: {
    id: string;
    conversation_id: string;
    sender_id: string;
    content: string;
    created_at: string;
  };
}

Deno.serve(async (req) => {
  try {
    const payload: MessagePayload = await req.json();
    const { record } = payload;

    if (!record?.conversation_id || !record?.sender_id) {
      return new Response('Missing fields', { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get conversation to find recipient
    const { data: conversation } = await supabase
      .from('conversations')
      .select('participant1_id, participant2_id')
      .eq('id', record.conversation_id)
      .single();

    if (!conversation) {
      return new Response('Conversation not found', { status: 404 });
    }

    const recipientId = conversation.participant1_id === record.sender_id
      ? conversation.participant2_id
      : conversation.participant1_id;

    // Check if recipient blocked the sender
    const { data: block } = await supabase
      .from('blocks')
      .select('id')
      .eq('user_id', recipientId)
      .eq('blocked_user_id', record.sender_id)
      .single();

    if (block) {
      return new Response('Sender is blocked', { status: 200 });
    }

    // Get recipient's push token
    const { data: recipientProfile } = await supabase
      .from('profiles')
      .select('push_token')
      .eq('user_id', recipientId)
      .single();

    if (!recipientProfile?.push_token) {
      return new Response('No push token', { status: 200 });
    }

    // Get sender's name
    const { data: senderProfile } = await supabase
      .from('profiles')
      .select('naam')
      .eq('user_id', record.sender_id)
      .single();

    const senderName = senderProfile?.naam ?? 'Iemand';
    const preview = record.content.length > 100
      ? record.content.slice(0, 100) + '...'
      : record.content;

    // Send via Expo Push API
    const pushResponse = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: recipientProfile.push_token,
        title: senderName,
        body: preview,
        data: { conversationId: record.conversation_id },
        sound: 'default',
        channelId: 'chat',
      }),
    });

    const pushResult = await pushResponse.json();
    console.log('[notify-message] Push result:', JSON.stringify(pushResult));

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('[notify-message] Error:', e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
