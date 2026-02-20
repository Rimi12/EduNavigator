import { Module } from "@/types";

export const module06: Module = {
    id: 6,
    title: "Agentic System Building",
    icon: "Blocks", // Lucide icon
    description: "Összetett (Több-ügynökös) AI rendszerek felépítésének mikéntje és architektúrája.",
    dayInSchedule: "Nap 6",

    painPoints: [
        "Egyedi AI komponensek integrációjának komplexitása",
        "Skálázhatósági kihívások",
        "Hibatűrés és recovery mechanizmusok hiánya",
        "Különböző AI ügynökök koordinációja"
    ],

    curriculum: [
        { id: "6-1", text: "Microservice-alapú AI rendszerek", subcategory: "Rendszer architektúra" },
        { id: "6-2", text: "Agent orchestration layer (control plane)", subcategory: "Rendszer architektúra" },
        { id: "6-3", text: "Memory management (short-term vs. long-term)", subcategory: "Rendszer architektúra" },
        { id: "6-4", text: "Tool integration és API management", subcategory: "Rendszer architektúra" },
        { id: "6-5", text: "Multi-agent kommunikációs protokollok", subcategory: "Rendszer architektúra" },
        { id: "6-6", text: "State management és session handling", subcategory: "Építőelemek" },
        { id: "6-7", text: "Error handling és retry logika", subcategory: "Építőelemek" },
        { id: "6-8", text: "Human-in-the-loop (HITL) mechanizmusok", subcategory: "Fejlett koncepciók" },
        { id: "6-9", text: "Hierarchical agent systems (supervisor-worker)", subcategory: "Fejlett koncepciók" }
    ],

    whenToChoose: [
        "Enterprise-level, production-ready AI rendszert építesz",
        "Több AI komponenst (RAG, Agents, API Tools) akarsz egybekötni",
        "Human-in-the-loop validációra van szükség a folyamat közben"
    ],

    projects: [
        {
            title: "Multi-Agent Collaboration System",
            description: "Építs rendszert 3 specializált ügynökkel: kutatás, írás, tényellenőrzés."
        },
        {
            title: "Healthcare Agentic Workflow",
            description: "Szigorú megkötésekkel rendelkező ügynök háló (Patient intake, Diagnosis assistant)."
        }
    ],

    resources: [
        { title: "AutoGen by Microsoft", url: "https://microsoft.github.io/autogen/" }
    ],

    microLearning: "Egyetlen zseniális AI helyett hálózatnyi szakterületi 'munkás' AI-t szervezünk egybe, ahol mindegyik csak a maga dolgát érti, és kommunikálnak egy felügyelő (supervisor) ügynökkel.",

    deepDive: `## Magas szintű AI Architektúrák

A modern vállalatok nem egyetlen óriás chatbotot használnak mindenre, hanem az "oszd meg és uralkodj" elvét követik a Multi-Agent (Több-ügynökös) rendszerekkel.

### Hierarchikus (Supervisor - Worker) Minta
- **Supervisor (Menedzser):** Kapja meg a bonyolult feladatot a felhasználótól. Felbontja lépésekre, de ő maga nem hajt végre semmit.
- **Worker 1 (Adatgyűjtő):** Eszközként használja az internetes keresőt.
- **Worker 2 (Adatelemző):** Csak Python kódot tud írni és lefuttatni a letöltött adatokon.
- **Worker 3 (Narrátor):** Elkészíti a gyönyörű, végleges jelentést az adatelemző táblázatából.

Ha valahol elakadnak, visszaszólnak a supervisor-nak, aki korrigál. Ezen csipetnyi struktúra nélkül az AI-ok rendkívül gyorsan fognak hibás körökben keringeni ha elbizonytalanodnak!`,

    sandboxLinks: [
        { label: "LangGraph (Multi-Agent framework)", url: "https://python.langchain.com/v0.1/docs/langgraph/", type: "tool" },
    ],

    interactiveElement: {
        question: "A Multi-Agent hálózatokban mi a 'Human-in-the-loop' (HITL) szerepe?",
        options: [
            "Az AI modellek emberinek tűnő válaszokat generálnak",
            "Az ügynök a folyamat egy meghatározott pontján megállapodik (szünetel) és vár egy emberi jóváhagyásra mielőtt továbblép",
            "Az emberek kódolják az AI modellt real-time",
            "Ember alakú avatárral kommunikál a gép"
        ],
        correct: 1,
        explanation: "A HITL (ember a hurokban) azt jelenti, hogy a folyamatba 'beépítünk' egy hús-vér embert, aki egy adott ellenőrzési pontnál jóváhagyja az AI által előzetesen felvázolt lépéseket (pl.: banki tranzakció engedélyezése)."
    }
};
