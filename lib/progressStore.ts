import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { modules } from '@/data/courseData';

interface ProgressState {
    completedModules: number[];
    completedCurriculumItems: Record<number, string[]>; // moduleId -> array of item ids

    toggleModuleComplete: (moduleId: number) => void;
    toggleCurriculumItem: (moduleId: number, itemId: string) => void;
    getModuleProgress: (moduleId: number) => number;
    getOverallProgress: () => number;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({
            completedModules: [],
            completedCurriculumItems: {},

            toggleModuleComplete: (moduleId: number) => {
                set((state) => {
                    const isCompleted = state.completedModules.includes(moduleId);
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
            }
        }),
        {
            name: 'ai-edu-progress', // LocalStorage key
        }
    )
);
