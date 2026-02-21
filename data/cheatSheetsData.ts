export interface CheatSheet {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
    sections: {
        title: string;
        content: string; // Markdown supported
    }[];
}

export const cheatSheets: CheatSheet[] = [
    {
        id: "perfect-prompt",
        title: "A Tökéletes Prompt Formula",
        description: "A 6 lépéses módszer, amivel bármilyen feladatra profi utasítást írhatsz.",
        icon: "Terminal",
        sections: [
            {
                title: "1. Szerep (Role)",
                content: "Kinek a bőrébe bújjon az AI? Pl.: _'Viselkedj egy sokat látott, pragmatikus marketing menedzserként.'_"
            },
            {
                title: "2. Feladat (Task)",
                content: "Mit csináljon pontosan? Legyél ige-központú. Pl.: _'Írj egy 300 szavas promóciós emailt a legújabb vegán cipőnkről.'_"
            },
            {
                title: "3. Kontextus (Context)",
                content: "Minden háttérinfó, ami szükséges. Pl.: _'A célközönség 18-25 éves városi fiatalok. A márka hangvétele laza és környezettudatos.'_"
            },
            {
                title: "4. Példák (Examples)",
                content: "Mutass neki mintát! (Few-shot prompting). Pl.: _'Itt egy példa egy korábbi jól sikerült stratégiára: ...'_"
            },
            {
                title: "5. Formátum (Format)",
                content: "Hogyan akarod visszakapni az adatot? Pl.: _'A kimenetet Markdown táblázatban kérem, 3 oszloppal: Előny, Hátrány, Elemzés.'_"
            },
            {
                title: "6. Korlátok (Constraints)",
                content: "Mit NE csináljon? Pl.: _'Ne használj szlengeket és ne használj szakzsargont. Ne írj 50 szónál hosszabb bekezdéseket.'_"
            }
        ]
    },
    {
        id: "ai-tools-2026",
        title: "Top AI Eszközök Fejlesztőknek",
        description: "A legfontosabb nyílt forráskódú és fizetős AI eszközök kódoláshoz és építéshez.",
        icon: "Wrench",
        sections: [
            {
                title: "IDE-k és Kódoló Asszisztensek",
                content: "**Cursor:** Jelenleg a legfejlettebb AI-first kódszerkesztő (VS Code alapokon).\n**GitHub Copilot:** A klasszikus kód-kiegészítő standard.\n**Codeium:** Ingyenes, erős alternatíva egyéni fejlesztőknek."
            },
            {
                title: "Agentic Frameworkök (Python / TS)",
                content: "**LangGraph:** Összetett, gráf alapú több-ügynökös rendszerek (Production-re ajánlott).\n**CrewAI:** Egyszerűbb, szerepalapú ügynök hálózatok Pythonban.\n**AutoGen:** A Microsoft rendszere kódot futtató ügynökökre."
            },
            {
                title: "Vector Adatbázisok (RAG-hoz)",
                content: "**Pinecone:** A legnépszerűbb menedzselt felhős vektor DB.\n**ChromaDB:** Ingyenes, könnyen futtatható lokálisan prototípusokhoz.\n**Supabase / pgvector:** Ha amúgy is PostgreSQL-t használsz."
            },
            {
                title: "Lokális AI futtatás (Ingyen)",
                content: "**Ollama:** Egy paranccsal letölt és futtat hatalmas LLM-eket (pl. Llama 3) a saját gépeden.\n**LM Studio:** Grafikus felület több tucat lokális modell kezelésére."
            }
        ]
    },
    {
        id: "rag-architecture",
        title: "RAG Architektúra Vizuálisan",
        description: "Hogyan adjuk oda a saját dokumentumainkat a ChatGPT-nek biztonságosan?",
        icon: "Database",
        sections: [
            {
                title: "Miért van szükség RAG-ra?",
                content: "Az LLM nem ismeri az 5 perccel ezelőtt írt Excel tábládat (Adat-hiány). Ha csak betanítod (Fine-tuning), azt elfelejtheti, vagy vizionálhat (Hallucináció)."
            },
            {
                title: "1. Lépés: Adat előkészítés",
                content: "A nagy PDF-et felvágjuk kisebb, 5-6 mondatos darabokra (**Chunking**). Ezeket a darabokat feltűzéses jelentés-számokká (**Embeddings**) alakítjuk, hogy a gép értse a '*Pénz*' és a '*Készpénz*' közelségét."
            },
            {
                title: "2. Lépés: Indexelés",
                content: "A kapott vektorszámokat és a hozzájuk tartozó eredeti szöveget elmentjük egy Vektor Adatbázisba."
            },
            {
                title: "3. Lépés: Keresés (Retrieval)",
                content: "Amikor a felhasználó kérdez, a kérdését is vektorrá alakítjuk, majd kikeresjük az adatbázisból a **matematikailag legközelebb eső** szövegdabokat (Top K)."
            },
            {
                title: "4. Lépés: Generálás",
                content: "Az AI-nak elküldjük a kérdést PLUSZ a megtalált szövegeket egyetlen hatalmas promptban: *'Az alábbi szövegek alapján válaszold meg a kérdést!'*"
            }
        ]
    }
];
