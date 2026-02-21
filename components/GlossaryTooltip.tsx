"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface GlossaryTooltipProps {
    term: string;
    definition: string;
    children: React.ReactNode;
}

export function GlossaryTooltip({ term, definition, children }: GlossaryTooltipProps) {
    const [open, setOpen] = useState(false);

    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root open={open} onOpenChange={setOpen}>
                <Tooltip.Trigger asChild>
                    <span
                        className="inline-flex items-center gap-1 border-b border-dashed border-primary/50 text-primary cursor-help hover:bg-primary/10 transition-colors px-1 rounded-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(!open);
                        }}
                    >
                        {children}
                        <Info className="w-3 h-3 opacity-70" />
                    </span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className={cn(
                            "z-50 max-w-xs sm:max-w-sm bg-card border border-border text-card-foreground",
                            "p-4 rounded-xl shadow-xl shadow-black/20 text-sm leading-relaxed",
                            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                        )}
                        sideOffset={5}
                    >
                        <div className="font-bold text-primary mb-1 text-base">{term}</div>
                        <p className="opacity-90">{definition}</p>
                        <Tooltip.Arrow className="fill-card stroke-border" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
