"use client";

import ReactMarkdown from "react-markdown";
import { BookOpenText } from "lucide-react";
import { glossaryData } from "@/data/glossaryData";
import { GlossaryTooltip } from "./GlossaryTooltip";
import React, { useMemo } from "react";

export function DeepDiveSection({ content }: { content: string }) {
    // We recreate this set every time DeepDiveSection renders a new step
    const seenTerms = new Set<string>();

    const sortedTerms = useMemo(() => {
        return [...glossaryData].sort((a, b) => b.term.length - a.term.length);
    }, []);

    const regex = useMemo(() => {
        const escapedTerms = sortedTerms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        // Matches the term followed optionally by hungarian suffix characters like '-ot', 'ekkel'
        // Wrap everything in a capture group so it stays in the split array
        return new RegExp(`\\b((?:${escapedTerms.join('|')})(?:[-a-záéíóüőúűö]*))\\b`, 'gi');
    }, [sortedTerms]);

    function renderTextWithTooltips(text: string) {
        const parts = text.split(regex);

        return parts.map((part, i) => {
            if (i % 2 === 1) { // Capturing group logic in JS split
                const lowerPart = part.toLowerCase();
                const foundTerm = sortedTerms.find(t => lowerPart.startsWith(t.term.toLowerCase()));

                if (foundTerm) {
                    if (seenTerms.has(foundTerm.term)) {
                        return <React.Fragment key={i}>{part}</React.Fragment>;
                    } else {
                        seenTerms.add(foundTerm.term);
                        return (
                            <GlossaryTooltip key={i} term={foundTerm.term} definition={foundTerm.definition}>
                                {part}
                            </GlossaryTooltip>
                        );
                    }
                }
            }
            return <React.Fragment key={i}>{part}</React.Fragment>;
        });
    }

    return (
        <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl">
                    <BookOpenText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Deep Dive</h2>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-li:my-1 marker:text-primary">
                <ReactMarkdown
                    components={{
                        // We intercept the Text node rendering indirectly via paragraphs and list items
                        p: ({ children }) => {
                            return <p className="leading-relaxed">
                                {React.Children.map(children, child => {
                                    if (typeof child === 'string') {
                                        return renderTextWithTooltips(child);
                                    }
                                    return child;
                                })}
                            </p>;
                        },
                        li: ({ children }) => {
                            return <li className="my-1">
                                {React.Children.map(children, child => {
                                    if (typeof child === 'string') {
                                        return renderTextWithTooltips(child);
                                    }
                                    return child;
                                })}
                            </li>;
                        },
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-2 rounded-r-lg font-medium italic !not-italic text-foreground">
                                {children}
                            </blockquote>
                        ),
                        h2: ({ children }) => <h2 className="text-primary mt-8 mb-4">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-foreground mt-6 mb-3">{children}</h3>,
                        ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </section>
    );
}
