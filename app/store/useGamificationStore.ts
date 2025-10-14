import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Badge {
  label: string;
  icon: string;
  unlocked: boolean;
}

interface GamificationState {
  xp: number;
  level: number;
  badges: Badge[];
  streak: number;
  addXP: (amount: number) => void;
  unlockBadge: (label: string) => void;
  reset: () => void;
}

export const useGamificationStore = create<GamificationState>((set: any) => ({
  xp: 0,
  level: 1,
  badges: [
    { label: 'Premier Rituel', icon: 'wand', unlocked: false },
    { label: 'Maître de la Mesure', icon: 'timer', unlocked: false },
    { label: 'Alchimie Pure', icon: 'flask', unlocked: false },
    { label: 'Flamme Vive', icon: 'flame', unlocked: false },
    { label: 'Ombre Longue', icon: 'moon', unlocked: false },
    { label: 'Streak 7', icon: 'calendar', unlocked: false },
  ],
  streak: 0,
  addXP: (amount: number) => set((state: GamificationState) => ({ xp: state.xp + amount })),
  unlockBadge: (label: string) => set((state: GamificationState) => ({ badges: state.badges.map((b: Badge) => b.label === label ? { ...b, unlocked: true } : b) })),
  reset: () => set({ xp: 0, level: 1, badges: [], streak: 0 }),
}));
