import { Module } from "@/types";

export const module01: Module = {
    id: 1,
    title: "Generatív AI Alapok",
    icon: "Sparkles", // Lucide icon
    description: "Ismerd meg a generatív mesterséges intelligencia működését és alapjait.",
    tags: ['beginner', 'content', 'general'],
    dayInSchedule: "Nap 1",

    painPoints: [
        "Kreatív tartalom előállításának lassú folyamata",
        "Repetitív szöveggenerálási feladatok automatizálásának hiánya",
        "Képek, videók, szövegek manuális létrehozásának magas költsége",
        "Korlátozott kreatív kapacitás a csapatokban"
    ],

    curriculum: [
        {
            id: "1-1",
            text: "Mi a generatív AI és hogyan működik",
            subcategory: "Alapfogalmak",
            videoUrl: "https://www.youtube.com/embed/5NgNicANyqM",
            content: `## Generatív Mesterséges Intelligencia (GenAI)

A hagyományos feladat-orientált AI rendszerekkel (amelyek például felismerik, hogy egy képen macska vagy kutya van-e) szemben a **Generatív AI** arra képes, hogy vadonatúj, korábban sosem látott tartalmakat (szöveget, képet, hangot, kódot) hozzon létre.

### Hogyan tanulnak meg "alkotni"?
Ezek az algoritmusok (általában neurális hálózatok) az interneten fellelhető adatok milliárdjait dolgozzák fel, amíg meg nem értik a mögöttes **mintázatokat és szabályszerűségeket**.
Amikor megkérsz egy AI-t, hogy írjon egy verset a Balatonról Shakespeare stílusában, az nem egy létező könyvből másol! A tanult nyelvtani és stilisztikai szabályok alapján, *szóról-szóra megjósolja* a legvalószínűbb következő szavakat.

**Képzeld el úgy, mint...** Minta egy mesterséf, aki élete során tízezer receptet kóstolt meg. Soha nem kell elővennie a szakácskönyvet, vaktában is képes újragondolni az ízeket és egy vadonatúj fogást az asztalra tenni.
            `
        },
        {
            id: "1-2",
            text: "Nagy nyelvi modellek (LLM-ek) architektúrája",
            subcategory: "Alapfogalmak",
            content: `## Large Language Models (LLM) - A szövegek nagymesterei

Az LLM, azaz a Nagy Nyelvi Modell egy olyan mesterséges intelligencia, amit kizárólag arra képeztek ki, hogy az emberi nyelvet megértse és generálja. (Ilyen például a ChatGPT "agya", a GPT-4).

### Mit jelent a "Nagy"?
Két fronton is óriásiak ezek a rendszerek:
1. **Gigaléptékű adat:** A Wikipédiát, könyveket, kódokat és a fél internetet "elolvastatják" velük a tanítás során.
2. **Paraméter szám:** A modellekben lévő billiónyi apró kapcsolat (mint nálunk a szinapszisok) száma döbbenetesen magas. Egy modern LLM 100 és 1000 milliárd paraméterrel dolgozik szimultán minden egyes betű legenerálása során.

### Mit csinál a háttérben?
A hétköznapi mágia mögött komoly matematika áll: az LLM-ek **statisztikai valószínűségeket** számolnak. Amikor beírod a promptot, az LLM értékeli a kontextust, és kiszámolja, hogy mi lenne logikailag a legértelmesebb folytatás (tokenről tokenre).`
        },
        {
            id: "1-3",
            text: "Transformer modellek megértése",
            subcategory: "Alapfogalmak",
            videoUrl: "https://www.youtube.com/embed/SZorAJ4I-sA",
            content: `## A Transformer Forradalom (2017)

Az LLM-ek koronaékszere a Google kutatói által 2017-ben publikált **Transformer Architektúra** ("Attention Is All You Need" c. kutatás).
Ez a felfedezés tette lehetővé a mai modern AI forradalmat.

### Az "Attention" mechanizmus varázslata
Korábban az AI a szövegeket szigorúan sorrendben, balról jobbra olvasta el. Ezért a hosszú mondatok végére el is "felejtette", mi volt az elején.

A Transformer viszont **Self-Attention** (Ön-figyelem) rendszert használ:
Ez azt jelenti, hogy egyszerre képes ránézni az összes szóra a bemenetben, és megmondja, melyik szónak melyik másik szövegrészhez van erősebb köze. Méri a *szavak közötti gravitációt*.

Példa:
> "A kutya nem fért be a kocsiba, mert az túl **nagy** volt."

A Transformer "figyelem rendszere" azonnal felismeri, hogy a "nagy" jelző itt most a *kutyára* vonatkozik, és nem a kocsira. Képes megérteni a nehéz kontextust!`
        },
        {
            id: "1-4",
            text: "Tokenizáció és embedding koncepciók",
            subcategory: "Alapfogalmak",
            content: `## A Gépek Nyelve: Tokenek és Embedding

Mi emberek betűkből és szavakból építjük fel a beszédünket. De a számítógépek számára a "Kutya" szó önmagában semmit sem jelent.

### Tokenizáció (A szöveg feldarabolása)
Mielőtt az AI megérti a promptodat, "felaprítja" kisebb egységekre, miket tokeneknek hívunk. Egy token lehet egy teljes szó (pl. "alma"), de egy hosszabb vagy ritkább szót gyakran ketté vagy három részre is vág (pl. "hamburger" -> "ham", "bur", "ger").
> Ökölszabály: 1 token átlagosan ~4 angol karakternek felel meg (kb. 0.75 szó).

### Embedding (A szavak térbeli elhelyezése)
Ha megvannak a tokenjeink, azokat az AI számsorokká (vektorokká) alakítja. Képzeld el egy hatalmas 3D-s teret, ahol minden szónak van egy koordinátája.
A zsenialitás az, hogy a hasonló jelentésű szavak (király, uralkodó, korona) nagyon közel fognak esni egymáshoz ebben a térbeli elrendezésben, míg a "banán" mérföldekre lesz tőlük. Így az AI matematikai műveletekkel képes "megérteni" a fogalmak közötti távolságot és kapcsolatot!`
        },
        {
            id: "1-5",
            text: "Generatív képalkotó modellek (DALL-E, Stable Diffusion, Midjourney)",
            subcategory: "Alapfogalmak",
            content: `## Képalkotás a Semmiből (Diffúziós Modellek)

Míg a nyelvi modellek statisztikai alapon jósolják a következő szót, a modern képalkotók (mint a **Midjourney** vagy a **DALL-E 3**) egy teljesen más technikát, az úgynevezett *Diffúziót* alkalmazzák.

### A Diffúzió Lényege
A tanítás során fogtak millió valódi festményt és fényképet, és lépésről-lépésre elkezdtek hozzáadni véletlenszerű digitális "zajt" (mint a régi TV-ken a hangyaháború), amíg a kép teljesen felismerhetetlenné vált.
Az AI feladata az volt, hogy tanulja meg, hogyan tudja ezt a zajt képzaj-mentesíteni, és "visszafejteni" az eredeti képet.

Amikor te beírod a promptba hogy: *"Egy űrhajós cicát kérek lovon"*, a folyamat a következő:
1. Az AI legenerál egy vásznat tele 100% teljesen véletlen, kaotikus vizuális zajjal (feket-fehér pöttyökkel).
2. Elkezdi visszafejteni a zajt, de most a te szöveged irányítja a "tisztulást"! Ott tisztul "űrhajós" formára a zaj, ahol a szavak húzzák.
3. 20-30 lépés (lépés = steps) után a zajból kikristályosodik a kért tökéletes, sosem létezett festmény.`
        },
        {
            id: "1-6",
            text: "Szöveg, kép, audió és videó generálás alapjai",
            subcategory: "Alapfogalmak",
            content: `## A Multimodális Forradalom

A Generatív AI eddigi legnagyobb ugrása, amikor kitört a szöveg (text-to-text) világából. Ma már a modellek több bemenetet (modalitást) is képesek párhuzamosan értelmezni és generálni. Ezt hívjuk **Multimodalitásnak**.

- **Text-to-Image (Szövegből Kép):** Mint a Midjourney vagy a DALL-E, ahol leírást adunk és vizuális kimenetet kapunk.
- **Audio Generation (Hang):** AI-ok, mint az *ElevenLabs*, amelyek néhány másodperces hangminta alapján tökéletesen klónozzák bárki hangját, és felolvassák a megadott szöveget az eredeti hangsúlyozással.
- **Video Generation:** Olyan rendszerek (pl. *Sora*, *RunwayML*), ahol egy mondat beírására perceken belül mozifilmszerű, fizikailag pontos videóklippek jönnek létre.
- **Image-to-Text (Vizuális megértés):** Feltöltesz egy fotót egy kitöltött Excel tábláról vagy egy gyanús anyajegyről, az AI (pl. GPT-4o) "megnézi", és azonnal szöveges elemzést készít róla.`
        },
        {
            id: "1-7",
            text: "Python alapok AI-hoz",
            subcategory: "Technikai Készségek",
            content: `## Miért pont a Python az AI "Anyanyelve"?

Ha be akarsz lépni az AI fejlesztés és a munkafolyamatok automatizálásának (Workflow) világába, előbb-utóbb találkozni fogsz a Python programozási nyelvvel.

### Az előnyök AI szempontból:
1. **Olvashatóság:** A Python szintaktikája (ahogy a kódot írjuk) nagyon hasonlít a sima angol nyelvhez. Nem kell bajlódni bonyolult zárójelekkel és memóriacímekkel.
2. **Az Óriások Vállán Álva:** Az összes vezető AI kutatólabor (OpenAI, Google, Meta) az új modelljeiket elsőként Python nyelvre dedikált eszköztárakkal (Package-ekkel) adják ki (pl. PyTorch, TensorFlow).
3. **Data Science Ökoszisztéma:** Mivel az AI alapja az adatelemzés, a Python rendelkezik a világ  legjobb adatos könyvtáraival (eszközeivel), mint a *Pandas* (Excel jellegű táblázatkezelés kódolva) vagy a *NumPy* (gyors matematika).`
        },
        {
            id: "1-8",
            text: "OpenAI API, Hugging Face Transformers használata",
            subcategory: "Technikai Készségek",
            content: `## Az AI "Konnektorai" (API-k)

Amikor a böngészőből használod a ChatGPT-t, akkor te egy felületet (UI) használsz. Ha viszont azt szeretnéd, hogy a saját céges rendszered (például az ügyfélkezelő CRM) tudjon "beszélgetni" az AI-al a háttérben, az **API**-ra lesz szükséged.

### Mi az az API?
Az Application Programming Interface egy digitális csatlakozódugó. Az OpenAI biztosít számodra egy "Kulcsot" (egy hosszú jelszót). Ha a programodból (mondjuk Pythonból) átküldesz nekik egy kérdést ezzel a kulccsal ráütve a borítékra, ők visszaküldik neked a nyers választ. Gombok, design és reklámok nélkül.

### Hugging Face: Az AI GitHub-ja
Míg az OpenAI a saját fizetős szervereit adja neked, a **Hugging Face** a világ legnagyobb nyílt-forráskódú AI könyvtára. Innen ingyenesen letölthetsz többszázezer mások által betanított modellt (Transformers library), és akár a saját laptopodon is futtathatod őket internetkapcsolat nélkül!`
        },
        {
            id: "1-9",
            text: "Prompt struktúrálás és optimalizálás",
            subcategory: "Technikai Készségek",
            content: `## A Jó Prompt Aranyat Ér

Sokszor azt hisszük, a gép a buta, ha rossz választ ad, holott a hiba a rosszul strukturált kérdésben (Prompt) keresendő. Az LLM-eknek nincs "józan paraszti esze", te vagy az ő szemüvege a világra!

### Alapszabályok:
1. **Legyél Explicít (Egyértelmű):** Ne fogalmazz úgy, mintha egy kollégával beszélnél aki ismeri a háttérsztorit! A gép semmit sem tud a kontextusról.
2. **Használj Szerepeket (Role-playing):** Mindig kezdd így: *"Viselkedj egy tapasztalt biológia tanárként..."*. Ezzel rögtön a tanuló halmazának ahhoz az 1%-hoz irányítod, ahonnan neked kellenek a szakkifejezések.
3. **Specifikáld a Kimenetet (Format):** Határozd meg, hogyan adja vissza az adatot (pl. *Markdown táblázat, Python kód, 3 bekezdéses esszé*).
4. **Iterálj!** Sose fogadd el az első generálást végeredménynek. Kérj tőle finomításokat: *"Jó lett, de a 2. pontot írd át kicsit humorosabbra."*`
        },
        {
            id: "1-10",
            text: "Model paraméterek megértése (temperature, top_p, max_tokens)",
            subcategory: "Technikai Készségek",
            content: `## Nyúlj a Gázpedálhoz! (Generációs Paraméterek)

Amikor egy AI modellel API-n (vagy profi tesztfelületen, "Playground"-on) keresztül beszélgetsz, beállíthatsz láthatatlan csúszkákat is, amik alapjaiban változtatják meg az AI jellembeli működését a generálásnál.

### A Három Legfontosabb Paraméter:
1. **Temperature (Hőmérséklet - Alap: 0.7):** 
   - A kreativitás mérőfoka. `+ 0.0 + ` esetén az AI "Robot üzemmódra" vált, és a matematikailag legvalószínűbb szót választja mindig (jó programkód íráshoz). 
   - `+ 1.0 + ` felé közelítve egyre váratlanabb, kreatívabb (de sokkal hallucinációra és hibára is hajlamosabb) szavakat emel be a szövegbe (jó versíráshoz).
2. **Top P (Alap: 1.0):** Hasonló a Hőmérséklethez, ez a szókincs variációját vezérli. Ha `+ 0.1 + ` re veszed, akkor az AI csak és kizárólag abból a top 10% szóból hajlandó választani, amik szorosan a témához kapcsolódnak.
3. **Max Tokens:** Ezzel szabhatsz egy végtelen generálásnak szigorú, levágós limitet (mondjuk maximálj 500 szóra). Megvéd attól is, nehogy 10.000 szavas monológot generáljon, ami lemeríti a pénztárcádat az API-n.`
        }
    ],

    whenToChoose: [
        "Automatizálni szeretnéd a tartalomgyártást",
        "Chatbotokat, virtuális asszisztenseket építesz",
        "Kreatív iparágban dolgozol (marketing, design, média)",
        "Személyre szabott felhasználói élményt szeretnél létrehozni"
    ],

    projects: [
        {
            title: "AI Blog Író Asszisztens",
            description: "Építs egy automatikus blog generátort adott témákhoz GPT-4 vagy Claude segítségével, különböző írásstílusokban."
        },
        {
            title: "Termék Leírás Generátor E-commerce-hez",
            description: "Generálj SEO-optimalizált termékleírásokat több nyelven."
        },
        {
            title: "Személyre Szabott Email Marketing Eszköz",
            description: "Hozz létre AI-alapú email sablonokat szegmentált célközönségnek."
        }
    ],

    resources: [
        { title: "Google Cloud: Introduction to Generative AI", url: "https://www.coursera.org/specializations/introduction-to-generative-ai" },
        { title: "Hugging Face Spaces", url: "https://huggingface.co/spaces" }
    ],

    microLearning: "A Generatív AI nem csak 'másol', hanem új tartalmakat hoz létre a betanított minták alapján – mintha egy séf új receptet találna ki korábbi ízek alapján.",

    deepDive: `## A Transformer Modellek Lényege
A modern AI (mint a ChatGPT) alapja a **Transformer** architektúra, ami 2017-ben jelent meg ("Attention Is All You Need"). 

### Hogyan működik? (A "Figyelem" mechanizmus)
Képzeld el, hogy olvasol egy mondatot. Amikor a "bank" szót olvasod, a jelentése attól függ, hogy előtte az szerepel: "pénzes" vagy "folyó". A modellek figyelem (attention) mechanizmusa pontosan ezt csinálja: **minden szót az összes többi szó kontextusában értelmez.**

> "A figyelem mechanizmus olyan, mint egy karmester, aki tudja, melyik hangszerre kell koncentrálni a szimfónia adott pillanatában."

### Alapfogalmak
- **Tokenizáció:** A szöveg szavakra (vagy szórészletekre) bontása. A gépek nem szavakat, hanem számokat (tokeneket) látnak.
- **Paraméterek:** Hasonló az agy szinapszisaihoz. Minél több, annál okosabb lehet a modell (de annál több memóriát is igényel).
- **Hőmérséklet (Temperature):** Határozza meg a kreativitást. Alacsony (pl. 0.1) = tényszerű, Magas (pl. 0.9) = kreatív, de kockázatos.`,

    sandboxLinks: [
        { label: "Próbáld ki: Hugging Face Chat", url: "https://huggingface.co/chat/", type: "tool" },
        { label: "OpenAI Playground", url: "https://platform.openai.com/playground", type: "tool" }
    ],

    interactiveElement: {
        question: "Melyik paraméter felelős leginkább az AI modell válaszainak 'kreativitásáért' (véletlenszerűségéért)?",
        options: [
            "Max tokens",
            "Temperature (Hőmérséklet)",
            "Top-K",
            "Learning rate"
        ],
        correct: 1,
        explanation: "A Temperature (hőmérséklet) szabályozza, mennyire legyen prediktábilis vagy épp meglepő (kreatív) az AI válasza. Az alacsony érték tényszerű és monoton, a magas érték változatos válaszokat ad."
    },

    challenge: {
        title: "Kihívás: Magyarázd el egyszerűen!",
        goal: "Írj egy olyan promptot az AI-nak, amiben megkérdezed tőle a víz körforgását egy teljesen laikus, óvodás korú gyerek számára, pontosan 3 egyszerű pontban.",
        constraints: "- Célközönség beállítása (Role/Audience) \n- Formátum (pontosan 3 pont) \n- A végeredménynek könnyen érthetőnek és mese-szerűnek kell lennie.",
        successKudos: "Zseniális! Elsajátítottad az AI kontextusba helyezését."
    }
};
