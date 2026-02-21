import { Module } from "@/types";

export const module04: Module = {
    id: 4,
    title: "Prompt Engineering",
    icon: "MessageSquare",
    description: "Hatékony promptok írása AI modellekhez",
    tags: ['beginner', 'content', 'coding', 'general'],
    dayInSchedule: "Nap 4",

    painPoints: [
        "Nem kapom meg a várt választ az AI-tól",
        "Túl általános vagy irreleváns válaszok",
        "Nem tudom, hogyan strukturáljam a promptot"
    ],

    hasPromptTester: true,
    curriculum: [
        {
            id: "4-1",
            text: "Prompt anatómiája: Context, Role, Explicit Task, Format, Output",
            subcategory: "Alapfogalmak"
        },
        { id: "4-2", text: "Zero-shot és Few-shot prompting technikák", subcategory: "Haladó technikák" },
        { id: "4-3", text: "Chain-of-Thought (CoT): Lépésről-lépésre gondolkodás", subcategory: "Haladó technikák" },
        { id: "4-4", text: "Tree-of-Thought: Többszörös gondolati ágak felfedezése", subcategory: "Haladó technikák" },
        { id: "4-5", text: "Prompt chaining: Komplex feladatok szekvenciális feldolgozása", subcategory: "Haladó technikák" },
        { id: "4-6", text: "Meta-prompting: AI segít prompt optimalizálásban", subcategory: "Haladó technikák" },
        { id: "4-7", text: "Input sanitizálás (prompt injection védelem)", subcategory: "Biztonság" },
        { id: "4-8", text: "Rate limiting és hozzáférés kontroll", subcategory: "Biztonság" },
        { id: "4-9", text: "Output validálás és audit", subcategory: "Biztonság" }
    ],

    whenToChoose: [
        "Amikor pontosabb AI válaszokat szeretnél",
        "Amikor konzisztens outputot kell generálni",
        "Amikor komplex feladatokat kell lebontani"
    ],

    projects: [
        {
            title: "Prompt Könyvtár (Prompt Library)",
            description: "Építs újrafelhasználható prompt sablonokat különböző use-case-ekhez.",
            prompt: "Készíts egy táblázatot a leghasznosabb marketing promptokhoz..."
        },
        {
            title: "Prompt Optimizer Agent",
            description: "AI-alapú prompt finomító eszköz. Javasoljon jobb megfogalmazást.",
            prompt: "Légy egy Prompt Engineer. Javítsd fel a következő promptot..."
        },
        {
            title: "Domain-Specifikus Prompt Stratégia",
            description: "Készíts iparág-specifikus prompt keretrendszert."
        }
    ],

    resources: [
        {
            title: "OpenAI Prompt Engineering Guide",
            url: "https://platform.openai.com/docs/guides/prompt-engineering"
        }
    ],

    microLearning: "A promptolás nem varázslat: Szerep + Feladat + Kontextus. Ha ezt a hármat megadod, az eredmény 80%-kal jobb lesz.",

    deepDive: `## A C.R.E.F.O. Keretrendszer

A tökéletes AI parancsok összetevői:

### **C - Context (Kontextus)**
*"Egy kkv vagyunk, amely vegán cipőket árul európában."*
(Minden háttérinfó, amit az AI-nak tudnia kell mielőtt elkezdi a munkát).

### **R - Role (Szerep)**
*"Viselkedj egy sokat látott, pragmatikus marketing menedzserként."*
(A szerep nagyban megváltoztatja, honnan meríti a szókincsét és a struktúráját).

### **E - Explicit Task (Egyértelmű Feladat)**
*"Írj egy 300 szavas promóciós emailt."*
(Nem azt mondjuk: *"írj egy emailt"*, hanem nagyon konkrétan határozzuk meg a célt).

### **F - Format (Formátum)**
*"A kimenetet Markdown táblázatban kérem, 3 oszloppal."*
(Az AI sokféleképpen adhat vissza adatot. Kényszerítsük a számunkra ideális formátumra).

### **O - Output limitations (Kimeneti korlátok)**
*"Ne használj szlengeket és ne használj emoji-t."*
(Ahány tilalom, annyi felesleges javítási kört spóroltál meg).`,

    sandboxLinks: [
        {
            label: "Próbáld ki: Anthropic Console",
            url: "https://console.anthropic.com",
            type: "tool"
        }
    ],

    interactiveElement: {
        question: "A C.R.E.F.O. framework alapján melyik NEM része egy kiváló promptnak?",
        options: [
            "Kontextus (Context)",
            "Dátum és időpont",
            "Formátum (Format)",
            "Szerep (Role)"
        ],
        correct: 1,
        explanation: "A dátum és időpont általában nem szükséges ahhoz, hogy jó promptot írj. A Szerep, Kontextus, és Formátum viszont kulcsfontosságú."
    }
};
