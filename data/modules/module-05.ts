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
        {
            id: "5-4",
            text: "Token usage és költség elemzés",
            subcategory: "Metrikák",
            content: `## A Benzinkút a Felhőben

Az AI világában a fizetőeszköz a **Token**. (1 Token nagyjából 1 szótag, ~4 angol betű).
A nagy szolgáltatók (OpenAI, Anthropic) két dologért számláznak, amikor API-val lekérdezel tőlük valamit:
1. **Input Tokens:** Amit te küldesz (Prompt és feltöltött szöveg). Általában ez nagyon olcsó!
2. **Output Tokens:** Azt a választ, amit a gép generál neked. Ez drága! (Van amikor a 4-szerese a bemeneti (Input) Token árának).

### Ha Nem Számolsz, Csődbe Mész
Egy rosszul programozott "Agent" (Autonóm Végrehajtó), ami befagy egy végtelen kutatási hurokba az adathalmazban (ReAct minta megszakítása nélkül), percek alatt képes lenyelni akár 40 ezer forintot is a bankkártyádról, csak azzal hogy 100-szor egymás után átdarálja az óriási 60 oldalas PDF fájlodat!`
        },
        {
            id: "5-5",
            text: "RAG retrieval accuracy: Hit rate, MRR",
            subcategory: "Metrikák",
            content: `## Rájött a Gépünk a Zónára? (Hit Rate & MRR)

A RAG (Saját Dokumentumon Kereső AI) csak akkor okos, ha maga a Vector Adatbázis kereső motorja (A Dokumentum "Előhúzó") az LLM Előtt megtalálja a megfelelő szerződést. De ezt is mérni kell matematikai metrikákkal!

### Hit Rate (Találati Arány)
A legegyszerűbb mutató. Azt nézi, hogy a megadott Top-K-ban (Pl. 5 visszadobott keresési eredményben) egyáltalán **benne volt-e legalább EGY releváns, helyes dokumentum-töredék**. Ha igen (Hit), akkor 1 pont, ha csupa szemetet talált a cégadatbázisban, 0 pont. Kiszámoljuk ezt 1000 lekérésre és százalékot kapsz a hatékonyságodról.

### MRR (Mean Reciprocal Rank)
De nem mindegy mikor jött a találat! Képzeld el hogy kiküldtél 10 keresést, és a releváns tudás mindig az utolsó, 10. (Bottom) helyen volt. A Hit Rate 100% lenne, holott a keresőd lassú és torz.

Az MRR egy tört (1/K pozíció).
- Ha azonnal az 1. helyen megtalálja a gép a pontos kontextust: 1/1 = Vaskos 1 Pont.
- Ha csak a 5. helyen jön a válasz: 1/5 = Azaz te csak 0.2 Pont Jutalmat kapsz. Ha az átlagos MRR-ed magas, tudod, hogy a RAG-od zseniálisan tűpontos!`
        },
        {
            id: "5-6",
            text: "LLM output minőségmérés: BLEU, ROUGE",
            subcategory: "Metrikák",
            content: `##  Működik a Fordító-Motorunk? (A Hagyományos NLP)

Még mielőtt a GPT és társai megjelentek, az AI egyik fő képessége a "Fordítás" és "Összegzés" volt nyelvek között (NLP korszak). Hogy állapítod meg egy gépről matematikai módiszámmal, hogy "Pontos-e a Francia fordítása?"

Két híres statisztikai mutatószám vonult be a történelembe erre:
1. **BLEU (Bilingual Evaluation Understudy):** Fordításnál zseniális. Adunk 3 Professzionális emberi fordítást (Golden Standard), és fogjuk az AI gépi fordítását. Megnézzük, hogy az AI által kitermelt N-grammok (2-3 szavas kifejezések) hány %-ban egyeznek meg az emberi leiratokkal. Precizitásra fókuszál.
2. **ROUGE (Recall-Oriented Understudy for Gisting):** Kifejezetten "Szövegösszegzésekhez" találták ki, nem fordításhoz. Ott nem baj ha van benne a kimenő összegzésben a FŐ TÉMA (Recall), még ha más szavakkal is fogalmaz. Ha egyezik a gondolat, a ROUGE metrika zöldet jelez.`
        },
        {
            id: "5-7",
            text: "Pandas, NumPy és Matplotlib használat",
            subcategory: "Eszközök",
            content: `## A Szent Háromság (A Python Kincsei)

Amikor meg kell számolnod heti 1.2 millió eladási tranzakciót és statisztikát kell vonsz abból, az Excel (ahol görgetni is akadás) azonnal befagy. A kódolók ilyenkor a Pythonhoz, és a három legnépszerűbb "Eszköztárhoz" nyúlnak:

### 1. Pandas
Ez az "Excel megkódolva". Képes hatalmas táblázatokat (úgynevezett DataFrame-eket) betölteni a memóriába, és másodpercek alatt szűrhetsz: *"Add meg az összes 30 év alatti nőt a listából, úgy elrendezve ahol a fizetés növekvő sorrendben van!"* Pár sor kód.
### 2. NumPy 
A legfejlettebb és villámrögton (C++ ra írt) numerikus számológép, ami mátrixokkal és tömbökkel dolgozik. Amikor az AI a vektor-adatbázisokkal vagy képpixel "Hőmérsékletekkel" operál, NumPy alatt pazarol minimális áramot a gép a Cosinus méréseknél.
### 3. Matplotlib
Ha látni akarod a trendet az unalmas számok helyett! A Matplotlib percek alatt elragadó Vonal diagramsokat, Oszlop diagramokat és Szórás Pont diagramokat generál ki neked grafikus fájlkent (kimentheted PNG-be is), ami után beillesztheted a menedzsered prezentációjába!`
        }
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
