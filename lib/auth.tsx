import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, getCommunityProfile, type CommunityProfile } from './supabase';
import type { Session, User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  communityProfile: CommunityProfile | null;
  signUp: (email: string, password: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
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

    return () => subscription.unsubscribe();
  }, []);

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    return {};
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
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
