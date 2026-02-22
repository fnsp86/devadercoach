// EXTENSIONS TO ADD TO STORE.TSX
// Voeg deze toe aan de bestaande store

import type { Child, DailyTaskCompletion } from "./types";

// ADD TO KEYS constant:
// DAILY_TASKS: "vc-daily-tasks",

// ADD TO StoreState interface:
/*
dailyTaskCompletions: Record<string, DailyTaskCompletion[]>;
addChild: (child: Omit<Child, 'id'>) => void;
updateChild: (id: string, updates: Partial<Child>) => void;
removeChild: (id: string) => void;
completeTask: (taskId: string, points: number) => void;
getTodayCompletedTasks: () => DailyTaskCompletion[];
getTodayPoints: () => number;
updateStreak: () => void;
*/

// ADD TO useState declarations:
// const [dailyTaskCompletions, setDailyTaskCompletions] = useState<Record<string, DailyTaskCompletion[]>>({});

// ADD TO useEffect load:
// setDailyTaskCompletions(load<Record<string, DailyTaskCompletion[]>>("vc-daily-tasks") || {});

// ADD THESE FUNCTIONS:

function addChild(child: Omit<Child, 'id'>) {
  if (!profile) return;
  const newChild: Child = { ...child, id: `child_${Date.now()}` };
  const updatedChildren = [...(profile.children || []), newChild];
  const updatedProfile = { ...profile, children: updatedChildren };
  saveProfile(updatedProfile);
}

function updateChild(id: string, updates: Partial<Child>) {
  if (!profile || !profile.children) return;
  const updatedChildren = profile.children.map(child =>
    child.id === id ? { ...child, ...updates } : child
  );
  const updatedProfile = { ...profile, children: updatedChildren };
  saveProfile(updatedProfile);
}

function removeChild(id: string) {
  if (!profile || !profile.children) return;
  const updatedChildren = profile.children.filter(c => c.id !== id);
  const updatedProfile = { ...profile, children: updatedChildren };
  saveProfile(updatedProfile);
}

function completeTask(taskId: string, points: number) {
  const today = new Date().toISOString().split('T')[0];
  const todayTasks = dailyTaskCompletions[today] || [];
  
  if (todayTasks.some(t => t.taskId === taskId)) return;

  const newCompletion: DailyTaskCompletion = {
    taskId,
    completedAt: new Date().toISOString(),
    points,
  };

  const updated = {
    ...dailyTaskCompletions,
    [today]: [...todayTasks, newCompletion],
  };
  
  setDailyTaskCompletions(updated);
  save("vc-daily-tasks", updated);

  if (profile) {
    const updatedProfile = {
      ...profile,
      totalPoints: (profile.totalPoints || 0) + points,
    };
    saveProfile(updatedProfile);
  }
}

function getTodayCompletedTasks(): DailyTaskCompletion[] {
  const today = new Date().toISOString().split('T')[0];
  return dailyTaskCompletions[today] || [];
}

function getTodayPoints(): number {
  const todayTasks = getTodayCompletedTasks();
  return todayTasks.reduce((sum, task) => sum + task.points, 0);
}

function updateStreak() {
  if (!profile) return;
  
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  const completedToday = (dailyTaskCompletions[today] || []).length > 0;
  const completedYesterday = (dailyTaskCompletions[yesterday] || []).length > 0;
  
  let newStreak = profile.currentStreak || 0;
  
  if (completedToday && completedYesterday) {
    newStreak = (profile.currentStreak || 0) + 1;
  } else if (completedToday && !completedYesterday) {
    newStreak = 1;
  } else {
    newStreak = 0;
  }

  const updatedProfile = {
    ...profile,
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, profile.longestStreak || 0),
  };
  saveProfile(updatedProfile);
}
