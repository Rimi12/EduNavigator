"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "@/data/courseData";
import { useProgressStore } from "@/lib/progressStore";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { useEffect, useState } from "react";

export function Sidebar() {
    const pathname = usePathname();
    const completedModules = useProgressStore(state => state.completedModules);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <aside className="w-72 shrink-0 border-r border-border min-h-[calc(100vh-4rem)] hidden lg:block sticky top-16 bg-card/30">
            <div className="p-6 h-full overflow-y-auto pb-24">
                <h4 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Képzési Modulok
                </h4>

                <nav className="flex flex-col gap-1.5">
                    {modules.map((module) => {
                        const isActive = pathname === `/module/${module.id}`;
                        const isCompleted = mounted && completedModules.includes(module.id);

                        // Dynamically get the Lucide icon component
                        const IconComponent = (Icons as any)[module.icon] || Icons.BookOpen;

                        return (
                            <Link
                                key={module.id}
                                href={`/module/${module.id}`}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden",
                                    isActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                {/* Optional Gradient Indicator for active state */}
                                {isActive && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md" />
                                )}

                                <IconComponent
                                    className={cn(
                                        "w-5 h-5 flex-shrink-0 transition-colors",
                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                    )}
                                />

                                <div className="flex flex-col truncate flex-1 leading-tight">
                                    <span className="truncate text-sm">{module.title}</span>
                                    <span className="text-[10px] opacity-70 mt-0.5">{module.dayInSchedule}</span>
                                </div>

                                {isCompleted && (
                                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 bg-background rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside >
    );
}
