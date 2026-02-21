import { Module } from "@/types";

export const module03: Module = {
    id: 3,
    title: "RAG és Agentic Workflows II.",
    icon: "Database", // Lucide icon
    description: "A Retrieval-Augmented Generation (RAG) folyamatok részletei, saját adatok integrálása AI rendszerekbe.",
    tags: ['advanced', 'coding', 'data'],
    dayInSchedule: "Nap 3",

    painPoints: [
        "LLM-ek elavult vagy korlátozott tudása",
        "AI hallucinációk (kitalált információk) csökkentése",
        "Vállalati belső tudásbázisok hozzáférhetőségének hiánya AI számára",
        "Költséges és időigényes fine-tuning alternatívája"
    ],

    curriculum: [
        { id: "3-1", text: "Mi a RAG és miért fontos", subcategory: "Alapfogalmak" },
        { id: "3-2", text: "RAG architektúra 3 fázisa: Indexelés, Lekérés (Retrieval), Generálás", subcategory: "Alapfogalmak" },
        { id: "3-3", text: "Vector adatbázisok és embedding modellek", subcategory: "Alapfogalmak" },
        { id: "3-4", text: "Chunking stratégiák (szöveg darabolása)", subcategory: "Alapfogalmak" },
        { id: "3-5", text: "Szemantikus keresés és hasonlósági metrikák (cosine similarity)", subcategory: "Alapfogalmak" },
        { id: "3-6", text: "Document loaders és Text splitting módszerek", subcategory: "Technikai implementáció" },
        { id: "3-7", text: "Vector stores (Pinecone, Chroma, Qdrant, FAISS)", subcategory: "Technikai implementáció" },
        { id: "3-8", text: "Retriever optimalizálás (top-k, threshold beállítás)", subcategory: "Technikai implementáció" },
        { id: "3-9", text: "Hybrid keresés (keyword + semantic)", subcategory: "Advanced technikák" },
        { id: "3-10", text: "Re-ranking, relevancia javítás és Multi-modal RAG", subcategory: "Advanced technikák" }
    ],

    whenToChoose: [
        "Vállalati dokumentumokból kell AI-t táplálni (szerződések, manuálok, FAQ-k)",
        "Valós idejű, friss információkra van szükség",
        "Domain-specifikus tudást szeretnél AI-ba integrálni",
        "Fine-tuning túl költséges vagy lassú lenne"
    ],

    projects: [
        {
            title: "Vállalati Tudásbázis Chatbot",
            description: "Indexelj 100+ PDF dokumentumot, építs Vector Store-t és RAG pipeline-t egy chat interfészhez."
        },
        {
            title: "Jogi Szerződés Elemző",
            description: "Hosszú jogi dokumentumok feldolgozása, specifikus klauzulák keresése RAG segítségével."
        }
    ],

    resources: [
        { title: "Pinecone: What is RAG?", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
        { title: "ChromaDB", url: "https://www.trychroma.com/" }
    ],

    microLearning: "Képzeld el az AI-t egy nyitott könyves vizsgán, aki épp elfelejtette a választ. A RAG a könyvtáros, aki pontosan kikerösi a vonatkozó bekezdéseket a könyvből, és leteszi az AI elé a vizsgán, hogy meg tudja válaszolni a kérdést.",

    deepDive: `## RAG Architektúra Lépésről Lépésre
A RAG (Retrieval-Augmented Generation) megoldja az AI legnagyobb problémáját: a hallucinációt és az adathiányt. Működése 3 fő lépésre bontható:

### 1. Indexelés (Előkészület)
Mielőtt a felhasználó egyáltalán kérdezne, a dokumentumainkat elő kell készíteni.
- **Chunking:** Egy 100 oldalas PDF-et nem lehet egyszerre befogadni. Kisebb, "emészthető" bekezdésekre vágjuk.
- **Embedding:** A szöveges bekezdéseket számsorokká (vektorokká) konvertáljuk. A vektorok olyanok, mint a térképen a koordináták: a hasonló jelentésű mondatok közelebb lesznek egymáshoz.
- **Tárolás:** Ezeket a vektorokat eltesszük egy Vektor Adatbázisba (pl. Chroma, Pinecone).

### 2. Lekérés (Retrieval)
A felhasználó feltesz egy fórumkérdést: *"Hány nap szabadság jár?"*
- A kérdést is vektorrá alakítjuk.
- Megkeressük a vektor adatbázisban a kérdéshez legközelebb eső "szomszédokat" (ezek lesznek a releváns bekezdések).

### 3. Generálás
Az eredeti AI modellnek átadjuk a kérdést PLUSZ a megtalált bekezdéseket kontextusként. Így az AI nem fejből talál ki valamit, hanem konkrétan a te dokumentumaidból válaszol.`,

    sandboxLinks: [
        { label: "Pinecone RAG Tutorial", url: "https://docs.pinecone.io/guides/get-started/build-a-rag-chatbot", type: "tool" },
    ],

    interactiveElement: {
        question: "Mi a célja az 'Embedding'-nek a RAG folyamat során?",
        options: [
            "A szöveg lefordítása más nyelvekre",
            "A szöveg darabolása (chunking) olvashatóbb részekre",
            "A jelentés numerikus (vektoros) formába alakítása, amivel a gépek tudnak számolni",
            "Biztonsági kapu kialakítása a hacker támadások ellen"
        ],
        correct: 2,
        explanation: "Az embedding egy matematika folyamat, ami a szöveges információ mögötti szemantikai jelentést számsorokká (vektorokká) konvertálja. Így, két tematikailag hasonló szöveg vektorja megkereshető geometriai közelség alapján."
    }
};
