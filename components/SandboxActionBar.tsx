"use client";

import { SandboxLink } from "@/types";
import { ExternalLink, Wrench, Github, Terminal } from "lucide-react";

export function SandboxActionBar({ links }: { links: SandboxLink[] }) {
    if (!links || links.length === 0) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, idx) => {

                let Icon = ExternalLink;
                let colorClass = "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";

                if (link.type === 'colab') {
                    colorClass = "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 hover:bg-orange-500/20";
                    Icon = Terminal; // Colab placeholder icon
                } else if (link.type === 'github') {
                    colorClass = "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20 hover:bg-slate-500/20";
                    Icon = Github;
                } else {
                    colorClass = "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20";
                    Icon = Wrench;
                }

                return (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${colorClass}`}
                    >
                        <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-semibold text-sm sm:text-base">{link.label}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                );
            })}
        </div >
    );
}
