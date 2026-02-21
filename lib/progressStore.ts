import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { modules } from '@/data/courseData';

export interface Note {
    id: string;
    text: string;
    date: string;
    moduleId?: number;
}

interface ProgressState {
    completedModules: number[];
    completedCurriculumItems: Record<number, string[]>; // moduleId -> array of item ids

    // Jegyzetfüzet (Notebook)
    notes: Note[];
    addNote: (text: string, moduleId?: number) => void;
    updateNote: (id: string, text: string) => void;
    deleteNote: (id: string) => void;

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

    // Data Management
    exportData: () => string;
    importData: (base64String: string) => boolean;

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

            // --- Jegyzetfüzet (Notebook) logika ---
            notes: [],

            addNote: (text: string, moduleId?: number) => {
                set((state) => ({
                    notes: [
                        {
                            id: crypto.randomUUID(),
                            text,
                            date: new Date().toISOString(),
                            moduleId
                        },
                        ...state.notes
                    ]
                }));
                // Kis XP jutalom az első jegyzetért
                if (get().notes.length === 1) get().addXp(10);
            },

            updateNote: (id: string, text: string) => {
                set((state) => ({
                    notes: state.notes.map(note =>
                        note.id === id ? { ...note, text, date: new Date().toISOString() } : note
                    )
                }));
            },

            deleteNote: (id: string) => {
                set((state) => ({
                    notes: state.notes.filter(note => note.id !== id)
                }));
            },

            // --- Export / Import ---
            exportData: () => {
                const state = get();
                const dataToExport = {
                    completedModules: state.completedModules,
                    completedCurriculumItems: state.completedCurriculumItems,
                    xp: state.xp,
                    unlockedBadges: state.unlockedBadges,
                    lastLoginDate: state.lastLoginDate,
                    streakDays: state.streakDays,
                    onboardingCompleted: state.onboardingCompleted,
                    userLevel: state.userLevel,
                    userGoal: state.userGoal,
                    notes: state.notes
                };

                try {
                    // JSON to Base64 (btoa) for easy sharing
                    const jsonString = JSON.stringify(dataToExport);
                    return btoa(encodeURIComponent(jsonString));
                } catch (e) {
                    console.error("Export hiba:", e);
                    return "";
                }
            },

            importData: (base64String: string) => {
                if (!base64String || base64String.trim() === '') return false;
                try {
                    // Decode from Base64
                    const jsonString = decodeURIComponent(atob(base64String));
                    const parsedData = JSON.parse(jsonString);

                    // Alapvető validáció (egy-két kulcs kötelező jelenléte)
                    if (parsedData && typeof parsedData.xp === 'number') {
                        set({
                            completedModules: parsedData.completedModules || [],
                            completedCurriculumItems: parsedData.completedCurriculumItems || {},
                            xp: parsedData.xp,
                            unlockedBadges: parsedData.unlockedBadges || [],
                            lastLoginDate: parsedData.lastLoginDate || null,
                            streakDays: parsedData.streakDays || 0,
                            onboardingCompleted: parsedData.onboardingCompleted || false,
                            userLevel: parsedData.userLevel || null,
                            userGoal: parsedData.userGoal || null,
                            notes: parsedData.notes || []
                        });
                        return true;
                    }
                    return false;
                } catch (e) {
                    console.error("Import hiba:", e);
                    return false;
                }
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
