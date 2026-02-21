"use client";

import { useState } from "react";
import { glossaryData } from "@/data/glossaryData";
import { Search, BookA } from "lucide-react";

export default function GlossaryPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter and sort alphabetically
    const filteredTerms = glossaryData
        .filter(item =>
            item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.definition.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.term.localeCompare(b.term));

    return (
        <div className="max-w-4xl mx-auto w-full pt-4 sm:pt-8 animate-fade-in pb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
                        <BookA className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black tracking-tight mb-3">
                        AI Fogalomtár
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A legfontosabb mesterséges intelligencia kifejezések és koncepciók egyszerű, emberi nyelven elmagyarázva.
                    </p>
                </div>

                <div className="relative w-full md:w-72 mt-4 md:mt-0">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl leading-5 bg-card placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
                        placeholder="Keresés fogalmak között..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTerms.length > 0 ? (
                    filteredTerms.map((item, index) => (
                        <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {item.term}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.definition}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-dashed border-border">
                        <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p className="text-lg">Nincs találat a következőre: <strong className="text-foreground">{searchTerm}</strong></p>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 text-primary hover:underline"
                        >
                            Keresés törlése
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
