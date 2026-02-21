import { Module } from "@/types";

export const module09: Module = {
    id: 9,
    title: "Optimalizálás és Finomhangolás",
    icon: "Gauge", // Lucide icon
    description: "A modellek sebességének növelése, memóriaigényük csökkentése (Fine-Tuning) és az egyedi adatok betanítása.",
    tags: ['advanced', 'data', 'coding'],
    dayInSchedule: "Nap 7",

    painPoints: [
        "Az általános (Generic) modellek nem elég pontosak a saját szakterületi feladataidra",
        "Túl magas inference (kimeneti) költségek a szolgáltatók felé",
        "Lassú válaszidők, a felhasználó sokat vár az üzenetekre",
        "Memória és számítási (Compute) erőforrás hiányok"
    ],

    curriculum: [
        {
            id: "9-1",
            text: "Supervised Fine-Tuning (SFT) Labeled adatokkal",
            subcategory: "Finomhangolási Technikák",
            videoUrl: "https://www.youtube.com/embed/eC6Hd1hFvos",
            content: `## Irányított Finomhangolás (SFT)

A hagyományos, "nyers" nyelvi modellek csak a következő szót próbálják megtippelni. Ha beírod nekik, hogy: *"A fővárosa Franciaországnak: "*, nem biztos hogy azt mondják *"Párizs"*. Lehet, hogy kiegészítik a kérdést egy másik kérdéssel: *"és Olaszországnak?"*. Mert egy internetes fórumon (amin nevelkedtek) így nézett ki a kontextus.

Ezen segít a **SFT (Supervised Fine-Tuning)** – a felügyelt finomhangolás.
Készítesz párezer *tökéletes* Felhasználó-Asszisztens kérdés-válasz párt:
- **Felhasználó:** Mi Prizs fővárosa?
- **Asszisztens:** Franciaország fővárosa Párizs.

Ezeket feltöltöd az algoritmusba, és utasítod: *"Ne csak szavakat találj ki, hanem kövesd ezt a párbeszédes szerkezetet és viselkedési mintát!"* Ettől lesz a ChatGPT chathöz hasonló, és nem csak egy szógenerátor.`
        },
        {
            id: "9-2",
            text: "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)",
            subcategory: "Finomhangolási Technikák",
            content: `## Hogyan spóroljunk tízezer dollárokat videókártyákon? (PEFT)

Egy 70 milliárd paraméteres, nagy tudású nyelvi modell (LLM) betanítása több tízmillió dollárba kerül, mivel az össze neuronális kapcsolat sulyozását frissíteni kell rajta menetről menetre. Ezt egy hétköznapi cég nem tudja kifizetni a frissítésre (Fine-Tuning).

### A megoldás: PEFT és LoRA
A Parameter-Efficient Fine-Tuning (Hatékony Finomhangolás) filozófiája, hogy *Fagyasszuk be az eredeti modellt* amennyire csak lehet, hogy ne használja a VRAM-ot! 
- **LoRA (Low-Rank Adaptation):** A LoRA a teljes, "befagyasztott agy" mellé csatol egy sokkal kisebb, másodlagos "memória blokkot" (adaptert), amiben csak a megváltozott feladathoz mérten tárol 1-2 millió módosítást az erediheti milliárdos adatmennyiséggel megemelve. Ezt az 1%-os kicsi hálót már akár otthon, egy gamer videókártyán is tudod tréningezni órák alatt! Amikor végeztél, a frissítést "összesütöd" a nagy modellel.`
        },
        {
            id: "9-3",
            text: "Instruction tuning és RLHF alapok",
            subcategory: "Finomhangolási Technikák",
            content: `## Emberi visszajelzések az AI betanításában (RLHF)

Honnan "tudja" a ChatGPT, hogy ne adjon receptet csőbombákhoz, dacára annak hogy az interneten az elkészítési leírás bőségesen megtalálható volt a tanulóadataiban?

**RLHF (Reinforcement Learning from Human Feedback) - Emberi Visszajelzésen Alapuló Megerősítéses Tanulás:**
Ez a módszer az ipari sztenderd az AI biztonságossá, udvariassá és pontossá tételére (Gyakorlatilag ettől is ChatGPT a ChatGPT).

### A Folyamat Lépései:
1. Az AI legenerál 4-5 különböző opciót egy veszélyes kérdésre.
2. Egy emberi értékelő (Human Annotator) a háttérben **sorba rendezi** (Rankeli) a válaszokat aszerint, melyik a leghasznosabb, és melyik a legmérgezőbb.
3. Ebből a sorbarendezésből betanítanak egy kisebb, "jutalmazó AI-t" (Reward Model), aki megtanulja, mik az emberek preferenciái.
4. Ezután a fő modell elkezdi ontani a válaszokat magából, de ha a kicsi Jutalmazó AI úgy ítéli meg, a kimenet csőbomba-recept, vastagon "Büntetőpontot" oszt ki az LLM-nek, így az a végére megtanulja az etikus viselkedést!`
        },
        {
            id: "9-4",
            text: "Learning rate scheduling, batch size tuning",
            subcategory: "Hyperparameter optimalizálás",
            content: `## A Mérnök Kezelőpultja (Hyperparameterek I.)

Hiába tolsz be 1 millió PDF-et egy modellbe, hiába drága a szerver, ha a gép lassan és rosszul tanul (Súlyoz). A mérnökök dolga felhúzni és lejjebb húzni "Csúszkákat" a betanítás menedzselésére (Hyper parameters). Két fontos gomb:

### 1. Learning Rate (Tanulási Rátak - Lépésköz)
Milyen 'Nagyokat lépjen' az AI agya ha új tudást észlel?
Ha Lassan halad (kicsi a Learning Rate), akkor a finom változásokat briliánsan megérti de 8 évre lenne szüksége a tanuláshoz. Ha Óriásira veszed a Csúszkát, percek alatt "Leiskolázza" az univerzumot... csakhogy átsiklik a fontos részleteken, elbutul az output minősége (Túlszalad az "Optimális völgyön").
### 2. Batch Size Tuning (Adat-Darabolás)
Ha megeszel egyben 3 hamburgert rosszul leszel. Az Ágensnél a Batch Size azt szabja meg, "Hány Kérdés-Válasz" csomagot toljunk egyszerre be az agyába párhuzamosan. A nagyobb Batch felgyorsítja a betanítást (jobb GPU kihasználás), de ha túl sok (pl 512 mondat egyszerre), könnyen megeheti a teljes memóriát.`
        },
        {
            id: "9-5",
            text: "Epoch selection és optimizer választás",
            subcategory: "Hyperparameter optimalizálás",
            content: `## A Mérnök Kezelőpultja (Hyperparameterek II.)

Folytassuk a Csúszák állítását a tanulási fázisban.

### 1. Epoch Selection (Iskolai Félévek)
Egy 'Epoch' azt jelenti a Deep Learning-ben: A Modell PONTOSAN EGYSZER végigolvasta az első arctól az utolsóig az általad feltöltött TELJES, mondjuk 10,000 oldalas anyagot! 
Hányszor olvastassuk el vele? Ha 1-re teszed, az épp hogy megkarcolja a felületet. Ha 50 Epochot adsz meg, az "Túltanulja" (Overfitting) a rendszert... a Gép csak szajkóni fogja szó szerint Vaktában a szöveget, de kreatív nem lesz.

### 2. Optimizerek (Optimalizálási algoritmusok)
Az Optimizer az az apró programkód (Matematikai iránymutató hálózat), aki "Korbáccsal áll" a Gép mögött, és megadja Százalékosan, mennyira nyúlt félre az aktuális válaszával tegnap. 
- A leghíresebb és az Alapértelmezett választás ma már szinte minden nyelknél egyetlen Név: Ez az **AdamW** (Adaptive Moment Estimation whith Weight decay). Ha kételkedsz, nyomd ezen a gombon a kiképzést!`
        },
        {
            id: "9-6",
            text: "Quantization (Kvantálás) technikái: 16-bit, 8-bit, 4-bit",
            subcategory: "Modell tömörítés",
            content: `## Hogyan Tömörítsünk Elefántot Egy Bőröndbe?

Egy LLaMA 70B (70 milliárd paraméteres) modell súlya eredetiben (16-bites lebegőpontos számokkal) több mint 140 Gigabyte Videó memória VRAM-ot foglal el (Több mint 2 millió Forintnyi Cloud géppark óránként).
Hogyan futtatjuk ezt a legújabb Macbookokon ami csak 32 GB memóriás?!

### A Kvantálás (Quantization)
Levágjuk a "túl pontos tizedesjegyeket". (A Pi-vel sem számolunk 50 tizedesjegyig a boltban, elég a 3.14).
Az Eredeti (16-bit) AI memóriát letömörítjük durva matekkal felére (8-bit) vagy negyedére (4-bit). 
A Varázslat Theória az, hogy kiderült: A paraméterek aprólékos pontossága nem annyira számít a beszédminőségnél. Egy 4-Bitesre "Lebutított", megnyomorított LLaMA modell 98%-ban Olyan Okos Marad, mintha milliókat fizettünk volna a nagyért, de cserébe felmegy egy 8GB-os Gamer Laptop videókártyára is! (GGUF formátumban töltheted le őket).`
        },
        {
            id: "9-7",
            text: "Pruning és Distillation: felesleg eltávolítása",
            subcategory: "Modell tömörítés",
            content: `## Metszés és Lepárlás (Compresszió)

Nem a kvantálás (Tömörítés bit levágással) az egyetlen okoskodás a méret csökkentésére. Mi van, ha beleavatkozunk konkrétan a Nagy és Lusta hálózat áramkörébe és kitépjük ami felesles?

### Pruning (A Metszőolló)
Ha az emberi agyat is megvizsgáljuk, rengeteg "elhalt" szinapszis van amit sosem használunk. Az AI Neurális Hálójában van rengeteg Csomópont (Neuron) ami mondjuk 0,0001 súlyzással esik a latba az értékalkotásnál (kb. Nulla hatása van a szavak generálására). A Prining Algolirmus végigmegy a hálóron, és szentiment nélkül **kivágja / O értéküre nullázza** ezeket a felesleges ágakat. Gyorsabb futás, kevesebb memóriaigény!

### Distillation (A Tudás Lepárlása)
Képzelj el egy 300 Milliárd paraméteres, "Nagyapó" AI-t. Lassú, drága... De Professzor! A *Tudás Lepárlása (Knowledge Distillation)* során veszünk egy Kicsi, Olcsó, és Buta (diák) modellt, és megkérjük a "Nagyapóval" folytatott beszélgetésen - utánozza le a válaszok logikáját.  A Diák a tanár "stílusát" kapja meg betanításként a nyers interneti szövegeken felnyúlva! Bámulatos, mintha letöltöttünk volna Neo agyába egy helikopter szerelő Tudást.`
        },
        {
            id: "9-8",
            text: "Inference optimalizálás: Caching és Batch processing",
            subcategory: "Kimenet gyorsítás",
            content: `## A Másodpercek Mestere (Inference Optimisation)

"Inference"-nek hívjuk azt a konkrét pillanatot (és időt), ami aközött telik el, hogy a felhasználó ráütött az 'ENTER' gombra és generálni kezdődik a legelső karakter az AI-ból a kijelzőre.

### KV Cache (A Memória trükk) 
Amikor beküldesz a ChatGPT-be egy 200 könyv-oldalas PDF-et, a generálás kezdete lassan indul, mert be kell olvasnia és vektorializálnia az 100,000 extra jelet. Mi van ha a Felhasználó (ÚJABB) kérdést tesz fel a PDF-vel kiegészítve az Inputban?
Az "Amnéziás" AI megint (MÁSODSZORRA IS) átdörgölné a PDF-t... De nem, ha be van állítva a KV Cache (Key Value)! Ő azonnal lementi ezt az állapotot a memóriába mikor elsőre olvasta. Amikor jön a 2. kérdés, hozzácsapja a régi memóraterületet és CSAK a VÉGÉN az Új Kérdéses Szavakat elemzi le. Zsetoni (Token) roppanatos spórolás!

### Batch Processing
Ráakasztottál 10,000 embert az 1 kicsi Cloud Szerveredre. Beérkezik egyszerre 30 kérdés. Ha sorban, egyesével válaszolja meg az AI 1..30-ig a listát a legutolsó ember 3 Percet is várhat a sorban. A "Batching" összekötözi egy hatalmas 30 Darabos (Mátrixos Csomaggá) az összes kérdést: Rátolja a Számoló-Motorokra a videókártyára, és a gép mind a 30 embernél párhuzamosan elkezdi az első betűeket befejezni.`
        },
        {
            id: "9-9",
            text: "Speculative decoding alapok",
            subcategory: "Kimenet gyorsítás",
            content: `## Mindolvasás (Speculative Decoding) 

A legnagyobb nyelvi modelleknek (GPT-4, Llama 400B) mindenegyes sor kiírása óriási terhet jelent. Miért kéne a legnagyobb gépnek kigdolgoznia olyan trivialításokat is mint *"A fővárosa Franciaország-"* ? Látjuk hogy *Párizs* jön! Erre találták ki ezt az új technikát amivel többszörös sebességugást tudnak elérni.

Mi történik a gépház alatt?
1. Indítunk **KÉT** darab AI modellt egymás mellett a Szerveren!
2. Az Egyik a **"Kicsi és Gyors Bot (Draft Model)"** megpróbálja elolvasni a gondolatodat 4 szóval előre. *(Kiküldi gyorsan hogy, "Sziasztok én a nevében")*!
3. Közben elküldtük ezt a "Kicsi bot" választ a **"Drága és Hatalamas Lassan"** (Végső Model) Főnökhöz, aki csak ránéz és gyorsan leellenőrzi az 1 mondat pontosságát de magától nem generál egy percig. 
4. Ha Jó, rábólinnt és kirakja azonnal a 4 szót a képernyődre! Ha hülyeség a "Mondat vége", kidobja a Kicsi Bot eredményét és maga írja át csupán az Utolsó szót (Token-t). 
A gép így nem egyesével ír amíg a kurzoros vár, hanem ugrál! 4-5 szavas mondta darabokat rág át és bólint rájuk le 3 perces mondtok helyett.`
        }
    ],

    whenToChoose: [
        "Saját, belső (proprietary) vállalati adatokat szeretnél szó szerint 'betanítani' a gépnek (bár a RAG gyakran jobb kezdés)",
        "Költségeket szeretnél radikálisan csökkenteni a felhő szolgáltatók elhagyásával",
        "Egy ultra-gyors, mikroméretű (kicsi paraméterszámú) modellt helyben akarsz futtatni telefonokon."
    ],

    projects: [
        {
            title: "Domain-Specific Model Fine-tuning",
            description: "Llama 3 vagy Mistral open-source modell tanítása LoRA segítségével ~1000 specifikus mondatpáron."
        },
        {
            title: "Model Compression Pipeline",
            description: "Egy meglévő, masszív LLM kvantálása (szűkítése) 4-bitesre, mérve az 'accuracy loss'-t és a sebességnövelést."
        }
    ],

    resources: [
        { title: "Hugging Face PEFT Library", url: "https://huggingface.co/docs/peft/index" },
        { title: "LoRA Paper Explanation", url: "https://arxiv.org/abs/2106.09685" }
    ],

    microLearning: "A Finomhangolás nem (feltétlen) tanít meg új tényeket az AI-nak. A Finomhangolás arra jó, hogy megtanítsuk az AI-nak, miként VISELKEDJEN és milyen FORMÁBAN adja ki a válaszait az esetek 99%-ában kérdés nélkül is.",

    deepDive: `## Mit jelent a Finomhangolás és a LoRA?

Ha letöltesz egy hatalmas, nyílt-forráskódú modellt (pl. Llama), az olyan okos mint egy lexikon, de lehet, hogy neked csak orvosi rövidítések kikeresésére kellene egy másodperc tizedrésze alatt.
Ilyenkor vetjük be a finomhangolást (Fine-tuning).

### A kihívás
Egy 70 milliárd paraméteres LLM újratanítása hihetetlen mennyiségű memóriát, több ezer dolláros videókártyát (GPU) és heteket igényelhet. Ez régen a nagy cégek zsebpénz kiváltsága volt.

### A Megoldás: LoRA (Low-Rank Adaptation)
Képzeld el a hatalmas neurális hálót, mint egy telefon gigantikus operációs rendszerét. Újratanításkor (régen) le kellett volna cserélni az alap szisztémát. 
A LoRA azonban fogja és csak egy pici, extra, ráilleszthető "mátrix réteget" (Adaptert) pakol rá a masszív, befagyasztott alap modellre. Lényegében ráragasztunk egy kis cetlit (egy "okosabb" memóriát) ami módosítja a modell válaszait, minimális erőforrássl, hetek helyett órák alatt!`,

    sandboxLinks: [
        { label: "Ollama (Futtass saját nyílt modelleket)", url: "https://ollama.com/", type: "tool" },
    ],

    interactiveElement: {
        question: "A modell tömörítési stratégiák közül mit csinál a Kvantálás (Quantization)?",
        options: [
            "Felesleges hálózati ágakat (idegsejteket) metsz le az LLM-ről.",
            "Kvantum számítógépeket von a folyamatba a biztonság miatt.",
            "Az adatokat (paramétereket) tároló típusok precizitását csökkenti le (pl: 32 bit-es lebegőpontos számról, 'durvább' 4-bites adattípussá). Ezzel iszonyatos sok memóriát szabadítva fel.",
            "A hosszú dokumentumokat vonja össze mondatokká a gyorsabb olvasásért."
        ],
        correct: 2,
        explanation: "A quantizálás (kvantálás) a lebegőpontos 'töredék' számok kerekítése durvább szintekre. Ugyan kevesebb tizedesjegyet tud megkülönböztetni a gép (picikét butább lesz a válasz) de cserébe drasztikusan, akár a negyedére lezuhan a RAM igény."
    }
};
