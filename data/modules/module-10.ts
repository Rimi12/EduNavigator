import { Module } from "@/types";

export const module10: Module = {
    id: 10,
    title: "Eszközök & Nyílt Forráskód",
    icon: "Wrench", // Lucide icon
    description: "Modern fejlesztői AI eszközök, CLI szoftverek és nyílt forráskódú megoldások a gyorsabb építéshez.",
    tags: ['beginner', 'advanced', 'general', 'coding'],
    dayInSchedule: "Nap 7",

    painPoints: [
        "Fejlesztési sebesség lassú hagyományos kód írásával",
        "Boilerplate kód (sablonok) ismétlése",
        "Debugolás és hibakeresés időigényessége",
        "Vendor lock-in (Egyetlen fizetős AI provider-hez való túlzott kötöttség)"
    ],

    curriculum: [
        { id: "10-1", text: "AI Code Assistants: GitHub Copilot, Cursor", subcategory: "Fejlesztői eszközök" },
        { id: "10-2", text: "IDE-k és kiterjesztések: VS Code", subcategory: "Fejlesztői eszközök" },
        { id: "10-3", text: "CLI tools: LangChain CLI, LlamaIndex CLI", subcategory: "Fejlesztői eszközök" },
        { id: "10-4", text: "API testing: Postman, Insomnia AI features", subcategory: "Fejlesztői eszközök" },
        { id: "10-5", text: "Version control: Git best practices for AI projects", subcategory: "Fejlesztői eszközök" },
        { id: "10-6", text: "No-code/Low-code: LangFlow, Flowise", subcategory: "No-code/Low-code" },
        { id: "10-7", text: "Gumloop: Agentic workflow builder", subcategory: "No-code/Low-code" },
        { id: "10-8", text: "Open-source projektek: LangChain, LlamaIndex, Transformers", subcategory: "Open Source" },
        { id: "10-9", text: "Helyi futtatás: Ollama, LM Studio", subcategory: "Open Source" }
    ],

    whenToChoose: [
        "Gyorsan akarsz minimális prototípust (MVP) építeni",
        "Nem akarsz minden AI komponenst vagy kódot a nulláról írni",
        "Ingyenes (Open-source) alternatívát keresel kommersz API-k mellé"
    ],

    projects: [
        {
            title: "Local AI Stack (Teljes Offline AI)",
            description: "Ollama telepítés Llama 3-al, és egy nyílt forráskódú UI (Open WebUI) Zero internet-függőséggel."
        },
        {
            title: "No-code RAG Application",
            description: "Biztonságos dokumentum indexelés a Flowise UI builderjén (kódolás nélkül)."
        }
    ],

    resources: [
        { title: "Flowise AI", url: "https://flowiseai.com/" },
        { title: "Cursor IDE", url: "https://cursor.sh/" }
    ],

    microLearning: "Az AI világában az 'Open Source' nem csupán ingyenes szoftvert jelent, hanem a kollektív emberiség leggyorsabban fejlődő tudásbázisát. Egy hónap is hatalmas idő az AI-ban.",

    deepDive: `## Eszközök az Építőknek

Hiába tudod, hogy építs RAG rendszert vagy Ügynököt, ha mindent az alapoktól programozol. A modern AI fejlesztő nem kódol a nulláról, hanem "összerakós" eszközöket használ.

### Fejlesztői Asszisztensek (A "Páros Programozás" jövője)
Régen a dokumentációt bújtad órákig egy hiba miatt, majd kimenekültél a *Stack Overflow*-ra.
Ma egy eszköz mint a **Cursor** (A leggyorsabban növő AI IDE) a teljes kódbázisodat ismeri, és szó szerinti "Mi a hiba a 45. sorban ehhez a logikához képest?" kérdésedre át is írja a szerkezetet. 

### No-code (Vizuális) Építők
Ha RAG rendszert akartál építeni felhőben 2023-ban az napokba került. Ma a **LangFlow** vagy **Flowise** segítségével szó szerint egérrel húzogatod össze egy virtuális vásznon a:
1. PDF olvasót
2. Szöveg darabolót (Chunker)
3. Szöveg vektorizálót (Embedding)
4. Memória modult
5. Kimeneti LLM-et

> **Tipp:** Szinte sosem az alapvetői modell számít már, sokkal inkább: Hogyan csomagoltad be a megfelelő eszközökkel hogy a felhasználó imádja a gyorsaságát?`,

    sandboxLinks: [
        { label: "LangFlow GitHub", url: "https://github.com/langflow-ai/langflow", type: "tool" },
    ],

    interactiveElement: {
        question: "Mi a Cursor legfőbb előnye a hagyományos szerkesztőkkel szemben AI fejlesztés során?",
        options: [
            "Csak Python kódot tud futtatni",
            "Képes 'RAG-szerűen' az egész lokális projekt memóriáját és kódját megérteni",
            "Ingyenes korlátlan OpenAI API kulcsot ad minden felhasználónak",
            "Az összes hibát azonnal automatikusan commitolja a git szerverre"
        ],
        correct: 1,
        explanation: "A Cursor 'AI-first' szövegszerkesztő igazi ereje a Codebase Indexelésben rejlik. Nem egy elszeparált chatablak, hanem a teljes környezeted és dokumentumaid kontextusában ad megoldási javaslatokat."
    }
};
