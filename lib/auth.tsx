import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Linking from 'expo-linking';
import { supabase, getCommunityProfile, type CommunityProfile } from './supabase';
import type { Session, User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  communityProfile: CommunityProfile | null;
  signUp: (email: string, password: string) => Promise<{ error?: string; needsConfirmation?: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  refreshCommunityProfile: () => Promise<void>;
  setCommunityProfile: (profile: CommunityProfile) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [communityProfile, setCommunityProfile] = useState<CommunityProfile | null>(null);

  useEffect(() => {
    // Handle deep links (e.g. email confirmation redirects with auth tokens)
    function handleDeepLink(url: string) {
      if (!url) return;
      // Supabase redirects with tokens in the fragment: vadercoach://#access_token=...&refresh_token=...
      const fragment = url.split('#')[1];
      if (!fragment) return;
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');
      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
      }
    }

    // Check if app was opened via deep link
    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink(url);
    });

    // Listen for deep links while app is open
    const linkSub = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    // Get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) {
        getCommunityProfile(s.user.id).then(setCommunityProfile);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) {
        getCommunityProfile(s.user.id).then(setCommunityProfile);
      } else {
        setCommunityProfile(null);
      }
    });

    return () => {
      linkSub.remove();
      subscription.unsubscribe();
    };
  }, []);

  async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    // If email confirmation is required, session will be null
    const needsConfirmation = !data.session;
    return { needsConfirmation };
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return {};
  }

  async function resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) return { error: error.message };
    return {};
  }

  async function signOut() {
    await supabase.auth.signOut();
    setCommunityProfile(null);
  }

  async function refreshCommunityProfile() {
    if (!user) return;
    const profile = await getCommunityProfile(user.id);
    setCommunityProfile(profile);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        communityProfile,
        signUp,
        signIn,
        resetPassword,
        signOut,
        refreshCommunityProfile,
        setCommunityProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
