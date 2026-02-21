import { Module } from "@/types";

export const module05: Module = {
    id: 5,
    title: "Statisztika és Adatelemzés AI-hoz",
    icon: "BarChart3", // Lucide icon
    description: "AI modellek eredményeinek mérése, értelmezése és az adatok elosztásának megértése.",
    tags: ['advanced', 'data'],
    dayInSchedule: "Nap 5",

    painPoints: [
        "AI modellek eredményeinek értelmezése és validálása",
        "Adatminőségi problémák azonosítása",
        "Model bias (torzítás) és fairness mérése",
        "Üzleti KPI-k és AI metrikák összekötése"
    ],

    curriculum: [
        { id: "5-1", text: "Leíró statisztika alapjai", subcategory: "Statisztika" },
        { id: "5-2", text: "Megértés: Valószínűségi alapok és hipotézisvizsgálat", subcategory: "Statisztika" },
        { id: "5-3", text: "Confusion matrix: Precision, Recall, F1-score", subcategory: "Metrikák" },
        { id: "5-4", text: "Token usage és költség elemzés", subcategory: "Metrikák" },
        { id: "5-5", text: "RAG retrieval accuracy: Hit rate, MRR", subcategory: "Metrikák" },
        { id: "5-6", text: "LLM output minőségmérés: BLEU, ROUGE", subcategory: "Metrikák" },
        { id: "5-7", text: "Pandas, NumPy és Matplotlib használat", subcategory: "Eszközök" }
    ],

    whenToChoose: [
        "AI rendszerek teljesítményét kell mérned és optimalizálnod",
        "Üzleti stakeholdereknek kell jelentened az AI hatását",
        "Model driftot monitorozol"
    ],

    projects: [
        {
            title: "AI Model Dashboard",
            description: "Valós idejű monitoring dashboard (KPI-k, latency, token cost) Streamlit vagy Gradio segítségével."
        },
        {
            title: "A/B Testing Framework",
            description: "Két prompt vagy model verzió összehasonlítása és statisztikai szignifikancia tesztelése."
        }
    ],

    resources: [
        { title: "Kaggle Adathalmazok", url: "https://www.kaggle.com/datasets" },
        { title: "Weights & Biases", url: "https://wandb.ai/site" }
    ],

    microLearning: "Az AI nem mindig mond igazat. Ha nem méred az AI modellek pontosságát és költségét statisztikailag, úgy repülsz vakon egy repülőgépen, hogy nincsenek bekapcsolva a műszereid.",

    deepDive: `## Alapmetrikák az AI Értékelésére (A Confusion Matrix)
Amikor az AI klasszifikál (pl. eldönti, hogy egy email spam-e vagy sem), a teljesítményét 4 kategóriában mérjük:

- **True Positive (Így is van):** Az AI azt mondta spam, és valóban az volt.
- **True Negative (Tényleg nem az):** Az AI szerint rendes levél, és valóban az.
- **False Positive (Téves riasztás):** Az AI spambe rakta a fontos e-mailt a nagymamától. (*Ez általában a legrosszabb eset!*)
- **False Negative (Elvétett riasztás):** Bejött a kéretlen reklám az inboxba.

A mindennapi nyelvben az "Accuracy" (mennyi volt jó összesen) tűnik fontosnak, de egy orvosi diagnosztikai AI-nál inkább a **Recall** (mennyi beteget talált meg a betegek közül) az, ami ténylegesen életeket menthet.`,

    sandboxLinks: [
        { label: "Weights & Biases", url: "https://wandb.ai", type: "tool" },
    ],

    interactiveElement: {
        question: "Melyik statisztikai hiba a 'False Positive'?",
        options: [
            "Amikor az AI nem veszi észre a hibát, pedig ott van",
            "Amikor az AI hibát jelez, pedig minden rendben van",
            "Amikor az AI helyesen találta meg a hibát",
            "Amikor az AI helyesen hagyta figyelmen kívül a jó adatot"
        ],
        correct: 1,
        explanation: "False Positive = Téves riasztás. Például a tűzjelző bekapcsol a pirítós sütéstől. Jelentése, hogy a modell 'pozitív' találatot adott (jelez), de 'falsul' (nincs tűz)."
    }
};
