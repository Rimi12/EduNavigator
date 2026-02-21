"use client";

import { useProgressStore } from "@/lib/progressStore";
import { ThemeToggle } from "./ThemeToggle";
import { ProgressBar } from "./ProgressBar";
import { GraduationCap, Search, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TopBar() {
    const getOverallProgress = useProgressStore(state => state.getOverallProgress);
    const checkStreak = useProgressStore(state => state.checkStreak);
    const xp = useProgressStore(state => state.xp);
    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration warnings and trigger streak check
    useEffect(() => {
        setProgress(getOverallProgress());
        checkStreak();
        setMounted(true);
    }, [getOverallProgress, checkStreak]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto w-full gap-4">

                {/* Logo and Brand */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-foreground">
                            AI EduNavigator
                        </span>
                    </Link>
                </div>

                {/* Global Progress */}
                <div className="flex-1 flex flex-col justify-center px-4 max-w-md ml-auto sm:ml-4">
                    <div className="flex items-center justify-between mb-1 hidden sm:flex">
                        <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                            Teljes Haladás
                        </span>
                        <span className="text-xs font-bold text-primary">
                            {mounted ? progress : 0}%
                        </span>
                    </div>
                    <ProgressBar progress={mounted ? progress : 0} className="h-1.5 sm:h-2" />
                </div>

                {/* End Actions (XP & Theme) */}
                <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                    {mounted && (
                        <Link href="/profil" className="flex items-center gap-1.5 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 px-3 py-1.5 rounded-full font-bold border border-amber-500/20 shadow-inner transition-colors">
                            <span className="text-sm">{xp}</span>
                            <span className="text-[10px] uppercase tracking-wider opacity-80 mt-0.5">XP</span>
                        </Link>
                    )}

                    {/* Search Trigger Panel */}
                    <button
                        onClick={() => document.dispatchEvent(new CustomEvent('open-search'))}
                        className="flex items-center justify-center w-9 h-9 sm:w-auto sm:px-3 sm:py-1.5 bg-muted/50 text-muted-foreground hover:bg-muted rounded-full text-sm font-medium border border-border/50 transition-colors"
                        aria-label="Keresés (Ctrl+K)"
                    >
                        <Search className="w-4 h-4 sm:mr-1.5" />
                        <span className="hidden sm:inline-block opacity-80">Keresés</span>
                        <kbd className="hidden lg:inline-flex opacity-50 text-[10px] ml-2 bg-background px-1.5 py-0.5 rounded border border-border">⌘K</kbd>
                    </button>

                    {/* Notebook Trigger Panel */}
                    <button
                        onClick={() => document.dispatchEvent(new CustomEvent('open-notebook'))}
                        className="flex items-center justify-center w-9 h-9 sm:w-auto sm:px-3 sm:py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-sm font-medium border border-primary/20 transition-colors"
                        aria-label="Jegyzetfüzet"
                    >
                        <BookOpen className="w-4 h-4 sm:mr-1.5" />
                        <span className="hidden sm:inline-block font-bold">Jegyzetek</span>
                    </button>

                    <ThemeToggle />
                </div>

            </div>
        </header>
    );
}
