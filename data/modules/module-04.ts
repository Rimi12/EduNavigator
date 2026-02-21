import { Module } from "@/types";

export const module04: Module = {
    id: 4,
    title: "Prompt Engineering",
    icon: "MessageSquare",
    description: "Hatékony promptok írása AI modellekhez",
    tags: ['beginner', 'content', 'coding', 'general'],
    dayInSchedule: "Nap 4",

    painPoints: [
        "Nem kapom meg a várt választ az AI-tól",
        "Túl általános vagy irreleváns válaszok",
        "Nem tudom, hogyan strukturáljam a promptot"
    ],

    hasPromptTester: true,
    curriculum: [
        {
            id: "4-1",
            text: "Prompt anatómiája: Context, Role, Explicit Task, Format, Output",
            subcategory: "Alapfogalmak",
            videoUrl: "https://www.youtube.com/embed/jC4v5AS4ART",
            content: `## A Tökéletes Prompt Receptje (A C.R.E.F.O framework)

Leginkább egy "jól képzett, de memóriahiányos asszisztensként" kell tekintened az AI-ra. Szinte bármit meg tud oldani neked, ha pontosan kommunikálod le az elvárásaidat.

A leghatékonyabb üzenetek 5 részből tehetők össze, melyek az alábbiak:

### C - Context (Kontextus)
Add meg a háttérinformációt, miért is történik mindez.
*"Egy kezdő futónak próbálok edzéstervet készíteni, most jelentkezett élete első félmaratonjára."*

### R - Role (Szerep)
Határozd meg a szakmai tudásszintjét és a személyiségét az AI-nak.
*"Kérlek, vedd fel egy tapasztalt, de humoros és nagyon türelmes személyi edző szerepét."*

### E - Explicit Task (Cselekvés)
Minél egyértelműbben mondd meg, hogy mit kell fizikailag megvalósítania. Ne csak "Írj erről!".
*"Készíts egy 12 hetes futó edzéstervet az adatokból, ami heti maximum 3 edzést vár el."*

### F - Format (Formátum)
Kényszerítsd ki a vizuális elrendezést, így 1 mp alatt kimásolható az erdemény.
*"Az edzéstervet Markdown táblázat formájában add vissza, az oszlopok pedig a következők legyenek: Hét | Nap | Edzés Értéke | Tip."*

### O - Output Limitations (Korlátok)
A tiltások sokkal erősebbek az AI-nál, mint az engedélykérések. 
*"Szakzsargont használni tilos. A magyarázatod ne lépje túl a táblázat utáni 2 bekezdést."*`
        },
        {
            id: "4-2",
            text: "Zero-shot és Few-shot prompting technikák",
            subcategory: "Haladó technikák",
            content: `## A Példák Ereje: Zero-Shot vs Few-Shot

Minél specifikusabb feladatot adunk az LLM-nek, annál nagyobb esélye van annak, hogy megértés nélkül, rossz sablonnal válaszol. Ilyenkor érdemes a **Példákat** segítségül hívni.

### Röviden a "Shot"-okról:
- **Zero-Shot Prompting (0 példa):** Ez az egyszerű utasítás, amit eddig is használtál. Megkérded a kérdést, egyetlen példát sem teszel mellé, és reméled a legjobbakat. (Pl: *"Elemezd ezt a szöveget pozitív, negatív vagy semleges kontextus alapján: 'Sohasem láttam még ilyen rossz minőségű filmet.' "*).
- **One-Shot Prompting:** Egy példát mutatsz már a kérdésben! *(Lásd lent)*
- **Few-Shot Prompting (Néhány példa):** Több példát (2-5) sorolsz fel neki a saját helyes bemenet / kimenet kombinációiból, mintha egy mintapélda feladatsort oldanál meg vele.

### Few-Shot Példa (Ég és föld a különbség!)
> Elemezd a hírverést egy cikk alapján. A pozitív hangvételt jelöld 'P'-vel, a negatívat 'N'-el.
> 
> **Példák:**
> Szöveg: "Bár a bejelentés nagyszerű, a részvények zuhantak ma."
> Eredmény: N
> 
> Szöveg: "Az új vezérigazgató tehetsége vitathatatlanul meglátszik a cég bevételén."
> Eredmény: P
> 
> **Most rajtad a sor:**
> Szöveg: "Sohasem láttam még ilyen rossz minőségű szolgáltatást."
> Eredmény: 

Be sem kell fejezned, az LLM egyből tudja a betanított mintából, hogy neki csak annyit kell kiírnia: **N**. Formázás és rizsa nélkül!`
        },
        {
            id: "4-3",
            text: "Chain-of-Thought (CoT): Lépésről-lépésre gondolkodás",
            subcategory: "Haladó technikák",
            content: `## Ahogy a Matek Tanár is Kérte: "Vezesd Le!"

A **Chain-of-Thought (CoT)**, magyarul "Gondolati Láncolat" módszertan az egyik leghatalmasabb ugrást tette az AI logika terén 2022-ben. Rájöttek, hogy ha az LLM azonnal megpróbálja kitermelni a végső eredményt (Zero-shot), matekból és logikából szinte mindig elbukik.

Ugyanakkor, ha mindent magában, "hangosan" sorról sorra kiszámol előtte, a predikciója javul.

### Hogyan érjük ezt el Promptként?
Csupán be kell illesztened azt a varázsmondatot a promptod végére, hogy **"Gondold végig az egészet lépésről lépésre (Think it through step-by-step)."**

Ezt kiegészítheted egy saját CoT példával is a prompt elején:

> **Példa Bemenet:** Annának 5 almája van. Ad kettőt Marcinak, apukájától pedig kap még 3-at, de az egyik rohadt volt így az a kukában landolt. Mennyi alma maradt Annánál?
> **Gondolati Lánc (CoT):** Annának volt 5 (5). Elvettünk belőle 2-t, maradt 3 (5-2=3). Kapott még 3-at, így 6 lett (3+3=6). Ketté vágott (kidobott) egyet, ami mínusz 1, ekkor 5 maradt az előző 6-ból (6-1=5).
> **Kimenet:** 5 almája maradt Annának.

A modern AI Modelleknél (mint az OpenAI O1 vagy O3-mini) a Chain-of-Thought beégetetten, a rendszer "láthatatlan" rétegében, magától lepereg, így nekünk már nem is kell beleírnunk a promptba a varázsmondatot.`
        },
        { id: "4-4", text: "Tree-of-Thought: Többszörös gondolati ágak felfedezése", subcategory: "Haladó technikák" },
        { id: "4-5", text: "Prompt chaining: Komplex feladatok szekvenciális feldolgozása", subcategory: "Haladó technikák" },
        { id: "4-6", text: "Meta-prompting: AI segít prompt optimalizálásban", subcategory: "Haladó technikák" },
        { id: "4-7", text: "Input sanitizálás (prompt injection védelem)", subcategory: "Biztonság" },
        { id: "4-8", text: "Rate limiting és hozzáférés kontroll", subcategory: "Biztonság" },
        { id: "4-9", text: "Output validálás és audit", subcategory: "Biztonság" }
    ],

    whenToChoose: [
        "Amikor pontosabb AI válaszokat szeretnél",
        "Amikor konzisztens outputot kell generálni",
        "Amikor komplex feladatokat kell lebontani"
    ],

    projects: [
        {
            title: "Prompt Könyvtár (Prompt Library)",
            description: "Építs újrafelhasználható prompt sablonokat különböző use-case-ekhez.",
            prompt: "Készíts egy táblázatot a leghasznosabb marketing promptokhoz..."
        },
        {
            title: "Prompt Optimizer Agent",
            description: "AI-alapú prompt finomító eszköz. Javasoljon jobb megfogalmazást.",
            prompt: "Légy egy Prompt Engineer. Javítsd fel a következő promptot..."
        },
        {
            title: "Domain-Specifikus Prompt Stratégia",
            description: "Készíts iparág-specifikus prompt keretrendszert."
        }
    ],

    resources: [
        {
            title: "OpenAI Prompt Engineering Guide",
            url: "https://platform.openai.com/docs/guides/prompt-engineering"
        }
    ],

    microLearning: "A promptolás nem varázslat: Szerep + Feladat + Kontextus. Ha ezt a hármat megadod, az eredmény 80%-kal jobb lesz.",

    deepDive: `## A C.R.E.F.O. Keretrendszer

A tökéletes AI parancsok összetevői:

### **C - Context (Kontextus)**
*"Egy kkv vagyunk, amely vegán cipőket árul európában."*
(Minden háttérinfó, amit az AI-nak tudnia kell mielőtt elkezdi a munkát).

### **R - Role (Szerep)**
*"Viselkedj egy sokat látott, pragmatikus marketing menedzserként."*
(A szerep nagyban megváltoztatja, honnan meríti a szókincsét és a struktúráját).

### **E - Explicit Task (Egyértelmű Feladat)**
*"Írj egy 300 szavas promóciós emailt."*
(Nem azt mondjuk: *"írj egy emailt"*, hanem nagyon konkrétan határozzuk meg a célt).

### **F - Format (Formátum)**
*"A kimenetet Markdown táblázatban kérem, 3 oszloppal."*
(Az AI sokféleképpen adhat vissza adatot. Kényszerítsük a számunkra ideális formátumra).

### **O - Output limitations (Kimeneti korlátok)**
*"Ne használj szlengeket és ne használj emoji-t."*
(Ahány tilalom, annyi felesleges javítási kört spóroltál meg).`,

    sandboxLinks: [
        {
            label: "Próbáld ki: Anthropic Console",
            url: "https://console.anthropic.com",
            type: "tool"
        }
    ],

    interactiveElement: {
        question: "A C.R.E.F.O. framework alapján melyik NEM része egy kiváló promptnak?",
        options: [
            "Kontextus (Context)",
            "Dátum és időpont",
            "Formátum (Format)",
            "Szerep (Role)"
        ],
        correct: 1,
        explanation: "A dátum és időpont általában nem szükséges ahhoz, hogy jó promptot írj. A Szerep, Kontextus, és Formátum viszont kulcsfontosságú."
    },

    challenge: {
        title: "Kihívás: Precíziós Formázás",
        goal: "Olyan promptot kérünk, amiben utasítod az AI-t, hogy írjon neked egy véletlenszerű heti étrendet egy vegán embernek. A kimenet KIZÁRÓLAG egy Markdown táblázat legyen, és a táblázatnak pontosan 3 oszlopa legyen.",
        constraints: "- Tartalmaznia kell a 'vegán' és az 'étrend' kulcsszavakat a promptodban. \n- Meg kell követelned a végső formátumot (Markdown Table). \n- Meg kell adnod a korlátot (A táblázaton kívül semmi más magyarázat nem lehet).",
        successKudos: "Kitűnő! Úgy irányítod az AI-t, mint egy profit."
    }
};
