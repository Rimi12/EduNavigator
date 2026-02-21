"use client";

import { X, CheckCircle2, PlayCircle, BookOpen } from "lucide-react";
import { CurriculumItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CurriculumContentPanelProps {
    item: CurriculumItem | null;
    moduleId: number | null;
    isOpen: boolean;
    onClose: () => void;
    onComplete: (moduleId: number, itemId: string) => void;
    isAlreadyCompleted: boolean;
}

export function CurriculumContentPanel({
    item,
    moduleId,
    isOpen,
    onClose,
    onComplete,
    isAlreadyCompleted
}: CurriculumContentPanelProps) {
    if (!item || !moduleId) return null;

    const handleComplete = () => {
        onComplete(moduleId, item.id);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Side/Center Panel */}
                    <div className="fixed inset-0 z-[100] flex items-center justify-end md:p-4">
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="w-full h-full md:w-[600px] lg:w-[800px] md:h-auto md:max-h-[90vh] bg-card border-l md:border border-border shadow-2xl flex flex-col md:rounded-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-5 md:p-6 border-b border-border bg-muted/30 sticky top-0 z-10">
                                <div className="flex items-start gap-4 pr-8">
                                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0 mt-1">
                                        {item.videoUrl ? <PlayCircle className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                                            {item.subcategory || "Tanulási Cél"}
                                        </p>
                                        <h2 className="font-extrabold text-xl md:text-2xl leading-tight">
                                            {item.text}
                                        </h2>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2.5 bg-background/50 hover:bg-secondary rounded-full transition-colors absolute top-5 right-5"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto p-5 md:p-8">

                                {/* Video Player */}
                                {item.videoUrl && (
                                    <div className="mb-8 rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-black relative">
                                        <iframe
                                            src={item.videoUrl}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full"
                                        ></iframe>
                                    </div>
                                )}

                                {/* Markdown Content */}
                                {item.content ? (
                                    <div className="prose prose-invert max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {item.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-xl">
                                        <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p>Ehhez a célhoz nem tartozik külön olvasnivaló lecke.</p>
                                    </div>
                                )}
                            </div>

                            {/* Footer / Action */}
                            <div className="p-5 md:p-6 border-t border-border bg-card">
                                <button
                                    onClick={handleComplete}
                                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${isAlreadyCompleted
                                            ? "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                                            : "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
                                        }`}
                                >
                                    {isAlreadyCompleted ? (
                                        <>Visszavonás (Még tanulom)</>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="w-6 h-6" />
                                            Megértettem, Cél Teljesítve!
                                        </>
                                    )}
                                </button>
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
