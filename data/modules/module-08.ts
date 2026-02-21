import { Module } from "@/types";

export const module08: Module = {
    id: 8,
    title: "AI Monitoring és Értékelés",
    icon: "Search", // Lucide icon
    description: "AI rendszerek teljesítményének, változásainak folyamatos felügyelete és mérése.",
    tags: ['advanced', 'data', 'coding'],
    dayInSchedule: "Nap 7",

    painPoints: [
        "AI rendszerek 'fekete doboz' jellege",
        "Model drift (adatok elöregedése) észrevétlen maradása",
        "Teljesítmény degradáció idővel",
        "Hibák és anomáliák késleltetett detektálása"
    ],

    curriculum: [
        {
            id: "8-1",
            text: "Observability 3 pillére: Logs, Metrics, Traces",
            subcategory: "Monitoring rendszerek",
            videoUrl: "https://www.youtube.com/embed/nL6nS9qF8vQ",
            content: `## Vakrepülés helyett: Observability

Ha kész az AI rendszered (pl: RAG alapú ügyfélszolgálat) és fut a felhőben, honnan tudod, hogy épp most miért adott 3 perces várakozási időt az ügyfélnek, mielőtt kitalált volna egy rossz választ?

Az Observability (Megfigyelhetőség) a megoldás. Nem elég, ha csak utólag "ránézünk" a dolgokra. 3 pillér tartja életben a rendszered:

1. **Logs (Naplók):** Események időbélyeggel ellátott feljegyzése. *"12:02:44 - Az OpenAI API hibaüzenettel (Rate Limit) visszadobta a kérést."*
2. **Metrics (Metrikák):** Aggregált (összevont) számok tágabb kontextusban. *"Az elmúlt 10 percben átlagosan 8 másodperc volt a válaszidőnk, a CPU pedig 90%-on pörög."*
3. **Traces (Nyomkövetés):** Az igazi AI aduász! A felhasználó beír egy 'Sziát!', erre létrejön egy egyedi azonosító kód (Trace ID). Ezt a kódot végig kísérjük a Frontend -> Backend -> Vector Adatbázis -> LLM -> Backend láncolaton, és megmérjük, melyik komponens mennyi tizedmásodpercet emésztett fel.`
        },
        {
            id: "8-2",
            text: "APM (Application Performance Monitoring) rendszerek",
            subcategory: "Monitoring rendszerek",
            content: `## Mit tud egy jó APM Szoftver?

Az APM (Alkalmazás Teljesítmény Monitorozás) rendszerek (mint a **Datadog**, **New Relic**, vagy a nyílt forráskódú **OpenTelemetry**) az előzőleckében megismert 3 pillérből készítenek emberi, olvasható Dashboardokat (műszerfalakat).

### AI specifikus APM (LLMOps)
Képzeld el, hogy a hagyományos APM csak annyit jelez: *"Sokáig tartott az adatbázis lekérés"*. Egy modern, AI-ra szakosodott APM eszköz (pl. LangSmith, Weights & Biases) vizuálisan meg is mutatja neked a teljes prompt láncodat:
- Mikor, mit kérdezett a felhasználó?
- Mi volt a pontos RAG által kinyert kontextus, ami az LLM-hez került?
- Mennyibe került (dollárcent) ez az egyetlen üzenetváltás a felhasznált tokenek alapján?
- Ki lehet vizsgálni egérkattintással, hol volt a hallucináció gyökere a hálózatban.`
        },
        {
            id: "8-3",
            text: "Model accuracy trends mérése időben",
            subcategory: "AI-specifikus metrikák",
            content: `## Ne hagyd, hogy butuljon a model!

A "Drift" a legnagyobb félelme az AI mérnököknek. A Drift jelentése, amikor a modell felépítése ugyanaz, de a valós világbeli válaszai hónapok múltán egyre gyengébbek és falsabbak lesznek.

### Hogyan mérhetjük ezt (Accuracy Trends)?
Minden hónapban futtatnod kell egy automatizált tesztet, ami egy "Arany Adathalmazból" (Golden Dataset) merít. Ez a dataset tartalmaz 100 olyan promptot és az ahhoz tartozó *tökéletes* választ, amit te és a domén szakértők hónapokig egyeztettetek.
Az APM rendszered lefuttatja a 100 promptot a jelenlegi AI rendszeren, és összehasonlítja az eredményeket a "tökéletessel". Ha ez a mérőszám rohamosan esik 90%-ról 70%-ra, azonnal tudd meg mielőtt az ügyfelek veszik észre! `
        },
        { id: "8-4", text: "User satisfaction (CSAT, Thumb Up/Down) gyűjtése", subcategory: "AI-specifikus metrikák" },
        { id: "8-5", text: "Eval datasetek készítése reprezentatív adatokból", subcategory: "Értékelési keretrendszerek" },
        { id: "8-6", text: "Human evaluation vs Automated Evaluation", subcategory: "Értékelési keretrendszerek" },
        { id: "8-7", text: "Red-teaming és adversarial testing alapjai", subcategory: "Értékelési keretrendszerek" },
        { id: "8-8", text: "Drift detection: Bemeneti és kimeneti disztribúciós változások", subcategory: "Drift tracking" },
        { id: "8-9", text: "Concept drift beazonosítása", subcategory: "Drift tracking" }
    ],

    whenToChoose: [
        "Production AI rendszered van élőben",
        "Regulált iparágban dolgozol (compliance követelések)",
        "SLA-kat kell teljesítened ügyfelek felé"
    ],

    projects: [
        {
            title: "AI Observability Stack",
            description: "Integrálj OpenTelemetry-t egy AI pipeline-ba: logs, metrics, traces, + custom Grafana dashborad."
        },
        {
            title: "Automated Evaluation Framework",
            description: "Teszt dataset generálás perem-esetekkel és 'Continuous Evaluation' teszt suite futtatása."
        }
    ],

    resources: [
        { title: "Grafana Documentation", url: "https://grafana.com/docs/" },
        { title: "OpenTelemetry", url: "https://opentelemetry.io/" }
    ],

    microLearning: "A model drift az AI 'elöregedése': A 2 évvel ezelőtt készített modell valószínűleg nem ismeri a legújabb szlenget, törvényeket, vagy divatokat, így a válaszai szépen lassan egyre pontatlanabbá válnak.",

    deepDive: `## Drift Detection és Értékelés (Evaluation)

Ha kész vagy a modellel és fellövöd az éles szerverre, gratulálok: A munka neheze még csak most kezdődik el!
Idővel minden ML és AI modell romlik ("Model Drift"). Miért? Mert a világ, a megrendelések, és a felhasználók igényei változnak, de a modell le van zárva.

### Drift típusok
- **Data Drift:** A bejövő adatok változnak meg. Pl.: A ChatGPT megjelenése után senki nem teljes mondatokkal Google-özött többé ("Mi Anglia fővárosa?"), hanem kulcsszavakkal ("Anglia fővárosa").
- **Concept Drift:** Maga a lényegi megállapodás változott. Ha a könyvelő AI-od meg is van tanítva a 2022-es adózásra, az a tudás 2024-ben már illegális adóbevallást fog szülni.

### Hogyan védekezünk? (Continuous Evaluation)
"Red Teaming" vagy a folyamatos "Golden Dataset" visszamérés a megoldás. Rendelkeznünk kell egy olyan több száz darabos minta-tárral (promptokkal és ellenőrzött helyes válaszokkal), amin minden frissítést vagy modell cserét 1-100%-os pontossági aránnyal végig tudunk kergetni.`,

    sandboxLinks: [
        { label: "Datadog AI Monitoring", url: "https://www.datadoghq.com/product/ai-observability/", type: "tool" },
    ],

    interactiveElement: {
        question: "A monitorozás során mik a Observability ('Megfigyelhetőség') fő pillérei (The Three Pillars of Observability)?",
        options: [
            "Hardware, Szoftver, Licensz",
            "Kapacitás, Sávszélesség, Memória",
            "Logs (Naplózás), Metrics (Metrikák/Számok), Traces (Nyomkövetés)",
            "Adatbázisok, Cache, DNS Rendszerek"
        ],
        correct: 2,
        explanation: "A modern monitorozás rendszerek (legyen az AI vagy hagyományos) három fő forrásra támaszkodnak: 1. Naplók (mik történtek), 2. Metrikák (Aggregált számok mint pl. processzor használat %) 3. Nyomkövetés (Az azonosító ahogy végigmegy az összes mikro-szervizen)."
    }
};
