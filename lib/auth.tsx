import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Linking from 'expo-linking';
import { supabase, getCommunityProfile, type CommunityProfile } from './supabase';
import { registerAndSaveToken } from './notifications';
import type { Session, User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  communityProfile: CommunityProfile | null;
  pendingPasswordReset: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string) => Promise<{ error?: string; needsConfirmation?: boolean }>;
  verifySignUpOtp: (email: string, token: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
  verifyRecoveryOtp: (email: string, token: string) => Promise<{ error?: string }>;
  updatePassword: (newPassword: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  refreshCommunityProfile: () => Promise<void>;
  setCommunityProfile: (profile: CommunityProfile | null) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [communityProfile, setCommunityProfile] = useState<CommunityProfile | null>(null);
  const [pendingPasswordReset, setPendingPasswordReset] = useState(false);

  useEffect(() => {
    // Handle deep links (e.g. email confirmation redirects with auth tokens)
    function handleDeepLink(url: string) {
      if (!url) return;
      // Supabase redirects with tokens in the fragment: vadercoach://#access_token=...&refresh_token=...&type=recovery
      const fragment = url.split('#')[1];
      if (!fragment) return;
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');
      const type = params.get('type');
      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
        // detectSessionInUrl is false, so PASSWORD_RECOVERY event won't fire automatically.
        // We detect it manually from the URL fragment type parameter.
        if (type === 'recovery') {
          setPendingPasswordReset(true);
        }
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
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (event === 'PASSWORD_RECOVERY') {
        setPendingPasswordReset(true);
      }
      if (s?.user) {
        getCommunityProfile(s.user.id).then(setCommunityProfile);
        // Register push notifications token
        registerAndSaveToken(s.user.id);
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

  async function verifySignUpOtp(email: string, token: string) {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'signup',
    });
    if (error) return { error: error.message };
    return {};
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

  async function verifyRecoveryOtp(email: string, token: string) {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'recovery',
    });
    if (error) return { error: error.message };
    setPendingPasswordReset(true);
    return {};
  }

  async function updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return { error: error.message };
    setPendingPasswordReset(false);
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
        pendingPasswordReset,
        isAdmin: communityProfile?.is_admin ?? false,
        signUp,
        verifySignUpOtp,
        signIn,
        resetPassword,
        verifyRecoveryOtp,
        updatePassword,
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
