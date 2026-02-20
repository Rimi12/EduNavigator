"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
    progress: number; // 0-100
    className?: string;
    showLabel?: boolean;
}

export function ProgressBar({ progress, className, showLabel = false }: ProgressBarProps) {
    // Ensure progress is bounded between 0 and 100
    const clampledProgress = Math.max(0, Math.min(100, progress));

    return (
        <div className={cn("w-full flex items-center gap-3", className)}>
            <div className="flex-1 w-full h-2.5 bg-secondary rounded-full overflow-hidden relative">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${clampledProgress}%` }}
                />
            </div>
            {showLabel && (
                <span className="text-sm font-medium text-muted-foreground w-9 flex-shrink-0 text-right">
                    {clampledProgress}%
                </span>
            )}
        </div>
    );
}
