import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { modules } from '@/data/courseData';

interface ProgressState {
    completedModules: number[];
    completedCurriculumItems: Record<number, string[]>; // moduleId -> array of item ids

    // Gamification
    xp: number;
    unlockedBadges: string[];
    lastLoginDate: string | null;
    streakDays: number;

    toggleModuleComplete: (moduleId: number) => void;
    toggleCurriculumItem: (moduleId: number, itemId: string) => void;
    getModuleProgress: (moduleId: number) => number;
    getOverallProgress: () => number;

    // Gamification Actions
    addXp: (amount: number) => void;
    unlockBadge: (badgeId: string) => void;
    checkStreak: () => void;

    // Onboarding
    onboardingCompleted: boolean;
    userLevel: 'beginner' | 'advanced' | null;
    userGoal: 'content' | 'coding' | 'data' | 'general' | null;
    completeOnboarding: (level: 'beginner' | 'advanced', goal: 'content' | 'coding' | 'data' | 'general') => void;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({
            completedModules: [],
            completedCurriculumItems: {},

            xp: 0,
            unlockedBadges: [],
            lastLoginDate: null,
            streakDays: 0,

            toggleModuleComplete: (moduleId: number) => {
                set((state) => {
                    const isCompleted = state.completedModules.includes(moduleId);
                    if (!isCompleted) {
                        // Reward XP on module completion
                        get().addXp(50);
                    }
                    return {
                        completedModules: isCompleted
                            ? state.completedModules.filter(id => id !== moduleId)
                            : [...state.completedModules, moduleId]
                    };
                });
            },

            toggleCurriculumItem: (moduleId: number, itemId: string) => {
                set((state) => {
                    const moduleItems = state.completedCurriculumItems[moduleId] || [];
                    const isCompleted = moduleItems.includes(itemId);

                    if (!isCompleted) {
                        // Reward XP for checking off items
                        get().addXp(10);
                    }

                    const newModuleItems = isCompleted
                        ? moduleItems.filter(id => id !== itemId)
                        : [...moduleItems, itemId];

                    return {
                        completedCurriculumItems: {
                            ...state.completedCurriculumItems,
                            [moduleId]: newModuleItems
                        }
                    };
                });
            },

            getModuleProgress: (moduleId: number) => {
                const state = get();
                const module = modules.find(m => m.id === moduleId);
                if (!module) return 0;

                const totalItems = module.curriculum.length;
                if (totalItems === 0) return state.completedModules.includes(moduleId) ? 100 : 0;

                const completedCount = (state.completedCurriculumItems[moduleId] || []).length;
                return Math.round((completedCount / totalItems) * 100);
            },

            getOverallProgress: () => {
                const state = get();
                let totalItems = 0;
                let totalCompleted = 0;

                modules.forEach(m => {
                    totalItems += m.curriculum.length;
                    totalCompleted += (state.completedCurriculumItems[m.id] || []).length;
                });

                if (totalItems === 0) return 0;
                return Math.round((totalCompleted / totalItems) * 100);
            },

            addXp: (amount: number) => {
                set((state) => ({ xp: state.xp + amount }));
            },

            unlockBadge: (badgeId: string) => {
                set((state) => {
                    if (!state.unlockedBadges.includes(badgeId)) {
                        return { unlockedBadges: [...state.unlockedBadges, badgeId] };
                    }
                    return state;
                });
            },

            checkStreak: () => {
                const today = new Date().toISOString().split('T')[0];
                set((state) => {
                    if (state.lastLoginDate === today) return state; // Already checked today

                    if (!state.lastLoginDate) {
                        return { lastLoginDate: today, streakDays: 1 };
                    }

                    const lastDate = new Date(state.lastLoginDate);
                    const currentDate = new Date(today);
                    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) {
                        // Consecutive day
                        const newStreak = state.streakDays + 1;
                        if (newStreak === 3) get().unlockBadge('Kitartó Tanuló');
                        return { lastLoginDate: today, streakDays: newStreak };
                    } else if (diffDays > 1) {
                        // Broken streak
                        return { lastLoginDate: today, streakDays: 1 };
                    }
                    return state;
                });
            },

            // Onboarding defaults
            onboardingCompleted: false,
            userLevel: null,
            userGoal: null,

            completeOnboarding: (level, goal) => {
                set({
                    onboardingCompleted: true,
                    userLevel: level,
                    userGoal: goal
                });
            }
        }),
        {
            name: 'ai-edu-progress', // LocalStorage key
        }
    )
);
