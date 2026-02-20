import { Module } from "@/types";

export const module02: Module = {
    id: 2,
    title: "Agentic AI Workflows I.",
    icon: "Workflow", // Lucide icon
    description: "Ismerkedj meg az autonóm ügynökökkel és azokkal a munkafolyamatokkal, amik önállóan tudnak döntéseket hozni.",
    dayInSchedule: "Nap 2",

    painPoints: [
        "Komplex, többlépcsős feladatok manuális kezelése",
        "Döntéshozatali folyamatok automatizálásának hiánya",
        "Munkafolyamatok közötti fragmentáció és koordinációs problémák",
        "Skálázhatósági korlátok egyszerű AI rendszerekben"
    ],

    curriculum: [
        { id: "2-1", text: "Mi az Agentic AI és hogyan különbözik a hagyományos AI-tól", subcategory: "Alapfogalmak" },
        { id: "2-2", text: "Autonóm ügynökök architektúrája (észlelés, tervezés, cselekvés)", subcategory: "Alapfogalmak" },
        { id: "2-3", text: "Multi-agent rendszerek és koordináció", subcategory: "Alapfogalmak" },
        { id: "2-4", text: "Agent memória és állapotkezelés", subcategory: "Alapfogalmak" },
        { id: "2-5", text: "Eszköz használat és API integráció", subcategory: "Alapfogalmak" },
        { id: "2-6", text: "ReAct minta: Rövid gondolkodás + azonnali cselekvés", subcategory: "Workflow Minták" },
        { id: "2-7", text: "Plan-and-Execute: Stratégiai tervezés elkülönítése a végrehajtástól", subcategory: "Workflow Minták" },
        { id: "2-8", text: "Reflection Loop: Önkritika és kimenet finomítása", subcategory: "Workflow Minták" },
        { id: "2-9", text: "Tree of Thoughts és Multi-Agent Router-Specialist", subcategory: "Workflow Minták" },
        { id: "2-10", text: "LangGraph, CrewAI, AutoGPT megismerése", subcategory: "Orchestration" }
    ],

    whenToChoose: [
        "Összetett üzleti folyamatokat automatizálsz (KYC, ügyfélszolgálat)",
        "Több forrásból kell információt gyűjteni és feldolgozni",
        "Döntéshozatali lépcsőket szeretnél automatizálni",
        "Skálázható, autonóm rendszereket építesz"
    ],

    projects: [
        {
            title: "Intelligens Ügyfélszolgálati Ügynök",
            description: "Építs multi-agent rendszert, ahol egy 'routing agent' irányít a megfelelő specialista ágensekhez."
        },
        {
            title: "Kutatási Asszisztens Ügynök",
            description: "Autonóm web kutatás adott témákról, információ összegzés és jelentés generálás citációkkal."
        }
    ],

    resources: [
        { title: "LangChain Documentation", url: "https://python.langchain.com/" },
        { title: "CrewAI GitHub", url: "https://github.com/joaomdmoura/crewAI" }
    ],

    microLearning: "A hagyományos AI válaszol a kérdésedre. Az Agentic AI (Ügynök) képes felismerni, hogy mi hiányzik a válaszhoz, önállóan megkeresni az eszközeivel (pl. weben keresve), és utána összeállítani a teljes megoldást.",

    deepDive: `## A ReAct Prompting (Reasoning and Acting)
Az ügynökök "lelke" az önálló döntéshozatali képesség. A legelterjedtebb minta erre a **ReAct** (Gondolkodás és Cselekvés).

Képzeld el, hogyan főzöl egy új receptet.
1. **Thought (Gondolat):** "Szükségem van paradicsomra."
2. **Action (Cselekvés):** Kinyitod a hűtőt.
3. **Observation (Megfigyelés):** Látod, hogy nincs paradicsom.
4. **Thought (Új gondolat):** "Akkor el kell mennem a boltba."

Az Agentic AI hajszálpontosan így működik API-kon keresztül. 

### Az Eszközhasználat (Tool Use)
Az AI magában nem tudja lekérdezni a mai időjárást, mert a tudása le van zárva egy múltbeli dátumnál. De ha megadjuk neki a "WebKereső" eszközt, akkor:
- Felismeri, hogy friss adatra van szüksége
- Paraméterekkel meghívja a WebKereső API-t
- Az eredményből megírja a válaszódat.

> Egy jól megtervezett ügynök számára a legnagyobb áttörés nem az AI modell okosodása, hanem az eszközök, amiket a kezébe adunk!`,

    sandboxLinks: [
        { label: "CrewAI Dokumentáció", url: "https://docs.crewai.com/", type: "tool" },
    ],

    interactiveElement: {
        question: "Mi a 'ReAct' framework két fő összetevője az Agentic Workflow-ban?",
        options: [
            "Read (Olvasás) és Act (Cselekvés)",
            "Reasoning (Gondolkodás/Érvelés) és Acting (Cselekvés)",
            "Reaction (Reakció) és Activate (Aktiválás)",
            "Retrieve (Keresés) és Accumulate (Felhalmozás)"
        ],
        correct: 1,
        explanation: "A ReAct a Reasoning (Gondolkodás) és az Acting (Cselekvés) szavakból származik. Az AI felváltva gondolkodik a következő lépésen, majd végrehajtja azt."
    }
};
