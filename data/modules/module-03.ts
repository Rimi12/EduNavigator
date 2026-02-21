import { Module } from "@/types";

export const module03: Module = {
    id: 3,
    title: "RAG és Agentic Workflows II.",
    icon: "Database", // Lucide icon
    description: "A Retrieval-Augmented Generation (RAG) folyamatok részletei, saját adatok integrálása AI rendszerekbe.",
    tags: ['advanced', 'coding', 'data'],
    dayInSchedule: "Nap 3",

    painPoints: [
        "LLM-ek elavult vagy korlátozott tudása",
        "AI hallucinációk (kitalált információk) csökkentése",
        "Vállalati belső tudásbázisok hozzáférhetőségének hiánya AI számára",
        "Költséges és időigényes fine-tuning alternatívája"
    ],

    curriculum: [
        {
            id: "3-1",
            text: "Mi a RAG és miért fontos",
            subcategory: "Alapfogalmak",
            videoUrl: "https://www.youtube.com/embed/T-D1OfcDW1M",
            content: `## RAG (Retrieval-Augmented Generation)

Gyakran a ChatGPT-vel (vagy bármilyen más nyelvi modellel) az a legnagyobb probléma, hogy "vak" a cégünk saját, bizalmas adataira. Ezt kétféleképpen lehetne orvosolni:
1. **Fine-tuning (Újratanítás):** Irgalmatlanul drága, lassú gépi tanulási folyamat, amit minden egyes új doksinál meg kéne ismételni.
2. **RAG (Az okos megoldás):** Megtanítjuk az AI-nek, hol keresse ki magának a válaszokat a *generálás előtt*.

### RAG = Információ Visszakeresés + Generálás
Amikor RAG-ot használunk, valójában egy szisztémát építünk az AI köré. Ha a felhasználó megkérdezi *"Mi volt cégünk bevétele 2023 harmadik negyedévében?"*, a RAG rendszer azelőtt hogy reagálna, kimegy a saját adatbázisodba (Retrieval), kiveszi onnan a releváns Excel vagy PDF sorokat, és betolja "puskaként" az AI kontextusába (Augmented). 

Ezután a modell ebből a friss információmorzsából megfogalmazza a tökéletes, emberi választ (Generation). Nincs hallucináció!`
        },
        {
            id: "3-2",
            text: "RAG architektúra 3 fázisa: Indexelés, Lekérés (Retrieval), Generálás",
            subcategory: "Alapfogalmak",
            content: `## A RAG Három Lépése

Tegyük fel, hogy fel akarod dolgoztatni a "Céges HR Kézikönyvet" egy AI-val. Hogyan néz ez ki a motorháztető alatt?

### 1. Fázis: Indexelés (Indexing)
Ez jóval a kérdés feltevése előtt megtörténik.
A 100 oldalas kézikönyvedet az AI feltördeli kisebb, feldolgozható bekezdésekre (*Chunking*). Ezután ezeket a bekezdéseket a számítógép számára érthető számsorozatokká alakítja (ezt hívjuk *Embedding*-nek), végül elmenti egy hatalmas "szám-raktárba" (Vektor Adatbázis).

### 2. Fázis: Lekérés (Retrieval)
A dolgozó beírja a cég oldalára: *"Vihetek be kutyát az irodába?"*
A RAG rendszer ezt a kérdést is "számokká" (vektorrá) alakítja. Ezután befut a vektor adatbázisba, és egy ultragyors matematikai algoritmussal megkeresi azokat a bekezdéseket a HR könyvből, amik geometriailag a legközelebb állnak a kérdés jelentéséhez. 

### 3. Fázis: Generálás (Generation)
A rendszer összegyűjti a "kutyás" bekezdéseket, majd elküldi az LLM-nek a következő paranccsal: *"A mellékelt céges szabályzat alapján válaszold meg a kérdést!"*. Az LLM csak most lép színre és fűzi emberi mondatokká az adatot.`
        },
        {
            id: "3-3",
            text: "Vector adatbázisok és embedding modellek",
            subcategory: "Alapfogalmak",
            content: `## Vector Adatbázis: Az AI "Adathordozója"

A hagyományos relációs adatbázisok (mint az SQL) Excel-szerű táblázatokban gondolkodnak. Remekül keresik meg azt a sort, ahol \`age = 35\` és \`city = "Budapest"\`.
De mit csinálnak, ha azt mondod: *"Keress nekem olyan dokumentumokat, amik a boldogságról és az életörömről szólnak?"* Erre a SQL alkalmatlan, mert csak konkrét szavakra tud szűrni.

### Itt jön képbe az Embedding!
Az Embedding Modell (mint pl. az OpenAI \`text-embedding-3-small\`) fog egy mondatot, és átalakítja azt egy több ezer dimenziós **koordinátává**. 
A varázslat ott rejtőzik, hogy a hasonló jelentésű szavak és mondatok *"Közel fognak egymáshoz esni a térben"*. A "Kutya" és a "Macska" vektorai szomszédok, de a "Kutya" és a "Rakétahajtómű" nagyon messze esnek egymástól.

### A Vektor Adatbázisok 
Az olyan modern Vektor Adatbázisok (pl. **Pinecone**, **ChromaDB**, **Milvus**) arra lettek kitalálva, hogy ebből a sok millió térbeli pontból a másodperc töredéke alatt megtalálja a kérdés szomszédait.`
        },
        {
            id: "3-4",
            text: "Chunking stratégiák (szöveg darabolása)",
            subcategory: "Alapfogalmak",
            content: `## A Darabolás Művészete (Chunking)

Ha bedobsz egy 500 oldalas könyvet az adatbázisba egyetlen egy "vektorként", az AI sose fogja tudni megtalálni a részletes információt. Ezért jön a darabolás. De hol a határ?

- Ha túl **kicsire** darabolod (pl. mondatonként), elvész a kontextus. (Képzeld el, hogy a rendszer visszadobja a mondatot: *"Ő is így gondolta."* - Ebből az AI nem tudja, ki gondolt mit!)
- Ha túl **nagyra** vágod (pl. fejezetenként), akkor túl sok felesleges zaj (zagyva szöveg) fog bekerülni a lekérés során, és lelassítod az egész gépezetet.

### Milyen stratégiához nyúljunk?
1. **Fixed-size chunking:** Egyszerű karakterlimites darabolás (pl. 1000 karakterenként vágás). Ez a legbutább de legolcsóbb.
2. **Recursive character chunking:** Megpróbálja fentről lefelé tiszteletben tartani a formázást: előbb vág új bekezdés jellel (\`\\n\\n\`), aztán mondattal, de sosem vág ketté egy szót.
3. **Semantic chunking:** (A Jövő) Maga a modell nézi meg, hogy hol ér véget a logikai mondanivaló a dokumentumban, és ott szeli el, legyen az 2 sor vagy 2 bekezdés.`
        },
        {
            id: "3-5",
            text: "Szemantikus keresés és hasonlósági metrikák (cosine similarity)",
            subcategory: "Alapfogalmak",
            content: `## Több mint Kulcsszókereső! (Semantic Search)

A hagyományos (Google típusú) keresés "Kulcsszó" (Keyword) alapú. Ha te beírod a céges keresőbe, hogy *"Fizu"* miközben a dokumentumokban mindenhol az szerepel, hogy *"Munkabér"*, a gép egy nagy Nullát fog kidobni. Csalódott leszel.

Ezzel szemben áll a **Szemantikus (Jelentésalapú) Keresés**.
Ha emlékszel a Vektorok térbeli elhelyezkedésére, az AI számára a *"Fizu"* és a *"Munkabér"* vektor (számsor) a virtuális térben rendkívül közel esik egymáshoz. 

Amikor felteszed a kérdést az AI-nak, a kérdésedből is csinál egy Vekort ("Golyót"), amit "bekúszat" a térbe!

### Cosine Similarity (Koszinusz Rendszer)
A Vector Adatbázis egyszerűen megméri a bezárt Szöget a Kérdésed golyója, és a feltöltött Dokumentumok golyói között. 
1. Ha a szög majdnem nulla (párhuzamos) -> Akkor a két szöveg jelentése megegyezik (pl. kérted a '*Fizut*', a gép megtalálta a '*Munkabér*'-t). Ezt nevezik *Cosine Similarity*-nek! 
2. Az adatbázis azonnal visszadobja az ehhez a ponthoz tartozó PDF darabot a gépnek megválaszolásra.`
        },
        {
            id: "3-6",
            text: "Document loaders és Text splitting módszerek",
            subcategory: "Technikai implementáció",
            content: `## A Dokumentumok Bekötése az Érrendszerbe

Amikor egy AI keretrendszerrel dolgozol (Például **LangChain** a kódolók számára), a legelső feladat a nyers adatok begyűjtése, úgynevezett betöltői és darabolói lépésekkel.

### 1. A Retriverek ("Hozók")
Vannak beépített könyvtárak (Loaders), amelyek 2 sor kóddal képesek szinte bármilyen modern formátumot leforgatni és kinyerni az információt, megszabadítva minket a vizuális formázó elemektől:
- PDF és Word Loaderek
- CSV és Excel Loaderek
- Notion, Confluence, Trello API Loaderek
- Webpage Loaderek (Kikaparják egy URL cím mögött álló blog cikket hirdetések nélkül).

### 2. A Darabolás (Splitting)
Mint korábban említettem, a nyers szöveget feldaraboljuk (Chunking). Ilyenkor elengedhetetlen egy kis **"Overlap" (Átfedés)** beállítása!
Ha a gép mondatonként darabol (50 szó block / chunk), és mi beállítunk 10 szó 'Atfedést', az azt jelenti hogy a 2. dokumentumtömb utolsó mondata szerepelni fog a 3. tömb legelső mondataként is. Miért jó ez? Szálkásító ragasztóként viselkedik, hogy sose szakadjon szét mondat közepén egy kontextus.`
        },
        {
            id: "3-7",
            text: "Vector stores (Pinecone, Chroma, Qdrant, FAISS)",
            subcategory: "Technikai implementáció",
            content: `## Ahol az "AI Memóriája" Érlelődik

Beszéltünk a vektoros (számsoros) adatokról, de vajon hová mentjük el azt a 10 millió koordinátát ami egy könyv beolvasása után lepörög? Bonyolult SQL relációs adatbázisok erre képtelenek 10 másodperc alatt.

### Enter THE VECTOR STORES (Vektor Adatbázisok)
A Vektor adatbázisokat az alapoktól arra tervezték, hogy ne "keressenek" pontos szavakat egy oszlopban, hanem sokdimenziós terekben (matematikai műveletekkel) számoljanak Cosine Similarity (távolság) méréseket villámgyorsan.
Néhány sztár a piacon:
- **Chroma DB:** Talán a legismertebb (nyílt forrású) adatbázis, amit te magad letölthetsz a szerveredre teljesen ingyen. Különösen népszerű lokális, biztonságos vállalati AI építéshez.
- **Pinecone:** Egy szolgáltatás (Cloud) amit a világ legnagyobb AI cégei használnak. Te csak fellősz nekik egy fájlt API-n, és mindent ők intéznek skálázhatóan, másodpercek alatt.
- **FAISS:** A Meta (Facebook) által kódolt "könyvtár", ami elképesztő sebességgel rendszerezi és keresi vissza a hatalmas struktúrákat offline gépeken.`
        },
        {
            id: "3-8",
            text: "Retriever optimalizálás (top-k, threshold beállítás)",
            subcategory: "Technikai implementáció",
            content: `## Behúzzuk a Halót! (Retriever Beállítások)

Miután beágyaztad (Embedding) az okirataidat, és a felhasználó feltette a kérdést, elindul a Retreiver (Kereső/Előhívó) folyamat. Hogy ne tölts le szemetet vagy terheld feleslegesen az LLM-et, 2 gombot finomhangolnod kell.

### 1. A TOP-K (Limit)
Amikor a Vektor Mátrixból visszatérnek a "találatok" (Document Chunk-ok), alapba be van állítva egy Top-K érték (pl \`Top-k = 4\`). A gép hiába talált 100 dokumentumot amiben szerepel a szó, szigorúan csak azt a 4 Darabot, ami a LEGSZOROSABBAN KÖTŐDIK (Cosine) átadja a ChatGPT agyónak, a többit eldobja. Minél nagyobb a K, annál drágább és lassabb a generálásod.

### 2. A Treshold (Küszöb / Dinamikus)
A Top-k-nél sokszor okosabb. \`Treshold = 0.82\`. Azt mondod a Mátrixnak, hogy hozz vissza BÁRMENNYI dokumentumot, ha annak a hasonlósági ráta értéke (az egyezése) 82% vagy a fölött van. Ha 20 ilyen doksi van, akkor beküldi a 20-at. Ha csak 1, akkor csak egyet biztosít az LLM kontextusába.`
        },
        {
            id: "3-9",
            text: "Hybrid keresés (keyword + semantic)",
            subcategory: "Advanced technikák",
            content: `## Hibrid Keresés (A Legjobb Mindkét Világból)

Bár áradoztunk a Szemantikus Keresés zsenialitásáról, vannak esetek amikor véreset elbukik!
Képzeld el, hogy alkatrészt keresel a gyártósori AI adatházban. Te a **"TX-4029-B2 Váltókar"**-t keresed.
A tisztán szemantikus AI kereső elkezd gondolkodni a "Váltó" és a "Kar" szavak jelentéséről és a Vektor Mátrixból visszadobja neked a cég legnépszerűbb "XYSebesség Váltóját" merthogy jelentésben hasonló... Holott te PONTOSAN azt a sorozatszámot akartad látni!

### A Keyword (Kulcsszó) Megment 
Erre alkották meg a Hibrid (Hybrid) Keresőket az AI-ban. 

Ezek beépítik a hagyományos BM25 algoritmusokat (amiken a Google és az ElasticSearch nőtt fel).
Amikor elindítod a lekérdezést, a Háttérben 2 kereső indul egyszerre párhuzamosan:
1. Az Vektor DB elszalad értelmezni a teljes kontextust (Miről szól a sztori).
2. A Kulcsszó BM25 gép átnyálazza a szövegeket betűre, vonalra, számra fókuszálva.
Majd a kettő "Eredménylistáját" (Score-okat) összevonja egy matematika képlettel (Alpha mix) és ezt fogják a végén betölteni az LLM Promptjába. Tökéletes eredményt adva.`
        },
        {
            id: "3-10",
            text: "Re-ranking, relevancia javítás és Multi-modal RAG",
            subcategory: "Advanced technikák",
            content: `## Haladó RAG Csiszológépek

Ahogy egy RAG rendszer megnő, és 10,000 PDF figyel benne, hiába használunk Hibrid keresőt, a kapott Top 20 dokumentumból a Legfontosabb mondat a 18. pozícióba kerül és az LLM "elveszhet be" a Prompt hosszú alján. Ezen segít a Rerank (ÚjraRendező) háló.

### Cohere Re-Ranking (Cross-Encoders)
Amikor a te Vektor Adatbázisod (gyorsan és olcsón) kidob magából egy "Nagyjából" jó százas lekérést (Top 100), közbelép egy Második, nagyon kis dedikált háló (Sokszor a Cohere nevű cég Rerank modellje). Ez iszonyat pontos, de lassú.
A Rerank megnézi mind a 100 eredményt felülről-lefelé, pontot ad nekik, és **Újrasorakoztatja az egészet precíziós szikén**, így a 18. helyen lévő releváns rész feltűnik az 1. pozícióba! Ezt kapja meg végül az LLM, csökkentve a hallucinációt.

### Multi-Modal RAG
Amikor nem csak Szöveget vektorizálok. Gondolj bele: beolvasol egy 100 oldalas pénzügyi riportot PDF-ből. És ha kérdezed a bevételt, megmondja, de a pdf-ben lévő **oszám diagramot (Képet)** is visszaadja a képernyőre forrásként a szöveg mellé, mert egyszerre értelmezte a grafikát a szöveggel együtt! (CLIP modellek).`
        }
    ],

    whenToChoose: [
        "Vállalati dokumentumokból kell AI-t táplálni (szerződések, manuálok, FAQ-k)",
        "Valós idejű, friss információkra van szükség",
        "Domain-specifikus tudást szeretnél AI-ba integrálni",
        "Fine-tuning túl költséges vagy lassú lenne"
    ],

    projects: [
        {
            title: "Vállalati Tudásbázis Chatbot",
            description: "Indexelj 100+ PDF dokumentumot, építs Vector Store-t és RAG pipeline-t egy chat interfészhez."
        },
        {
            title: "Jogi Szerződés Elemző",
            description: "Hosszú jogi dokumentumok feldolgozása, specifikus klauzulák keresése RAG segítségével."
        }
    ],

    resources: [
        { title: "Pinecone: What is RAG?", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
        { title: "ChromaDB", url: "https://www.trychroma.com/" }
    ],

    microLearning: "Képzeld el az AI-t egy nyitott könyves vizsgán, aki épp elfelejtette a választ. A RAG a könyvtáros, aki pontosan kikerösi a vonatkozó bekezdéseket a könyvből, és leteszi az AI elé a vizsgán, hogy meg tudja válaszolni a kérdést.",

    deepDive: `## RAG Architektúra Lépésről Lépésre
A RAG (Retrieval-Augmented Generation) megoldja az AI legnagyobb problémáját: a hallucinációt és az adathiányt. Működése 3 fő lépésre bontható:

### 1. Indexelés (Előkészület)
Mielőtt a felhasználó egyáltalán kérdezne, a dokumentumainkat elő kell készíteni.
- **Chunking:** Egy 100 oldalas PDF-et nem lehet egyszerre befogadni. Kisebb, "emészthető" bekezdésekre vágjuk.
- **Embedding:** A szöveges bekezdéseket számsorokká (vektorokká) konvertáljuk. A vektorok olyanok, mint a térképen a koordináták: a hasonló jelentésű mondatok közelebb lesznek egymáshoz.
- **Tárolás:** Ezeket a vektorokat eltesszük egy Vektor Adatbázisba (pl. Chroma, Pinecone).

### 2. Lekérés (Retrieval)
A felhasználó feltesz egy fórumkérdést: *"Hány nap szabadság jár?"*
- A kérdést is vektorrá alakítjuk.
- Megkeressük a vektor adatbázisban a kérdéshez legközelebb eső "szomszédokat" (ezek lesznek a releváns bekezdések).

### 3. Generálás
Az eredeti AI modellnek átadjuk a kérdést PLUSZ a megtalált bekezdéseket kontextusként. Így az AI nem fejből talál ki valamit, hanem konkrétan a te dokumentumaidból válaszol.`,

    sandboxLinks: [
        { label: "Pinecone RAG Tutorial", url: "https://docs.pinecone.io/guides/get-started/build-a-rag-chatbot", type: "tool" },
    ],

    interactiveElement: {
        question: "Mi a célja az 'Embedding'-nek a RAG folyamat során?",
        options: [
            "A szöveg lefordítása más nyelvekre",
            "A szöveg darabolása (chunking) olvashatóbb részekre",
            "A jelentés numerikus (vektoros) formába alakítása, amivel a gépek tudnak számolni",
            "Biztonsági kapu kialakítása a hacker támadások ellen"
        ],
        correct: 2,
        explanation: "Az embedding egy matematika folyamat, ami a szöveges információ mögötti szemantikai jelentést számsorokká (vektorokká) konvertálja. Így, két tematikailag hasonló szöveg vektorja megkereshető geometriai közelség alapján."
    }
};
