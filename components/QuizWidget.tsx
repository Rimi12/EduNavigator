"use client";

import { useState } from "react";
import { QuizQuestion } from "@/types";
import { CheckCircle2, XCircle, Brain } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/lib/progressStore";

export function QuizWidget({ quiz }: { quiz: QuizQuestion }) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isCorrect = selectedIdx === quiz.correct;

    const triggerConfetti = () => {
        const duration = 2000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#4f46e5', '#6366f1', '#10b981']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#4f46e5', '#6366f1', '#10b981']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    const addXp = useProgressStore(state => state.addXp);
    const unlockBadge = useProgressStore(state => state.unlockBadge);

    // We track if this specific quiz was already answered correctly to prevent infinite XP farming
    const [hasRewarded, setHasRewarded] = useState(false);

    const handleSubmit = () => {
        if (selectedIdx === null) return;
        setIsSubmitted(true);
        if (selectedIdx === quiz.correct) {
            triggerConfetti();
            if (!hasRewarded) {
                addXp(20);
                unlockBadge("Első Kvíz Hibátlanul");
                setHasRewarded(true);
            }
        }
    };

    const handleReset = () => {
        setSelectedIdx(null);
        setIsSubmitted(false);
    };

    return (
        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-md relative overflow-hidden">

            {/* Quiz Header */}
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground leading-snug">
                {quiz.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 mb-8">
                {quiz.options.map((option, idx) => {

                    let stateClass = "border-border hover:border-primary/50 hover:bg-secondary";

                    if (isSubmitted) {
                        if (idx === quiz.correct) {
                            stateClass = "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"; // Always highlight correct
                        } else if (idx === selectedIdx && !isCorrect) {
                            stateClass = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300"; // Highlight wrong choice
                        } else {
                            stateClass = "opacity-50 border-border bg-transparent"; // Fade out others
                        }
                    } else if (selectedIdx === idx) {
                        stateClass = "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500 text-indigo-700 dark:text-indigo-300"; // Selected before submit
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => !isSubmitted && setSelectedIdx(idx)}
                            disabled={isSubmitted}
                            className={cn(
                                "w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between",
                                stateClass
                            )}
                        >
                            <span className="flex-1 pr-4">{option}</span>
                            {isSubmitted && idx === quiz.correct && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                            {isSubmitted && idx === selectedIdx && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                        </button>
                    );
                })}
            </div>

            {/* Action Area */}
            {!isSubmitted ? (
                <button
                    onClick={handleSubmit}
                    disabled={selectedIdx === null}
                    className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                    <Brain className="w-5 h-5" />
                    Ellenőrzés
                </button>
            ) : (
                <div className="animate-fade-in">
                    <div className={cn(
                        "p-5 rounded-xl border mb-6 flex items-start gap-4",
                        isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"
                    )}>
                        {isCorrect ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5" />
                        ) : (
                            <XCircle className="w-6 h-6 text-red-500 mt-0.5" />
                        )}
                        <div>
                            <h4 className={cn("font-bold text-lg mb-1", isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")}>
                                {isCorrect ? "Helyes válasz! Szép munka!" : "Nem egészen..."}
                            </h4>
                            {quiz.explanation && (
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                    {quiz.explanation}
                                </p>
                            )}
                        </div>
                    </div>

                    {!isCorrect && (
                        <button
                            onClick={handleReset}
                            className="px-6 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-medium transition-colors"
                        >
                            Újra próbálom
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
