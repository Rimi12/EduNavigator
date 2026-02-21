import { Module } from "@/types";

export const module10: Module = {
    id: 10,
    title: "Eszközök & Nyílt Forráskód",
    icon: "Wrench", // Lucide icon
    description: "Modern fejlesztői AI eszközök, CLI szoftverek és nyílt forráskódú megoldások a gyorsabb építéshez.",
    tags: ['beginner', 'advanced', 'general', 'coding'],
    dayInSchedule: "Nap 7",

    painPoints: [
        "Fejlesztési sebesség lassú hagyományos kód írásával",
        "Boilerplate kód (sablonok) ismétlése",
        "Debugolás és hibakeresés időigényessége",
        "Vendor lock-in (Egyetlen fizetős AI provider-hez való túlzott kötöttség)"
    ],

    curriculum: [
        {
            id: "10-1",
            text: "AI Code Assistants: GitHub Copilot, Cursor",
            subcategory: "Fejlesztői eszközök",
            videoUrl: "https://www.youtube.com/embed/5D3x8H13Eew",
            content: `## Kódolás "Párosban": AI Code Assistants

Az AI ma már nem csak kérdések megválaszolására alkalmas, hanem a legjobb munkaeszköz a programozók kezében.
Szárnykövetőnek is hívhatnók őket. Beépülnek a kódszerkesztődbe és a következőket végzik:
- **Automatikus kiegészítés (Autocomplete):** Már nem csak sima szavakat egészít ki, ha látja, hogy elkezdtél egy lekérdezést, de még csak a félszót pötyögted be, képes 10-20 sort, a teljes függvény logikáját kikövetkeztetni, neked csak egy tab-ot kell nyomni és elfogadni.
- **Kód magyarázat:** Kijelölöd a 200 soros ősi, olvashatatlan kódot, nyomsz egy Ctrl+L-t, és megkérdezed: *"Mit csinál ez pontosan?"*. És megmondja.
- **Automata refaktorálás:** Megkérheted, hogy *"Cseréld ki az összes változónevet angolra, és tegyél hibakezelést is alá."* 

Az iparági sztenderdek ma a **GitHub Copilot** (Ami kicsit régebbi, de mindenhol jelen lévő), és a zseniális trónkövetelő, a **Cursor IDE**. (lásd a következő pontot)`
        },
        {
            id: "10-2",
            text: "IDE-k és kiterjesztések: VS Code vs Cursor",
            subcategory: "Fejlesztői eszközök",
            content: `## A Választás: VS Code Módosítva vagy Cursor?

Ha komolyan kódolsz, vagy életedben először állnál neki az AI segítségével, a választás kulcsfontosságú.

### VS Code (Visual Studio Code) + Kiegészítők
A világ legnépszerűbb fejlesztőkörnyezete. Eredetileg nem kötött mesterséges intelligenciához, de letöltheted hozzá beépülő modulként (Extension) a ChatGPT-t, a Claude-ot vagy a Copilot-ot. Ha szereted a hagyományos környezetet és ragaszkodsz a plug-in rendszerekhez tegyél fel mindent külön-külön.

### Cursor: A Natív AI Szerkesztő (A Jövő)
A **Cursor** tulajdonképpen fognott egy nyílt-forrású VS Code alapot, és egészen a "motorháztető aljáig" beépítette az LLM logikát (GPT-4o, Claude 3.5 Sonnet).
- Különlegessége az úgynevezett **Composer (Összeállító) funkció**: Meg tudod kérni CTRL+I paranccsal, hogy csináljon egy komplex, "több fájlt érintő" változtatást: *"Gombra kattintva legyen fekete a háttér".* A Cursor tudja hogy a stílus a CSS-ben van, a gomb komponens a TSX-ben, a logika a layout fájlban. **Párhuzamosan fogja megynitni és megírni a módosításokat 3 külön fájlban, neked csak el kell fogadnod egy 'Igen'-nel.** Ezt a sima ChatGPT képtelen megoldani a weben!`
        },
        {
            id: "10-3",
            text: "CLI tools: LangChain CLI, LlamaIndex CLI",
            subcategory: "Fejlesztői eszközök",
            content: `## AI Munkafolyamatok a Terminálban (CLI)

Gyakran a gépelős terminál (Command Line Interface - CLI) a profi fejlesztők terepe. Ha RAG projektet raksz össze (saját dokumentum integrálással), hetekig tartana a nulláról felépíteni egy mappaszerkezetet Vector Adatbázissal és LLM összekötésekkel.

Ahelyett, hogy hegesztenél, használj modern AI CLI eszközöket!
Ha telepítve van például a **LangChain**, elég beírnod egy fekete terminál ablakba annyit:

\`langchain app new my-rag-project --package rag-chroma\`

És Bumm! A program másodpercek alatt létrehoz egy kész, működő, professzionális mappa struktúrát, a megfelelő Python környezettel, beállított Chroma vektor adatbázissal, amit már csak csiszolnod kell a te egyéni CSV / PDF fájljaiddal.`
        },
        {
            id: "10-4",
            text: "API testing: Postman, Insomnia AI features",
            subcategory: "Fejlesztői eszközök",
            content: `## A Fejlesztők Svájci Bicskája: Postman

Amikor egy AI Workflow-t fejlesztesz (Pl. a Te Kódod meghívja az OpenAI API-ját), elengedhetetlen, hogy teszteld a "Csatlakozót", Mielőtt leprogramoznád a felületet köré.

A **Postman** (és az Insomnia) olyan grafikus szoftverek, ahol beállíthatod a "POST" kérésedet egy adott URL-re (pl. *api.openai.com/v1/chat*), megadhatod a titkos jelszavadat, beírod a JSON kérdést, és rányomsz a "Küldés" gombra.  Másodpercek alatt visszajön a nyers gépi válasz.
*Új AI funkciók:* Ezek a tesztelők manapság már beépített AI asszisztenssel is rendelkeznek! Ha hibakódot kapsz a teszt során, csak ráklikkelsz az "AI Fix" gombra, és a Postman Bot megmondja, hol rontottad el a formátumot a beküldött JSON-ben!`
        },
        {
            id: "10-5",
            text: "Version control: Git best practices for AI projects",
            subcategory: "Fejlesztői eszközök",
            content: `## Verziókezelés AI korban (Git AI)

A Git alapvető minden fejlesztőnek (Hogy mentsük a kódot a GitHub-ra), de az AI forradalom ezt is megváltoztatta.
Mire kell figyelni AI projekt fejlesztéskor?
1. **Titkok Szivárgása:** Soha ne commitold be a Kódodban lévő OpenAI API kulcsodat (Key) a Publikus GitHub-ra! Használj \`.env\` fájlokat környezeti változókkal, és a \`.gitignore\`-al tiltsd ki a feltöltésüket. Ha mégis feltöltöd, másodpercek alatt botok ellopják és lenullázzák a számládat!
2. **AI Commit Üzenetek:** A GitHub Copilot ma már beépül a VS Code Git menüjébe is. Ha módosítottál 30 fájlt (Finomhangoltad az agentet), nem neked kell kitalálni mit írj a "Save" gomb alá... a Gép elolvassa a kód módosításaidat, és generál egy tökéletes "Commit Message" összefoglalót (*Pl: Added error handling to the vector DB search function.*).`
        },
        {
            id: "10-6",
            text: "No-code/Low-code: LangFlow, Flowise",
            subcategory: "No-code/Low-code",
            content: `## AI Építés Programozás Nélkül!

Mi van, ha van egy zseniális AI Termék-Ötleted, de az életedben nem írtál egy sor Python kódot sem? 
A Vizuális (Kódmentes) építőfelületek (UI) neked készültek!

A **LangFlow** és a **Flowise** a legismertebbek a piacon.
Képzeld el az egészet úgy, mint a Legót, vagy a Flow-diagramok rajzolását egy fehértáblára:
1. Kihúzol a képernyőre egy "PDF Feltöltő" Node-ot.
2. Kihúzol egy "Szöveg Feldaraboló (Spliter)" Node-ot, és egy fizikai vonallal összekötöd a kettőt.
3. Kihúzol egy "Vecotr Adatbázis" tárolót, végül egy "Chatbot Ablak" dobozt.
Minden dobozt vonallal összekötöttél... Rányomsz a 'Play' gombra, és az Egérrel Összekattintgatott RAG Architektúrád a háttérben Python kódként lefordul, és azonnal, tökéletesen Működik a beérkező dokumentumaiddal!`
        },
        {
            id: "10-7",
            text: "Gumloop: Agentic workflow builder",
            subcategory: "No-code/Low-code",
            content: `## Autonóm Munkások Építése Vizuálisan (Gumloop)

Míg a Flowise zseniális a klasszikus ChatBOT-ok összerakására (RAG), vannak olyan esetek, amikor "Ügynöki (Agentic) Munkafolyamatokra" van szükséged – tehát olyan AI-ra, ami nem csak válaszol a chatben, hanem "Elindul a nagyvilágba és cselekszik".

Erre az egyik legjobb feltörekvő platform a **Gumloop**.
A felirülete hasonló a Flowise-hoz (Dobozok és Vonalak), de az "Eszköztára" kőkemény üzleti folyamatokra van kihegyezve.
Készíthetsz egy "Agentic" körforgást pár kattintással:
- Kapcsolódik a céges Google Driveodhoz napi szinten.
- Letölti az Érkező Új Számlákat.
- Elolvassa azokat a Beépített Vision AI (Látó AI) segítségével.
- Kivonja a Cégnevet, Összeget. 
- Egy Vonallal bekötöd a Gumloop-on belül az "Airtable Adatbázis" dobozt, és a bot magától létrehozza a sorokat az Excel fájlba hónapokon át!`
        },
        {
            id: "10-8",
            text: "Open-source projektek: LangChain, LlamaIndex, Transformers",
            subcategory: "Open Source",
            content: `## A Python Fejlesztők Szent Gráljai

Ha mégis úgy döntesz, hogy Kódolni fogsz (és ez a javasolt út, ha egyedi terméket akarsz skálázni cégeknek), a 3 leghíresebb nyílt forráskódú Libary (Előregyártott Könyvtár) használatát meg KELL tanulnod:

1. **LangChain:** A svájcibicska az Orchestrációhoz (Irányításhoz). Arra való, hogy az LLM-et, a Search API-t, Meg a Memóriát láncba (Chain) fűzze 3 sornyi Python káddal. (Gyakorlatilag ez az iparági sztenderd kód!).
2. **LlamaIndex:** Bár a Langchain is tud RAG-ot, a LlamaIndex *Kifejezetten* adatokra és azok beolvasására (PDF, SQL, Notion) specializálódott. Ha iszonyatosan pontossá akarod tenni a "Saját Adat" alapú AI-odat, ezt használd a szimpla Langchain RAG helyett.
3. **HugingFace Transformers:** Akkor használod a kódban, ha nem API-ket (OpenAI-t) hívsz az interneten át, hanem letöltöttél a szobádba egy nyílt forráskódú "Agyat" és te akarod helyben meghívni futásra a Pythonodban.`
        },
        {
            id: "10-9",
            text: "Helyi futtatás: Ollama, LM Studio",
            subcategory: "Open Source",
            content: `## Ne fizess az OpenAI-nak! Futtasd Helyben!

Sok cég (Bankok, Büntetés-végrehajtás) szabályzatai egyszerűen tiltják, hogy kikerüljön a szerverükről az Okmánymásolat a Felhőbe. Ilyenkor "On-Premise" (Helyi) LLM kell!
Szerencsére 2024-re megjelentek a végtelenül laikus-barát telepítők, amik a világ legbonyolultabb videókártya-finomhangolós PyTorch környezeteit eltüntették a szemünk elől:

1. **Ollama:** Mac-en, Linux-on (és már windowson is) egy Terminál (CLI) applikáció. Beírod hogy \`ollama run llama3\`, és leszedi futtatja magában a modellt a gépeden percek alatt.
2. **LM Studio:** Ez egy Asztali Applikáció (GUI) Windows-osoknak! Úgy néz ki  mint egy szép zenelejátszó. Bal oldalon böngészel The Hugging Face boltjában, rányomsz egy 8-bites (Qvantált) 4 GB-os modellre hogy "Download", majd a Mappanékzetben rákattintasz, és az LM Studio betölti neked a Chat ablakba ami kizárólag a te proecsszorodon / videókártyádon pörög teljesen ingyen!`
        }
    ],

    whenToChoose: [
        "Gyorsan akarsz minimális prototípust (MVP) építeni",
        "Nem akarsz minden AI komponenst vagy kódot a nulláról írni",
        "Ingyenes (Open-source) alternatívát keresel kommersz API-k mellé"
    ],

    projects: [
        {
            title: "Local AI Stack (Teljes Offline AI)",
            description: "Ollama telepítés Llama 3-al, és egy nyílt forráskódú UI (Open WebUI) Zero internet-függőséggel."
        },
        {
            title: "No-code RAG Application",
            description: "Biztonságos dokumentum indexelés a Flowise UI builderjén (kódolás nélkül)."
        }
    ],

    resources: [
        { title: "Flowise AI", url: "https://flowiseai.com/" },
        { title: "Cursor IDE", url: "https://cursor.sh/" }
    ],

    microLearning: "Az AI világában az 'Open Source' nem csupán ingyenes szoftvert jelent, hanem a kollektív emberiség leggyorsabban fejlődő tudásbázisát. Egy hónap is hatalmas idő az AI-ban.",

    deepDive: `## Eszközök az Építőknek

Hiába tudod, hogy építs RAG rendszert vagy Ügynököt, ha mindent az alapoktól programozol. A modern AI fejlesztő nem kódol a nulláról, hanem "összerakós" eszközöket használ.

### Fejlesztői Asszisztensek (A "Páros Programozás" jövője)
Régen a dokumentációt bújtad órákig egy hiba miatt, majd kimenekültél a *Stack Overflow*-ra.
Ma egy eszköz mint a **Cursor** (A leggyorsabban növő AI IDE) a teljes kódbázisodat ismeri, és szó szerinti "Mi a hiba a 45. sorban ehhez a logikához képest?" kérdésedre át is írja a szerkezetet. 

### No-code (Vizuális) Építők
Ha RAG rendszert akartál építeni felhőben 2023-ban az napokba került. Ma a **LangFlow** vagy **Flowise** segítségével szó szerint egérrel húzogatod össze egy virtuális vásznon a:
1. PDF olvasót
2. Szöveg darabolót (Chunker)
3. Szöveg vektorizálót (Embedding)
4. Memória modult
5. Kimeneti LLM-et

> **Tipp:** Szinte sosem az alapvetői modell számít már, sokkal inkább: Hogyan csomagoltad be a megfelelő eszközökkel hogy a felhasználó imádja a gyorsaságát?`,

    sandboxLinks: [
        { label: "LangFlow GitHub", url: "https://github.com/langflow-ai/langflow", type: "tool" },
    ],

    interactiveElement: {
        question: "Mi a Cursor legfőbb előnye a hagyományos szerkesztőkkel szemben AI fejlesztés során?",
        options: [
            "Csak Python kódot tud futtatni",
            "Képes 'RAG-szerűen' az egész lokális projekt memóriáját és kódját megérteni",
            "Ingyenes korlátlan OpenAI API kulcsot ad minden felhasználónak",
            "Az összes hibát azonnal automatikusan commitolja a git szerverre"
        ],
        correct: 1,
        explanation: "A Cursor 'AI-first' szövegszerkesztő igazi ereje a Codebase Indexelésben rejlik. Nem egy elszeparált chatablak, hanem a teljes környezeted és dokumentumaid kontextusában ad megoldási javaslatokat."
    }
};
