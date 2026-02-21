"use client";

import { use, useState } from "react";
import { modules } from "@/data/courseData";
import { notFound } from "next/navigation";
import { CoffeeBreakCard } from "@/components/CoffeeBreakCard";
import { DeepDiveSection } from "@/components/DeepDiveSection";
import { SandboxActionBar } from "@/components/SandboxActionBar";
import { QuizWidget } from "@/components/QuizWidget";
import { CurriculumConfirmationModal } from "@/components/CurriculumConfirmationModal";
import { CurriculumContentPanel } from "@/components/CurriculumContentPanel";
import { CompletionConfetti } from "@/components/CompletionConfetti";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/lib/progressStore";
import { useShallow } from 'zustand/react/shallow';
import { PromptTester } from "@/components/PromptTester";
import { ChallengeWidget } from "@/components/ChallengeWidget";
import { CurriculumItem } from "@/types";

export default function ModulePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const moduleId = parseInt(resolvedParams.id);
    const module = modules.find(m => m.id === moduleId);

    const [selectedCurriculumItem, setSelectedCurriculumItem] = useState<CurriculumItem | null>(null);

    const { completedCurriculumItemsMap, toggleCurriculumItem, toggleModuleComplete, completedModules } = useProgressStore(
        useShallow((state) => ({
            completedCurriculumItemsMap: state.completedCurriculumItems,
            toggleCurriculumItem: state.toggleCurriculumItem,
            toggleModuleComplete: state.toggleModuleComplete,
            completedModules: state.completedModules,
        }))
    );
    const completedCurriculumItems = completedCurriculumItemsMap[moduleId] || [];

    if (!module) {
        notFound();
    }

    const isModuleCompleted = completedModules.includes(module.id);
    const allItemsCompleted = module.curriculum.length > 0 && completedCurriculumItems.length === module.curriculum.length;

    const IconComponent = (Icons as any)[module.icon] || Icons.BookOpen;

    return (
        <div className="mx-auto max-w-4xl p-4 sm:p-8 pb-32">

            {/* Header Section */}
            <div className="mb-10 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                        {module.dayInSchedule}
                    </span>
                    {isModuleCompleted && (
                        <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-bold tracking-wide flex items-center gap-1.5">
                            <Icons.CheckCircle2 className="w-4 h-4" /> Befejezve
                        </span>
                    )}
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-2xl text-primary">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    {module.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                    {module.description}
                </p>
            </div>

            {/* Coffee Break Micro-Learning (If exists) */}
            {module.microLearning && (
                <div className="mb-12">
                    <CoffeeBreakCard content={module.microLearning} />
                </div>
            )}

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2 space-y-8">

                    {/* Pain Points */}
                    <section className="bg-secondary/50 rounded-2xl p-6 border border-border">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Icons.Target className="w-5 h-5 text-red-400" />
                            Milyen problémákat old meg?
                        </h3>
                        <ul className="space-y-3">
                            {module.painPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                    <Icons.XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* When to Choose */}
                    <section className="bg-secondary/50 rounded-2xl p-6 border border-border">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Icons.Lightbulb className="w-5 h-5 text-amber-500" />
                            Mikor válaszd ezt a technológiát?
                        </h3>
                        <ul className="space-y-3">
                            {module.whenToChoose.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                    <Icons.Check className="w-5 h-5 text-emerald-500/50 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>

                <div className="space-y-8">
                    {/* Curriculum Checklist */}
                    <section className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Icons.ListTodo className="w-5 h-5 text-primary" />
                            Tanulási Célok
                        </h3>
                        <div className="space-y-1">
                            {module.curriculum.map((item) => {
                                const isItemCompleted = completedCurriculumItems.includes(item.id);
                                const isInteractive = !!item.content || !!item.videoUrl;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            if (isInteractive) {
                                                setSelectedCurriculumItem(item);
                                            } else {
                                                toggleCurriculumItem(module.id, item.id);
                                            }
                                        }}
                                        className="w-full text-left flex items-start justify-between gap-3 p-2 hover:bg-secondary rounded-lg transition-colors group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={cn(
                                                "mt-0.5 w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors",
                                                isItemCompleted
                                                    ? "bg-emerald-500 border-emerald-500 text-white"
                                                    : "border-muted-foreground/30 group-hover:border-primary/50"
                                            )}>
                                                {isItemCompleted && <Icons.Check className="w-3.5 h-3.5" />}
                                            </div>
                                            <span className={cn(
                                                "text-sm leading-tight transition-all",
                                                isItemCompleted ? "text-muted-foreground line-through opacity-70" : "text-foreground group-hover:text-primary"
                                            )}>
                                                {item.text}
                                            </span>
                                        </div>

                                        {/* Interaktív Tartalom Vizuális Jelző */}
                                        {isInteractive && !isItemCompleted && (
                                            <div className="shrink-0 text-primary/70 group-hover:text-primary transition-colors flex items-center pr-1">
                                                {item.videoUrl ? <Icons.PlayCircle className="w-4 h-4" /> : <Icons.BookOpen className="w-4 h-4" />}
                                                <span className="text-[10px] uppercase font-bold ml-1 hidden lg:inline-block">Olvasás</span>
                                            </div>
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>

            {/* Deep Dive (Markdown) */}
            {module.deepDive && (
                <div className="mb-16">
                    <DeepDiveSection content={module.deepDive} />
                </div>
            )}

            {/* Projects */}
            {module.projects && module.projects.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Icons.Rocket className="w-6 h-6 text-primary" />
                        Gyakorlati Projektek
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {module.projects.map((project, idx) => (
                            <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/30 transition-colors">
                                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                                {project.prompt && (
                                    <div className="bg-secondary/50 p-3 rounded-lg border border-border/50 text-sm font-mono text-muted-foreground">
                                        <span className="text-primary font-bold mr-2">Prompt:</span>
                                        {project.prompt}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Prompt Tester Section */}
            {module.hasPromptTester && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Icons.Sparkles className="w-6 h-6 text-primary" />
                        AI Labor - Próbáld ki Te is!
                    </h2>
                    <PromptTester defaultTemp={0.7} />
                </section>
            )}

            {/* Interactive Quiz */}
            {module.interactiveElement && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Icons.BrainCircuit className="w-6 h-6 text-indigo-500" />
                        Tudáspróba
                    </h2>
                    <QuizWidget quiz={module.interactiveElement} />
                </section>
            )}

            {/* AI Grader Challenge */}
            {module.challenge && (
                <section className="mb-16">
                    <ChallengeWidget challenge={module.challenge} moduleId={module.id} />
                </section>
            )}

            {/* Sandbox Tools */}
            {module.sandboxLinks && module.sandboxLinks.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Icons.Wrench className="w-6 h-6 text-orange-500" />
                        Eszközök & Platformok
                    </h2>
                    <SandboxActionBar links={module.sandboxLinks} />
                </section>
            )}

            {/* Module Completion Action */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">Végeztél a modullal?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                    {allItemsCompleted
                        ? "Minden tanulási cél pipálva lett! Jelöld be a modult befejezettként."
                        : "Még maradtak befejezetlen tanulási célok a listán. Ettől függetlenül lezárhatod a modult."}
                </p>
                <button
                    onClick={() => toggleModuleComplete(module.id)}
                    className={cn(
                        "px-8 py-3 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-lg",
                        isModuleCompleted
                            ? "bg-secondary text-foreground hover:bg-secondary/80 shadow-none"
                            : "bg-primary hover:bg-primary/90 hover:shadow-primary/25"
                    )}
                >
                    {isModuleCompleted ? "✓ Modul Befejezve (Visszavonás)" : "Modul Célok Teljesítve"}
                </button>
            </div>

            <CompletionConfetti isComplete={isModuleCompleted} />

            <CurriculumContentPanel
                item={selectedCurriculumItem}
                moduleId={module.id}
                isOpen={!!selectedCurriculumItem}
                onClose={() => setSelectedCurriculumItem(null)}
                onComplete={(mId, iId) => toggleCurriculumItem(mId, iId)}
                isAlreadyCompleted={selectedCurriculumItem ? completedCurriculumItems.includes(selectedCurriculumItem.id) : false}
            />

        </div>
    );
}
