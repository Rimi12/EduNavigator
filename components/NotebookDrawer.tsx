"use client";

import { useEffect, useState } from "react";
import { X, Pencil, Trash2, BookOpen, Plus, Save } from "lucide-react";
import { useProgressStore, Note } from "@/lib/progressStore";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NotebookDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const { notes, addNote, updateNote, deleteNote } = useProgressStore();

    // UI állapotok
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [currentText, setCurrentText] = useState("");

    // Figyeljük a globális 'open-notebook' eseményt (amivel kint gombbal is megnyitható)
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        document.addEventListener("open-notebook", handleOpen);
        return () => document.removeEventListener("open-notebook", handleOpen);
    }, []);

    const handleSaveNew = () => {
        if (!currentText.trim()) return;
        addNote(currentText);
        setCurrentText("");
        setIsCreating(false);
    };

    const handleSaveEdit = (id: string) => {
        if (!currentText.trim()) return;
        updateNote(id, currentText);
        setCurrentText("");
        setEditingId(null);
    };

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('hu-HU', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
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
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-card border-l border-border shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-border bg-muted/30">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 text-primary rounded-xl">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg leading-none">Jegyzetfüzet</h2>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Mentett ötletek ({notes.length})
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-secondary rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Note List / Editor */}
                        <div className="flex-1 overflow-y-auto p-5 pb-20">

                            {/* New Note Button */}
                            {!isCreating && !editingId && (
                                <button
                                    onClick={() => {
                                        setIsCreating(true);
                                        setCurrentText("");
                                    }}
                                    className="w-full mb-6 flex items-center justify-center gap-2 py-3 border-2 border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                                >
                                    <Plus className="w-5 h-5" />
                                    Új Jegyzet Létrehozása
                                </button>
                            )}

                            {/* Create/Edit Form */}
                            {(isCreating || editingId) && (
                                <div className="mb-6 bg-secondary/50 p-4 rounded-xl border border-primary/20 shadow-inner">
                                    <textarea
                                        autoFocus
                                        value={currentText}
                                        onChange={(e) => setCurrentText(e.target.value)}
                                        placeholder="Írd ide a legjobb promptjaidat vagy ötleteidet..."
                                        className="w-full p-3 min-h-[120px] bg-background border border-border rounded-lg resize-y focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                                    />
                                    <div className="flex items-center gap-2 mt-3 w-full justify-end">
                                        <button
                                            onClick={() => {
                                                setIsCreating(false);
                                                setEditingId(null);
                                                setCurrentText("");
                                            }}
                                            className="px-3 py-1.5 text-xs font-semibold hover:bg-muted rounded-md transition-colors"
                                        >
                                            Mégse
                                        </button>
                                        <button
                                            onClick={() => isCreating ? handleSaveNew() : handleSaveEdit(editingId!)}
                                            disabled={!currentText.trim()}
                                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-md disabled:opacity-50"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            {isCreating ? "Mentés" : "Frissítés"}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Existing Notes */}
                            <div className="space-y-4">
                                {notes.length === 0 && !isCreating ? (
                                    <div className="text-center text-muted-foreground mt-10">
                                        <p>Még nincsenek jegyzeteid.</p>
                                    </div>
                                ) : (
                                    notes.map((note) => (
                                        editingId !== note.id && (
                                            <div key={note.id} className="group relative bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                                                <div className="whitespace-pre-wrap text-sm text-foreground mb-3">{note.text}</div>

                                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                    <span>{formatDate(note.date)}</span>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                                        <button
                                                            onClick={() => {
                                                                setEditingId(note.id);
                                                                setCurrentText(note.text);
                                                            }}
                                                            className="p-1.5 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                                                            title="Szerkesztés"
                                                        >
                                                            <Pencil className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteNote(note.id)}
                                                            className="p-1.5 hover:bg-red-500/10 hover:text-red-500 rounded-md transition-colors"
                                                            title="Törlés"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))
                                )}
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
