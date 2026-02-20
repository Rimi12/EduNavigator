"use client";

import { useProgressStore } from "@/lib/progressStore";
import { ThemeToggle } from "./ThemeToggle";
import { ProgressBar } from "./ProgressBar";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TopBar() {
    const getOverallProgress = useProgressStore(state => state.getOverallProgress);
    const [progress, setProgress] = useState(0);

    // Prevent hydration warnings
    useEffect(() => {
        setProgress(getOverallProgress());
    }, [getOverallProgress]);

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
                            {progress}%
                        </span>
                    </div>
                    <ProgressBar progress={progress} className="h-1.5 sm:h-2" />
                </div>

                {/* End Actions */}
                <div className="flex items-center gap-2 ml-auto">
                    <ThemeToggle />
                </div>

            </div>
        </header>
    );
}
