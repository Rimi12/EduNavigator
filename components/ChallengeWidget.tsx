"use client";

import { useState } from "react";
import { Challenge } from "@/types";
import { useProgressStore } from "@/lib/progressStore";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Loader2, CheckCircle2, XCircle, Send, Trophy, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import ReactMarkdown from "react-markdown";

interface ChallengeWidgetProps {
    challenge: Challenge;
    moduleId: number;
}

interface EvaluationResult {
    passed: boolean;
    score: number;
    feedback: string;
    generatedText: string;
}

export function ChallengeWidget({ challenge, moduleId }: ChallengeWidgetProps) {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);
    const [hasRewarded, setHasRewarded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { addXp, unlockBadge } = useProgressStore();

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const handleSubmit = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await fetch('/api/evaluate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt,
                    goal: challenge.goal,
                    constraints: challenge.constraints
                })
            });

            if (!res.ok) {
                throw new Error("Hiba a szerver kommunikációban.");
            }

            const data: EvaluationResult = await res.json();
            setResult(data);

            if (data.passed && !hasRewarded) {
                triggerConfetti();
                addXp(100);
                unlockBadge("Szintet lépő");

                // Specific badge if it's prompt module
                if (moduleId === 4) unlockBadge("Prompt Zsonglőr");
                if (moduleId === 1) unlockBadge("AI Törő");

                setHasRewarded(true);
            }

        } catch (err: any) {
            setError(err.message || "Ismeretlen hiba történt.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-950/20 to-slate-900/40 border border-indigo-500/20 rounded-3xl overflow-hidden mt-12 mb-8 shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-transparent px-6 py-4 border-b border-indigo-500/10 flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
                    <Swords className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold tracking-tight text-indigo-50">Interaktív Kihívás</h3>
                    <p className="text-sm font-medium text-indigo-300">Bizonyíts, és szerezz 100 XP-t!</p>
                </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8">
                {/* Left: Challenge Guidelines */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-white">{challenge.title}</h4>
                        <div className="bg-black/20 p-4 rounded-2xl border border-white/5 space-y-3 text-sm">
                            <div>
                                <strong className="text-indigo-400 block mb-1 uppercase tracking-wider text-xs">Célkitűzés (Goal)</strong>
                                <span className="text-slate-300">{challenge.goal}</span>
                            </div>
                            <div>
                                <strong className="text-rose-400 block mb-1 uppercase tracking-wider text-xs">Korlátok (Constraints)</strong>
                                <span className="text-slate-300">{challenge.constraints}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-300 ml-1">A te promptod (utasításod):</label>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Kezdd el gépelni IDE a promptot..."
                            className="w-full h-32 bg-black/40 border border-slate-700 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all font-mono text-sm leading-relaxed"
                            disabled={isLoading}
                        />

                        <div className="flex justify-between items-center pt-2">
                            <span className="text-xs text-muted-foreground mr-4">Az AI "Grader" szigorúan vizsgálni fogja a kimenetet.</span>
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading || prompt.trim().length === 0}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-600/20"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                Értékelés Kérése
                            </button>
                        </div>
                        {error && <p className="text-sm text-red-500 mt-2 font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">{error}</p>}
                    </div>
                </div>

                {/* Right: Results Display */}
                <div className="md:w-5/12 flex flex-col">
                    <AnimatePresence mode="wait">
                        {!result && !isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="flex-1 border-2 border-dashed border-slate-700/50 rounded-3xl flex flex-col items-center justify-center p-8 text-center min-h-[300px]"
                            >
                                <Trophy className="w-12 h-12 text-slate-700 mb-4" />
                                <h5 className="font-bold text-slate-400 mb-2">Várom az eredményt</h5>
                                <p className="text-xs text-slate-500 max-w-[200px]">Futtasd le a promptot az értékeléshez.</p>
                            </motion.div>
                        )}

                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="flex-1 bg-black/20 rounded-3xl flex flex-col items-center justify-center p-8 text-center border border-white/5"
                            >
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 rounded-full animate-pulse" />
                                    <Loader2 className="w-12 h-12 text-indigo-400 animate-spin relative" />
                                </div>
                                <h5 className="font-bold text-slate-300 mb-2 animate-pulse">AI Értékelő Fut...</h5>
                                <p className="text-xs text-slate-500">1. Átlagos szöveggenerálás történik<br />2. A minőséget a 'Grader' vizsgálja</p>
                            </motion.div>
                        )}

                        {result && !isLoading && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className={`flex-1 rounded-3xl p-6 border flex flex-col shadow-2xl relative overflow-hidden ${result.passed ? "bg-emerald-950/30 border-emerald-500/30" : "bg-rose-950/30 border-rose-500/30"
                                    }`}
                            >
                                {/* Subtle background glow based on result */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 blur-3xl opacity-20 rounded-full ${result.passed ? 'bg-emerald-500' : 'bg-rose-500'}`} />

                                <div className="flex items-start justify-between mb-6 relative">
                                    <div className="flex items-center gap-3">
                                        {result.passed ? (
                                            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-full">
                                                <CheckCircle2 className="w-8 h-8" />
                                            </div>
                                        ) : (
                                            <div className="p-2 bg-rose-500/20 text-rose-400 rounded-full">
                                                <XCircle className="w-8 h-8" />
                                            </div>
                                        )}
                                        <div>
                                            <h5 className="font-black text-2xl tracking-tight text-white">{result.score}/100</h5>
                                            <p className={`text-xs font-bold uppercase tracking-wider ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                {result.passed ? 'Kihívás Teljesítve' : 'Sikertelen Próba'}
                                            </p>
                                        </div>
                                    </div>
                                    {result.passed && hasRewarded && (
                                        <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 animate-pulse">
                                            +100 XP
                                        </div>
                                    )}
                                </div>

                                <div className="bg-black/40 rounded-xl p-4 mb-4 border border-white/5 relative z-10 flex-1">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">AI Grader Visszajelzés:</span>
                                    <p className="text-sm text-slate-300 leading-relaxed font-medium">"{result.feedback}"</p>
                                </div>

                                {result.passed && (
                                    <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-emerald-300 text-sm font-bold flex items-center justify-center gap-2 mb-4">
                                        <Trophy className="w-4 h-4" />
                                        {challenge.successKudos}
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <details className="group">
                                        <summary className="text-xs font-bold text-muted-foreground cursor-pointer flex items-center gap-1 hover:text-slate-300 transition-colors">
                                            Kíváncsi vagy mit generált? <ArrowRight className="w-3 h-3 group-open:rotate-90 transition-transform" />
                                        </summary>
                                        <div className="mt-3 p-3 bg-black/60 border border-slate-800 rounded-lg max-h-40 overflow-y-auto">
                                            <div className="prose prose-sm prose-invert text-xs">
                                                <ReactMarkdown>{result.generatedText}</ReactMarkdown>
                                            </div>
                                        </div>
                                    </details>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
