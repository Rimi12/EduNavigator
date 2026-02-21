import { Module } from "@/types";

export const module02: Module = {
    id: 2,
    title: "Agentic AI Workflows I.",
    icon: "Workflow", // Lucide icon
    description: "Ismerkedj meg az autonóm ügynökökkel és azokkal a munkafolyamatokkal, amik önállóan tudnak döntéseket hozni.",
    tags: ['advanced', 'coding'],
    dayInSchedule: "Nap 2",

    painPoints: [
        "Komplex, többlépcsős feladatok manuális kezelése",
        "Döntéshozatali folyamatok automatizálásának hiánya",
        "Munkafolyamatok közötti fragmentáció és koordinációs problémák",
        "Skálázhatósági korlátok egyszerű AI rendszerekben"
    ],

    curriculum: [
        {
            id: "2-1",
            text: "Mi az Agentic AI és hogyan különbözik a hagyományos AI-tól",
            subcategory: "Alapfogalmak",
            videoUrl: "https://www.youtube.com/embed/F8NKVhkZZWI",
            content: `## Agentic AI: A Cselekvő Képes Modellek

A hagyományos (nem ágens-alapú) AI működése egy egyenes válaszgépre hasonlít: Te kérdezel valamit (pl. "Mennyi az idő Londonban?"), ő pedig tudásának megfelelően válaszol (vagy hallucinál, ha nem tudja).

Ezzel szemben az **Agentic AI** (Ágens) egy *autonóm döntéshozó*. Ahelyett, hogy egyből válaszolna, egy sor közbenső lépést képes magától végrehajtani:
1. Felismeri, hogy friss adatra van szüksége az időről.
2. Megfogja a "Web Kereső" (Tool) nevű eszközt, amire megtanították.
3. Lekéri az aktuális londoni időt.
4. Feldolgozza az eredményt és *csak ezután* írja meg neked a végső választ.

**Miért forradalmi ez?** Mert az emberhez hasonlóan képes aszinkron módon problémát megoldani, más rendszerekkel (API-k) kommunikálni és visszacsatolás alapján korrigálni is önmagát.`
        },
        {
            id: "2-2",
            text: "Autonóm ügynökök architektúrája (észlelés, tervezés, cselekvés)",
            subcategory: "Alapfogalmak",
            content: `## Az Ügynökök "Anatómiája"

Minden Autonóm Ágens három fő pilléren nyugszik. Ha ezek egyike is hiányzik, az ügynök megbénul:

### 1. Észlelés (Perception)
A modell képes befogadni és megérteni a bejövő információt. Ez lehet egy általad leírt szöveg (Prompt), egy rátöltött dokumentum, vagy épp egy lekérdezett weboldal végeredménye.

### 2. Tervezés (Planning)
Ezen a ponton az AI "elgondolkozik". Ez a legfontosabb különbség a sima ChatGPT-hez képest.
A tervezés fázisában az Ágens célokra (Goals) és rész-feladatokra (Sub-tasks) bontja le a nagy kérést. Pl: *"Ha írnom kell egy elemzést az Apple részvényekről, előbb le kell töltenem az egy heti árfolyamot (Feladat A), majd megnézni a friss híreket (Feladat B), és a végén összegzem (Feladat C)."*

### 3. Cselekvés (Action)
Miután megvan a terv, az Ágens akcióba lép a rendelkezésére bocsátott eszközök segítségével, és akár párhuzamosan is megkezdi a feladatok automatikus végrehajtását.`
        },
        {
            id: "2-3",
            text: "Multi-agent rendszerek és koordináció",
            subcategory: "Alapfogalmak",
            content: `## Amikor Egy AI Nem Elég: Multi-Agent Systems
Ahogy te sem egyetlen embertől várod, hogy zseniálisan programozzon, designoljon, majd legyen a marketinges és a HR vezetőd egy személyben, úgy az AI-októl is hiba ezt elvárni.

A **Multi-Agent Systems (Többszereplős Ügynöki Rendszerek, pl. CrewAI vagy AutoGen)** lényege, hogy több, specifikusan finomhangolt AI modellt engedünk össze egy virtuális szobába, akik *egymással tudnak kommunikálni*.

### Így néz ki egy tipikus Multi-Agent Workflow:
1. **A Főnök (Manager Agent):** Megkapja tőled a nagy kérést. Lebontja azt kis részfeladatokra, amiket kioszt.
2. **A Kutató (Researcher Agent):** A Főnök parancsára kimegy a netre, letölti a cikkeket, és csak a megadott témáról küld vissza egy összegzést (nem foglalkozik struktúrával vagy stílussal).
3. **Az Író (Writer Agent):** Megkapja a Kutató nyers adatait, és valaki más tollából egy tökéletes blogposztot varázsol belőle.
4. **Az Ellenőr (Quality Control Agent):** Végül egy kifejezetten "kritikusra" hangolt Ágens átnézi az író munkáját, és visszadobja javításra, ha nem felel meg az irányelveknek.`
        },
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
