// Supabase Edge Function: notify-duel
// Triggered by database webhook on INSERT into arena_duels table.
// Sends push notification to the opponent when challenged.
//
// Setup:
// 1. Deploy: supabase functions deploy notify-duel
// 2. Create database webhook in Supabase Dashboard:
//    - Table: arena_duels
//    - Events: INSERT
//    - Type: Supabase Edge Function
//    - Function: notify-duel

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

interface DuelPayload {
  type: 'INSERT';
  table: 'arena_duels';
  record: {
    id: string;
    challenger_id: string;
    opponent_id: string;
    skill: string;
    status: string;
    created_at: string;
  };
}

Deno.serve(async (req) => {
  try {
    const payload: DuelPayload = await req.json();
    const { record } = payload;

    if (!record?.challenger_id || !record?.opponent_id) {
      return new Response('Missing fields', { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get opponent's push token
    const { data: opponentProfile } = await supabase
      .from('profiles')
      .select('push_token')
      .eq('user_id', record.opponent_id)
      .single();

    if (!opponentProfile?.push_token) {
      return new Response('No push token', { status: 200 });
    }

    // Get challenger's name
    const { data: challengerProfile } = await supabase
      .from('profiles')
      .select('naam')
      .eq('user_id', record.challenger_id)
      .single();

    const challengerName = challengerProfile?.naam ?? 'Een vader';

    // Send push notification via Expo Push API
    const pushResponse = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: opponentProfile.push_token,
        title: 'Uitgedaagd!',
        body: `${challengerName} daagt je uit voor een ${record.skill} duel!`,
        data: { type: 'duel', duelId: record.id },
        sound: 'default',
        channelId: 'duels',
      }),
    });

    const pushResult = await pushResponse.json();
    console.log('[notify-duel] Push result:', JSON.stringify(pushResult));

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('[notify-duel] Error:', e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
