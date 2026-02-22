// UPDATED STORE - Nu met kinderen data en punten systeem

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Child {
  id: string;
  name: string;
  age: number;
  ageGroup: string; // "0-2", "3-5", "6-8", "9-12", "13+"
}

export interface DailyTaskCompletion {
  taskId: string;
  completedAt: string;
  points: number;
}

export interface UserProfile {
  name: string;
  email?: string;
  children: Child[]; // NIEUW!
  totalPoints: number; // NIEUW!
  currentStreak: number; // NIEUW!
  longestStreak: number; // NIEUW!
}

export interface OnboardingState {
  completed: boolean;
  step: number;
  maxSteps: number; // NIEUW - nu 4 stappen ipv 2
}

interface AppState {
  hydrated: boolean;
  profile: UserProfile | null;
  onboarding: OnboardingState;
  completedTasks: Record<string, DailyTaskCompletion[]>; // Per dag
  lastTaskCheck: string | null; // Voor notificaties
  
  // Actions
  setHydrated: (hydrated: boolean) => void;
  setProfile: (profile: UserProfile) => void;
  updateOnboarding: (step: number, completed: boolean) => void;
  
  // Kinderen management
  addChild: (child: Omit<Child, 'id'>) => void;
  updateChild: (id: string, updates: Partial<Child>) => void;
  removeChild: (id: string) => void;
  
  // Taken management  
  completeTask: (taskId: string, points: number) => void;
  getTodayCompletedTasks: () => DailyTaskCompletion[];
  getTodayPoints: () => number;
  
  // Streak management
  updateStreak: () => void;
  
  // Notificaties
  setLastTaskCheck: (date: string) => void;
  shouldShowTaskReminder: () => boolean;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      profile: null,
      onboarding: { completed: false, step: 1, maxSteps: 4 },
      completedTasks: {},
      lastTaskCheck: null,

      setHydrated: (hydrated) => set({ hydrated }),
      
      setProfile: (profile) => set({ profile }),
      
      updateOnboarding: (step, completed) => 
        set({ onboarding: { completed, step, maxSteps: 4 } }),

      // Kinderen
      addChild: (child) => set((state) => {
        if (!state.profile) return state;
        const newChild: Child = {
          ...child,
          id: `child_${Date.now()}`,
        };
        return {
          profile: {
            ...state.profile,
            children: [...state.profile.children, newChild],
          },
        };
      }),

      updateChild: (id, updates) => set((state) => {
        if (!state.profile) return state;
        return {
          profile: {
            ...state.profile,
            children: state.profile.children.map(child =>
              child.id === id ? { ...child, ...updates } : child
            ),
          },
        };
      }),

      removeChild: (id) => set((state) => {
        if (!state.profile) return state;
        return {
          profile: {
            ...state.profile,
            children: state.profile.children.filter(c => c.id !== id),
          },
        };
      }),

      // Taken
      completeTask: (taskId, points) => set((state) => {
        const today = new Date().toISOString().split('T')[0];
        const todayTasks = state.completedTasks[today] || [];
        
        // Check if already completed today
        if (todayTasks.some(t => t.taskId === taskId)) {
          return state;
        }

        const newCompletion: DailyTaskCompletion = {
          taskId,
          completedAt: new Date().toISOString(),
          points,
        };

        return {
          completedTasks: {
            ...state.completedTasks,
            [today]: [...todayTasks, newCompletion],
          },
          profile: state.profile ? {
            ...state.profile,
            totalPoints: state.profile.totalPoints + points,
          } : null,
        };
      }),

      getTodayCompletedTasks: () => {
        const today = new Date().toISOString().split('T')[0];
        return get().completedTasks[today] || [];
      },

      getTodayPoints: () => {
        const todayTasks = get().getTodayCompletedTasks();
        return todayTasks.reduce((sum, task) => sum + task.points, 0);
      },

      // Streak
      updateStreak: () => set((state) => {
        if (!state.profile) return state;
        
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        
        const completedToday = (state.completedTasks[today] || []).length > 0;
        const completedYesterday = (state.completedTasks[yesterday] || []).length > 0;
        
        let newStreak = state.profile.currentStreak;
        
        if (completedToday && completedYesterday) {
          // Continue streak
          newStreak = state.profile.currentStreak + 1;
        } else if (completedToday && !completedYesterday) {
          // Start new streak
          newStreak = 1;
        } else {
          // Streak broken
          newStreak = 0;
        }

        return {
          profile: {
            ...state.profile,
            currentStreak: newStreak,
            longestStreak: Math.max(newStreak, state.profile.longestStreak),
          },
        };
      }),

      // Notificaties
      setLastTaskCheck: (date) => set({ lastTaskCheck: date }),
      
      shouldShowTaskReminder: () => {
        const state = get();
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        
        // Check if we already showed reminder today
        if (state.lastTaskCheck === today) return false;
        
        // Check if any tasks completed today
        const todayTasks = state.completedTasks[today] || [];
        if (todayTasks.length === 0) {
          // No tasks done today - show reminder if after 18:00
          if (now.getHours() >= 18) return true;
        }
        
        return false;
      },
    }),
    {
      name: 'vadercoach-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
