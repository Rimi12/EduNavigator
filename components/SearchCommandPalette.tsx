"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Layers } from "lucide-react";
import { modules } from "@/data/courseData";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function SearchCommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();

    // Billentyűparancs figyelése (Ctrl+K vagy Cmd+K)
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };

        const handleCustomEvent = () => setIsOpen(true);

        document.addEventListener("keydown", down);
        document.addEventListener("open-search", handleCustomEvent);
        return () => {
            document.removeEventListener("keydown", down);
            document.removeEventListener("open-search", handleCustomEvent);
        };
    }, []);

    // Ha bezárjuk, ürítjük az inputot is
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => setQuery(""), 200);
        }
    }, [isOpen]);

    // Keresési logika (Modul címek és Curriculum elemek alapján)
    const filteredModules = modules.filter((mod) => {
        const q = query.toLowerCase();
        // Cím, leírás, painpoints
        const textMatch =
            mod.title.toLowerCase().includes(q) ||
            mod.description.toLowerCase().includes(q) ||
            mod.painPoints.some(p => p.toLowerCase().includes(q));

        // Curriculum elemekben keresés
        const currMatch = mod.curriculum.some(c => c.text.toLowerCase().includes(q));

        return textMatch || currMatch;
    });

    const handleSelect = (moduleId: number) => {
        setIsOpen(false);
        router.push(`/module/${moduleId}`);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32 px-4 shadow-2xl">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ ease: "easeOut", duration: 0.15 }}
                        className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
                    >
                        {/* Search Input Area */}
                        <div className="flex items-center gap-3 p-4 border-b border-border">
                            <Search className="w-5 h-5 text-muted-foreground ml-2" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Keresd meg bármely témát vagy feladatot..."
                                className="flex-1 bg-transparent text-foreground outline-none text-lg placeholder:text-muted-foreground"
                            />
                            <div className="flex items-center gap-2">
                                <kbd className="hidden sm:inline-flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                                    ESC
                                </kbd>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-secondary rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Search Results Area */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {query.trim() === "" ? (
                                <div className="p-8 text-center text-muted-foreground flex flex-col items-center gap-2">
                                    <Search className="w-10 h-10 opacity-20 mb-2" />
                                    <p className="font-medium">Írj be egy kulcsszót a kereséshez.</p>
                                    <p className="text-sm opacity-80">Pl.: RAG, Agent, Prompt, LLM</p>
                                </div>
                            ) : filteredModules.length === 0 ? (
                                <div className="p-8 text-center text-muted-foreground">
                                    Nincs találat a "{query}" kifejezésre.
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1">
                                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Modulok és Leckék
                                    </div>
                                    {filteredModules.map((mod) => (
                                        <button
                                            key={mod.id}
                                            onClick={() => handleSelect(mod.id)}
                                            className={cn(
                                                "w-full flex items-start gap-4 p-3 rounded-xl hover:bg-secondary text-left transition-colors group",
                                                "focus:outline-none focus:bg-secondary"
                                            )}
                                        >
                                            <div className="mt-1 bg-primary/10 text-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                                                <Layers className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <span className="font-bold">{mod.title}</span>
                                                <span className="text-sm text-muted-foreground line-clamp-1">{mod.description}</span>

                                                {/* Kiemeljük az esetleges curriculum találatokat */}
                                                {query.trim() !== "" && mod.curriculum.some(c => c.text.toLowerCase().includes(query.toLowerCase())) && (
                                                    <div className="mt-2 text-xs text-primary bg-primary/5 px-2 py-1 flex items-center gap-1 rounded inline-block">
                                                        <BookOpen className="w-3 h-3" /> Találat a belső témakörökben
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-xs font-medium text-muted-foreground mt-1 whitespace-nowrap">
                                                {mod.dayInSchedule}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
