"use client";

import { cheatSheets } from "@/data/cheatSheetsData";
import { Printer, Library, Terminal, Wrench, Database } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Helper for dynamic icons
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Terminal": return <Terminal className="w-6 h-6" />;
        case "Wrench": return <Wrench className="w-6 h-6" />;
        case "Database": return <Database className="w-6 h-6" />;
        default: return <Library className="w-6 h-6" />;
    }
};

export default function PuskakPage() {
    return (
        <div className="p-4 sm:p-8 pb-20 max-w-5xl mx-auto print:p-0 print:max-w-none">

            {/* Header (Hidden when printing) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 print:hidden">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                        <Library className="w-8 h-8 text-primary" />
                        AI Puskák
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Gyors, 1-oldalas összefoglalók (Cheat Sheets) a mindennapi munkához.
                    </p>
                </div>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                >
                    <Printer className="w-5 h-5" />
                    Mentés PDF-ként / Nyomtatás
                </button>
            </div>

            {/* Print Only Title */}
            <div className="hidden print:block mb-8 text-center text-black border-b-2 border-black pb-4">
                <h1 className="text-3xl font-black uppercase tracking-wider">AI EduNavigator Cheat Sheets</h1>
                <p className="text-sm font-bold mt-1 text-gray-500">Minden, amit a generatív AI-ról gyorsan tudni kell</p>
            </div>

            {/* Content Sheets */}
            <div className="flex flex-col gap-12 print:gap-16">
                {cheatSheets.map((sheet) => (
                    <section
                        key={sheet.id}
                        className="bg-card border border-border rounded-3xl p-8 shadow-sm print:shadow-none print:border-2 print:border-black print:rounded-none print:bg-white print:text-black print:page-break-inside-avoid"
                    >
                        {/* Sheet Header */}
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border print:border-black">
                            <div className="p-3 bg-primary/10 text-primary rounded-2xl print:bg-gray-200 print:text-black print:rounded-none">
                                {getIcon(sheet.icon)}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight print:text-black">{sheet.title}</h2>
                                <p className="text-muted-foreground mt-1 print:text-gray-600">{sheet.description}</p>
                            </div>
                        </div>

                        {/* Sheet Sections Grids */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {sheet.sections.map((section, idx) => (
                                <div key={idx} className="bg-secondary/30 p-5 rounded-2xl border border-border/50 print:border-black print:rounded-none bg-transparent">
                                    <h3 className="font-bold text-lg mb-2 text-primary print:text-black">{section.title}</h3>
                                    <div className="prose prose-sm dark:prose-invert prose-p:leading-relaxed print:prose-h3:text-black print:prose-p:text-gray-800 print:prose-strong:text-black max-w-none">
                                        <ReactMarkdown>
                                            {section.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

        </div>
    );
}
