"use client";

import { useCompletion } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles, Send, Settings2, RotateCcw, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/lib/progressStore";

export function PromptTester({ initialPrompt = "", defaultTemp = 0.5 }: { initialPrompt?: string, defaultTemp?: number }) {
    const { unlockBadge, addXp } = useProgressStore();
    const [temperature, setTemperature] = useState(defaultTemp);
    const [topP, setTopP] = useState(1.0);
    const [showSettings, setShowSettings] = useState(false);
    const [hasAttempted, setHasAttempted] = useState(false);

    const {
        completion,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        isLoading,
        error
    } = useCompletion({
        api: "/api/chat",
        body: {
            temperature,
            topP
        },
        onFinish: () => {
            if (!hasAttempted) {
                // First successful prompt generation rewards the user
                addXp(30);
                unlockBadge("Prompt Mester");
                setHasAttempted(true);
            }
        }
    });

    // Initialize the default input if none is set
    useEffect(() => {
        if (initialPrompt && !input) {
            setInput(initialPrompt);
        }
    }, [initialPrompt, setInput]);

    return (
        <div className="bg-card rounded-3xl border border-border shadow-md overflow-hidden flex flex-col my-8">
            {/* Header */}
            <div className="bg-primary/5 border-b border-border/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary font-bold">
                    <Sparkles className="w-5 h-5" />
                    Beépített AI Teszter (Labor)
                </div>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={cn(
                        "p-2 rounded-xl border border-transparent transition-all",
                        showSettings ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    title="Paraméter beállítások (Temperature, Top-P)"
                >
                    <Settings2 className="w-5 h-5" />
                </button>
            </div>

            {/* Settings Drawer (Parameter Lab) */}
            {showSettings && (
                <div className="bg-secondary/30 border-b border-border/50 px-6 py-5 animate-in slide-in-from-top-4 fade-in-50">
                    <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Settings2 className="w-4 h-4" /> Laborműszerek
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Temperature Slider */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Temperature (Kreativitás)
                                    <span className="text-xs text-muted-foreground block font-normal">Alacsony = Tényszerű | Magas = Kreatív</span>
                                </label>
                                <span className="font-mono text-primary bg-primary/10 px-2 py-0.5 rounded text-sm">{temperature.toFixed(1)}</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="2" step="0.1"
                                value={temperature}
                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                className="w-full accent-primary h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Top-P Slider */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Top-P (Fókusz)
                                    <span className="text-xs text-muted-foreground block font-normal">Szavak valószínűségi százaléka.</span>
                                </label>
                                <span className="font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded text-sm">{topP.toFixed(2)}</span>
                            </div>
                            <input
                                type="range"
                                min="0.1" max="1" step="0.05"
                                value={topP}
                                onChange={(e) => setTopP(parseFloat(e.target.value))}
                                className="w-full accent-indigo-500 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="p-6">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!input.trim() || isLoading) return;
                        handleSubmit(e);
                    }}
                    className="relative"
                >
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Add meg a promptod (utasításod) a modellnek..."
                        className="w-full block min-h-[120px] rounded-2xl bg-secondary/50 border border-border resize-y p-4 pl-4 pr-16 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow text-base sm:text-lg"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                                e.preventDefault();
                                if (input.trim() && !isLoading) {
                                    // Programmatic form submit hack for textarea
                                    const form = e.currentTarget.form;
                                    if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                                }
                            }
                        }}
                    />

                    {/* Action Buttons Inside Input */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        {input && (
                            <button
                                type="button"
                                onClick={() => setInput("")}
                                className="p-2 text-muted-foreground hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-colors"
                                title="Törlés"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className={cn(
                                "p-3 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20",
                                isLoading && "animate-pulse"
                            )}
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-0.5" />}
                        </button>
                    </div>
                </form>
                <div className="text-xs text-muted-foreground mt-3 text-right">
                    Tipp: <kbd className="font-sans px-1.5 py-0.5 bg-secondary border border-border rounded text-[10px]">Ctrl</kbd> + <kbd className="font-sans px-1.5 py-0.5 bg-secondary border border-border rounded text-[10px]">Enter</kbd> a küldéshez
                </div>
            </div>

            {/* Output Area (Only shown if completion exists or error) */}
            {(completion || error) && (
                <div className="bg-secondary/20 border-t border-border/50 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-2">
                    <h4 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        AI Válasz
                    </h4>

                    {error ? (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl">
                            <strong>Hiba történt:</strong> {error.message || "Nem sikerült kapcsolódni a modellhez."}
                        </div>
                    ) : (
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <ReactMarkdown
                                components={{
                                    p: ({ children }) => <p className="leading-relaxed mb-4 last:mb-0">{children}</p>,
                                    pre: ({ children }) => <pre className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-x-auto my-4">{children}</pre>,
                                    code: ({ children }) => <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-sm text-primary font-mono">{children}</code>
                                }}
                            >
                                {completion}
                            </ReactMarkdown>
                            {isLoading && (
                                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
