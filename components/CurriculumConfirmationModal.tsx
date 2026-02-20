"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface CurriculumConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemText: string;
}

// NOTE: Although we use standard inline complete buttons as requested in prompt, 
// this is the scaffolding for the confirmation modal if we explicitly need to block progression.
export function CurriculumConfirmationModal({ isOpen, onClose, onConfirm, itemText }: CurriculumConfirmationModalProps) {
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
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card w-full max-w-md rounded-2xl border border-border shadow-2xl overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Tanulási cél megerősítése</h3>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    Valóban elolvastad a Deep Dive részt és úgy érzed elsajátítottad az alábbi témakört?
                                </p>
                                <div className="bg-secondary/50 p-4 rounded-xl border border-border/50 text-sm font-medium mb-6">
                                    {itemText}
                                </div>

                                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                                    <button
                                        onClick={onClose}
                                        className="px-5 py-2.5 rounded-xl font-medium text-muted-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                                    >
                                        <X className="w-4 h-4" />
                                        Még tanulom
                                    </button>
                                    <button
                                        onClick={() => {
                                            onConfirm();
                                            onClose();
                                        }}
                                        className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                                    >
                                        <Check className="w-4 h-4" />
                                        Elsajátítottam
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
