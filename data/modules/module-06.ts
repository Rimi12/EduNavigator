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
        {
            id: "6-4",
            text: "Tool integration és API management",
            subcategory: "Rendszer architektúra",
            content: `## A Tökéletes Gépész: Eszközkezelés

Ahhoz, hogy az AI "kilépjen a kalitkából" és hatással legyen a fizikai világra (például levelet küldjön a nevedben), eszközökre (Tools) van szüksége.

Amikor te építesz AI rendszert, lényegében te vagy a Gépész:
1. Megírod az Eszközt kódolva: Elkészítesz egy kis Python függvényt, ami eléri a Google Naptárt.
2. Csatolod az Ügynökhöz: **Ezt nagyon szigorúan kell megtenni!** Az AI-nak szó szerint Markdown szöveggel el kell magyarázni: *"Itt a Naptár-Mentő Eszköz. Csak akkor használd, ha az ügyfél konkrét dátumot mond. Bemenetként egy ÉÉÉÉ-HH-NN formátumot vár."*
3. Az API Management a kulcs. Ha az AI túl okos, percenként százszor próbálná futtatni a naptárba írást ami hibákat szül, így a hozzáféréseket neked kell korlátozni és ellenőrizni (Rate Limiting).`
        },
        {
            id: "6-5",
            text: "Multi-agent kommunikációs protokollok",
            subcategory: "Rendszer architektúra",
            content: `## Amikor az AI-k Elkezdenek Beszélgetni

Képzelj el egy virtuális irodát. Beültetsz egy Pénzügyi Elemző AI-t (Agent A), meg egy Prezentáció Készítő AI-t (Agent B). Hogyan tudják átadni egymásnak az információt?

### A "Kézfogás" (Handshake Protocols)
A Multi-Agent keretrendszerekben (mint a CrewAI) szigorú protokollok uralkodnak:
- **Szöveg alapú (Text/String):** Agent A legenerál 12 oldalt nyers szövegként, és bedobja Agent B "postafiókjába" (Promptjába). Látványos, de iszonyatosan pazarló és lassú.
- **Strukturált JSON:** Ez a profi út! Agent A leolvassa a tőzsdét, de nem 12 oldalt ír, hanem egy kis JSON kódtömböt állít elő (pl. \`{"Apple_trend": "Nő", "százalék": 12}\`). Agent B rögtön csak ezt a kis tömörített memóriacsomagot olvassa be, így pillanatok alatt legyártja belőle a grafikonját.`
        },
        {
            id: "6-6",
            text: "State management és session handling",
            subcategory: "Építőelemek",
            content: `## Kinek a Session-je ez egyáltalán?

Egy élő SaaS terméknél (Pl. egy AI pszichológus app) havi tízezer ember kattint a szerveredre másodpercenként. Mindenkihez tartozik egy beszélgetés.
Ha a Python szervered csak "Emlékezni próbál" globálisan, Józsi megfogja kapni Pisti terápiás beszélgetését!

### Session Handling (Lappangási Kezelés)
Minden felhasználó amint belép, kap egy egyedi "ID Kártyát" (Session ID). Amikor az AI-hoz küldjük a kérdését, a Kártyát szorosan hozzácsatoljuk: *"Válaszolj a Kérdésre, de CSAK az XYZ-123 Kártyához tartozó korábbi üzenetek (State) figyelembevételével!"*
Ezeket az "állapotokat" (State) egy Redish Cache vagy külső adatbázis tartja életben, így a drága AI logikát szétválasztjuk a memóriától.`
        },
        {
            id: "6-7",
            text: "Error handling és retry logika",
            subcategory: "Építőelemek",
            content: `## Amikor Borul a Bili...

Az AI olyan mint az Időjárás: Kiszámíthatatlan egy fokig. 
Bármikor előfordulhat, hogy az OpenAI API szervere leáll (500 Error), vagy te megkérted, hogy *"JSON kódot adj vissza"*, de ő véletlenül írt egy "Hello, itt a kódom:" magyar mondatot is a kód elé, amitől a rendszered darabokra törik és lángra kap.

### Retry (Ismétlés) Logika
Sosem bízunk 1 lekérésben!
Ha az Ügynök meghal, vagy az általa visszaadott válasz "szabálytalan" (nem JSON), be kell építened egy Retry Logikát. 
> *"A válasz megszege az Előírásokat. Kérlek írd újra szigorúan csak a kód blokkot használva."*
Az Orchestrátor rendszered (pl: LangChain) ilyenkor némán, a háttérben újra és újra nekifut az LLM-el 3-4 alakalommal a kérésnek. A Felhasználó ebből annyit lát, hogy 2 másodpercet "Töltött" a gép, és máris megjött a tökéletes válasz.`
        },
        {
            id: "6-8",
            text: "Human-in-the-loop (HITL) mechanizmusok",
            subcategory: "Fejlett koncepciók",
            content: `## Az Ember a Gépben (HITL)

Vannak dolgok, amiket sosem engedhetünk át 100%-ban az AI-nak. (Például egy orvosi gyógyszerfelírást vagy 10 millió forint banki utalását). Itt lép be a *Human-in-the-loop* koncepció.

A folyamat:
1. Az AI elemzi az összes adatot, orvosi leletet, stb.
2. Meghozza a "Döntést" (Terv).
3. **MEGÁLL ÉS VÁRAKOZIK.**
4. Egy vizuális gomb megjelenik az emberi főorvos (vagy fejlesztő) telefonján: *"Az AI azt javasolja utaljunk 10 milliót erre az IP címre. Jóváhagyod (Approve) / Módosítod (Edit) / Elutasítod (Reject)?"*

Az ember rábök az Approve gombra. Az AI csak ekkor, az Engedély megérkezése pillanatában folytatja a Végrehajtást (Execution) és utal! Ezzel a robothálózat jogi és mentális felelősségét az embereknél tartjuk.`
        },
        {
            id: "6-9",
            text: "Hierarchical agent systems (supervisor-worker)",
            subcategory: "Fejlett koncepciók",
            content: `## Főnökök és Beosztottak (Supervisor Architektúra)

Ahogy skálázódik a terméked, a Router-minta nem lesz elég. Ha van egy AI a Cégvezetésre, egy a HR-re, egy a Jogra, és egy a Kódolásra, egymással sebesen összekaphatnak.

### A Hierarchikus Modell
Létrehozunk egy csúcs ragadozót: A **Supervisor Agent**-et (A Főnököt).
1. Ő kapja meg elsőnek az emberi kérést.
2. Ő egyedülálló, iszonyatosan okos (O1 vagy GPT-4) model. Nem hajt végre semmit, csak delegál.
3. Kiosztja a feladatokat az alsóbb szintű "Munkás" AI-oknak (Akik butább, gyors LLaMA modellek, specializálódva).
4. A munkások visszaadják felé az eredményt.
5. A Főnök értékeli: *"Ez a Jogi dokumentum hibás, csináld újra Jogi AI!"*.
Csak ha a Főnök (Supervisor) elfogadta az alsóbb szintek munkáját, akkor lép tovább a Gép a Cég nevében.`
        }
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
