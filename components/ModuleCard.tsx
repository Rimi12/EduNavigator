"use client";

import { Module } from "@/types";
import Link from "next/link";
import * as Icons from "lucide-react";
import { useProgressStore } from "@/lib/progressStore";
import { ProgressBar } from "./ProgressBar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ModuleCard({ module }: { module: Module }) {
  const IconComponent = (Icons as any)[module.icon] || Icons.BookOpen;

  const getModuleProgress = useProgressStore(state => state.getModuleProgress);
  const completedModules = useProgressStore(state => state.completedModules);

  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(getModuleProgress(module.id));
    setIsCompleted(completedModules.includes(module.id));
    setMounted(true);
  }, [getModuleProgress, completedModules, module.id]);

  return (
    <Link href={`/module/${module.id}`} className="group flex flex-col h-full">
      <div className={cn(
        "relative flex flex-col h-full p-6 rounded-2xl border transition-all duration-300",
        "bg-card text-card-foreground hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
        isCompleted ? "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10" : "border-border hover:border-primary/50"
      )}>
        {/* Day Badge */}
        <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {module.dayInSchedule}
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "p-3 rounded-xl transition-colors",
            isCompleted ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-primary/10 text-primary group-hover:bg-primary/20"
          )}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1 pt-1">
            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors flex items-center gap-2">
              {module.title}
              {mounted && isCompleted && (
                <Icons.CheckCircle2 className="w-5 h-5 text-emerald-500" />
              )}
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
          {module.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Haladás</span>
            <span className={cn(
              "text-sm font-bold",
              isCompleted ? "text-emerald-500" : "text-primary"
            )}>
              {mounted ? progress : 0}%
            </span>
          </div>
          <ProgressBar
            progress={mounted ? progress : 0}
            className="h-2"
          />
        </div>
      </div>
    </Link>
  );
}
