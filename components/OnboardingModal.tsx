"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgressStore } from "@/lib/progressStore";
import { Sparkles, Code, PenTool, BarChart, Lightbulb, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Level = 'beginner' | 'advanced';
type Goal = 'content' | 'coding' | 'data' | 'general';

export function OnboardingModal() {
    const { onboardingCompleted, completeOnboarding } = useProgressStore();
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(1);
    const [level, setLevel] = useState<Level | null>(null);
    const [goal, setGoal] = useState<Goal | null>(null);

    // Prevent hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || onboardingCompleted) return null;

    const handleComplete = () => {
        if (level && goal) {
            completeOnboarding(level, goal);
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-primary/10 px-8 py-6 border-b border-border text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-primary rounded-2xl mb-4 shadow-lg shadow-primary/20 text-white">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight mb-2">Üdvözöl az AI EduNavigator!</h2>
                        <p className="text-muted-foreground text-lg">Állítsuk be a számodra legrelevánsabb tanulási útvonalat.</p>
                    </div>

                    {/* Step 1: Level */}
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">Milyen szinten vagy jelenleg az AI-val?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    onClick={() => setLevel('beginner')}
                                    className={cn(
                                        "p-6 rounded-2xl border-2 text-left transition-all",
                                        level === 'beginner'
                                            ? "border-primary bg-primary/5 shadow-md"
                                            : "border-border hover:border-primary/50 hover:bg-secondary"
                                    )}
                                >
                                    <h4 className="font-bold text-lg mb-2">Teljesen Kezdő</h4>
                                    <p className="text-muted-foreground text-sm">Még csak most ismerkedsz a promptolással és a ChatGPT-vel.</p>
                                </button>
                                <button
                                    onClick={() => setLevel('advanced')}
                                    className={cn(
                                        "p-6 rounded-2xl border-2 text-left transition-all",
                                        level === 'advanced'
                                            ? "border-primary bg-primary/5 shadow-md"
                                            : "border-border hover:border-primary/50 hover:bg-secondary"
                                    )}
                                >
                                    <h4 className="font-bold text-lg mb-2">Gyakorlott</h4>
                                    <p className="text-muted-foreground text-sm">Használod a napi munkában az AI-t, de mélyíteni akarod a tudásod (Pl. RAG, Ügynökök).</p>
                                </button>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!level}
                                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all hover:bg-primary/90"
                                >
                                    Tovább <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Goal */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">Főleg mire szeretnéd használni a megszerzett tudást?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <GoalButton
                                    icon={Code} title="Programozás" desc="Kódgenerálás, rendszerek építése, hibakeresés."
                                    active={goal === 'coding'} onClick={() => setGoal('coding')}
                                />
                                <GoalButton
                                    icon={PenTool} title="Tartalomgyártás" desc="Szövegírás, kreatív folyamatok, SEO, képalkotás."
                                    active={goal === 'content'} onClick={() => setGoal('content')}
                                />
                                <GoalButton
                                    icon={BarChart} title="Adatelemzés" desc="Adatok tisztítása, statisztikák, predikciók."
                                    active={goal === 'data'} onClick={() => setGoal('data')}
                                />
                                <GoalButton
                                    icon={Lightbulb} title="Általános / Hatékonyság" desc="Mindennapi produktivitás, levelezés, fordítás."
                                    active={goal === 'general'} onClick={() => setGoal('general')}
                                />
                            </div>
                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 text-muted-foreground hover:bg-secondary rounded-xl font-bold transition-all"
                                >
                                    Vissza
                                </button>
                                <button
                                    onClick={handleComplete}
                                    disabled={!goal}
                                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all hover:bg-primary/90 shadow-md shadow-primary/20"
                                >
                                    <Check className="w-5 h-5" /> Kezdd el a tanulást!
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

function GoalButton({ icon: Icon, title, desc, active, onClick }: { icon: any, title: string, desc: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-4 rounded-xl border-2 text-left transition-all flex gap-4 items-start",
                active
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
        >
            <div className={cn("p-2 rounded-lg mt-0.5", active ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
        </button>
    );
}
