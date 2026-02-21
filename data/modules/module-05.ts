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
        {
            id: "5-1",
            text: "Leíró statisztika alapjai",
            subcategory: "Statisztika",
            videoUrl: "https://www.youtube.com/embed/xxpc-HPKN28",
            content: `## Ne félj a Statisztikától!

Amikor AI-val adatokat dolgozunk fel, sokszor 100 000+ soros fájlokat sózunk "rá" a gépre. Ha nem értjük meg a leíró statisztika alappilléreit, esélyünk sincs feladatot adni neki.

Hogyan "látja" a számítógép a te oszlopaidos adataidon lévő eloszlást?
1. **Átlag (Mean):** Az összes szám összege elosztva a darabszámmal. Szuper hasznos, de csalóka is lehet (Ha te megeszel 2 almát, én 0-t, papíron átlagosan ettünk 1-1-et, mégis éhen halok).
2. **Medián (Median):** Ha sorba rendezzük az értékeket a legkisebbtől a legnagyobbig, ez lesz a középső érték. Ellenállóbb a kiugró gazdag v. szegény emberek torzító "átlag" erejének.
3. **Módusz (Mode):** A leggyakoribb adat. Miből van a legtöbb a listánkon?
4. **Szórás (Standard Deviation):** A legfontosabb metrika! Azt mondja meg, hogy az adatok mekkora része (rendszerint ~68% egy haranggörbénél) tér el átlagosan magától a normál vonaltól.`
        },
        {
            id: "5-2",
            text: "Megértés: Valószínűségi alapok és hipotézisvizsgálat",
            subcategory: "Statisztika",
            content: `## Biztosan jól döntött a Gépünk? (A Szignifikancia)
Gyakori probléma vállalati környezetben: a "Pistikének" adtunk 10 promptot hogy fordítson angolra, és a "Gépnek" is. A "Gép" 10%-kal jobb lett.
Biztosan kijelenthetjük, hogy a mi AI-unk a király, és sosem hibázik innentől?
**Nem.** Túl kevés a teszt adat ($N=10$). Ilyenkor lép színre a *Hipotézisvizsgálat*.

### Az A/B Tesztelés (A P-value koncepciója)
Az AI teljesítmény optimalizálásnál (A/B teszt) a legkisebb véletlen torzítás is komoly anyagi bukásokhoz is vezethet.

1. Felállítod a Null Hipotézist (pl.: *A modell A és az új B modell promptjai között valójában nincs igazi különbség a teljesítményben*). 
2. Futtatod az A/B tesztet minimum 1000 iterációval.
3. Megnézed a P-value (P-érték) mutatót, amit a gép visszaad. Ha a p-value kisebb mint **0.05**, akkor örülhetsz! Matematikailag bebizonyítottad, hogy az új B prompt fejlesztésed valójában működik, és a 10%-os javulás nem csupán a vakszerencsén múlt!`
        },
        {
            id: "5-3",
            text: "Confusion matrix: Precision, Recall, F1-score",
            subcategory: "Metrikák",
            content: `## A Tökéletesség Illúziója (F1-Score)
Létezik egy "Confusion Matrix" (Zavarottsági Mátrix) nevezetű táblázat. A klasszifikációs AI modelleknél erre kell elsőnek rálépnünk, hogy kiderüljön: mennyire "hülye" az algoritmusunk.

Az *Accuracy (Pontosság)* megtévesztő lehet, ha az adatok egyenlőtlenek!
Tegyük fel, hogy 100 páciens van, és 1 beteg közülük. Az AI azt mondja, hogy *"Senki sem beteg"*. Így a Pontosság 99%-os, mégis a tesztünk borzalmas és felháborító volt!

Hogyan mérjük helyesen?
- **Precision (Precízió):** Hányat talált el abból, amire "Lövést" adott le? *"Amikor az AI beteget jelzett ki, az esetek hány százalékában volt ténylegesen is beteg?"*
- **Recall (Érzékenység/Visszahívás):** Kívülről is látja a "célt"? *"Az összes (1 db) beteg közül hány százalékát találta meg az AI?"* Esetünkben 0%-ot. Itt bukik el az AI orvos.
- **F1 Score:** Egy kiegyensúlyozott, arany középút a Precision és a Recall között, ami egyetlen százalékban mondja meg, merre tartasz.`
        },
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
