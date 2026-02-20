"use client";

import ReactMarkdown from "react-markdown";
import { BookOpenText } from "lucide-react";

export function DeepDiveSection({ content }: { content: string }) {
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
