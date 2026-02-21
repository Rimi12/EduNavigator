import { Module } from "@/types";

export const module06: Module = {
    id: 6,
    title: "Agentic System Building",
    icon: "Blocks", // Lucide icon
    description: "Összetett (Több-ügynökös) AI rendszerek felépítésének mikéntje és architektúrája.",
    tags: ['advanced', 'coding'],
    dayInSchedule: "Nap 6",

    painPoints: [
        "Egyedi AI komponensek integrációjának komplexitása",
        "Skálázhatósági kihívások",
        "Hibatűrés és recovery mechanizmusok hiánya",
        "Különböző AI ügynökök koordinációja"
    ],

    curriculum: [
        {
            id: "6-1",
            text: "Microservice-alapú AI rendszerek",
            subcategory: "Rendszer architektúra",
            videoUrl: "https://www.youtube.com/embed/1B1jV9aR7Gg",
            content: `## A Szoftverfejlesztés Darabolása (Microservices)

Régen, ha egy csapat fejlesztett például egy HR felvételi Rendszert, mindent *beleírtak egyetlen hatalmas, összetartozó kódba (Monolith)*. Pistikének és Marcsinak is ugyanabba a fájl-szörnybe kellett nyúlnia munka közben. Ha beszakadt a Bejelentkezés 02:00-kor, magával rántotta a Számlázást és az egész weboldalt is. 

Ennek a rémálomnak ma vége!

A **Microservice (Mikroszolgáltatás) architektúra** során a programodat több egyfüggetlen al-programra szeleteled szét (pl. van egy mikro-program, ami CSAK bejelentkeztet, és semmi mást). Miért fontos ez az AI-nál?
1. Lecserélheted az egyik Microservice-ben lévő LLM-et (pl. GPT-ről Claude-ra) anélkül, hogy a rendszer további 90%-át újra kéne csomagolnod hiba miatt.
2. A Microservice-ek között az üzenetváltás egyszerű hálózati API kérésekkel zajlik, akárcsak az ügynökök (Agents) között. `
        },
        {
            id: "6-2",
            text: "Agent orchestration layer (control plane)",
            subcategory: "Rendszer architektúra",
            content: `## A karmester (Orchestration Layer)
Mikor több mesterséges intelligencia-ügynökkel dolgozol (az egyik API adatot tisztáz, a másik RAG-ban keres) egy "káoszelhárítóra" lesz szükséged. Ezt hívják **Orchestrator**-nak (Karmesternek) az úgynevezett "Control Plane"-ben.

### Mik a Karmaester Feladatai?
- Tudja, éppen "ki kinél ketyeg". Melyik feladat hol akadt el?
- Elosztja az információcsomagokat (Load Balancing). Ha az egyik adatszűrő ágens befogja az adatot és lassítja a gépezetet, a Karmester indít egy 2. számú klón-ügynököt mellé a felhőben.
- Ő értékeli az eredményeket, futtatja a Supervisor ellenőrzéseket, és irányítja a Human-in-the-Loop embert ha döntés kell.
Ilyen komplex karmester eszköz például a **LangGraph** Python csomagja, ami elképesztő precizitással vizualizálja a "ki, kinek, mit ad át" workflowt gráfokban.`
        },
        {
            id: "6-3",
            text: "Memory management (short-term vs. long-term)",
            subcategory: "Rendszer architektúra",
            content: `## Az AI Emlékezete

A generatív AI rendszerek valójában - alapállapotban - komoly "Alzheimer kórral" küzdenek. A ChatGPT azért nem felejti el még a 10. üzenetváltásban sem, hogy miről beszéltetek, mert a háttérben **minden egyes** rákérdezési gombnyomáskor feltöltődik *az összes eddig elhangzott korábbi szöveg* is (mint a Short-Term memory) a vadonatúj kérdésed mellé.

### 1. Rövid távú Memória (Short-Term Memory)
- Ez egy adott chat ablak / session alatt él. Az előző 10 kérdés-válasz pár folyamatosan ott lebeg a promptban. Villámgyors, de hamar betelik a karakter-limitje, "elveszíti a fonalat".

### 2. Hosszú távú Memória (Long-Term Memory)
- Egy professzionális AI ügynök ennél többet tud. Ő egy úgynevezett **Vektor Adatbázissal** van rákötve a hosszú távú memóriára, ahová hetekkel/hónapokkal később is "el tud menteni" infókat (RAG fázisban). Akár 1 évvel ezelőtti panaszlevelet is azonnal magához ragadhat ebből a memóriablokkból.`
        },
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
