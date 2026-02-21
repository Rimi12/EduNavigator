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
        { id: "1-4", text: "Tokenizáció és embedding koncepciók", subcategory: "Alapfogalmak" },
        { id: "1-5", text: "Generatív képalkotó modellek (DALL-E, Stable Diffusion, Midjourney)", subcategory: "Alapfogalmak" },
        { id: "1-6", text: "Szöveg, kép, audió és videó generálás alapjai", subcategory: "Alapfogalmak" },
        { id: "1-7", text: "Python alapok AI-hoz", subcategory: "Technikai Készségek" },
        { id: "1-8", text: "OpenAI API, Hugging Face Transformers használata", subcategory: "Technikai Készségek" },
        { id: "1-9", text: "Prompt struktúrálás és optimalizálás", subcategory: "Technikai Készségek" },
        { id: "1-10", text: "Model paraméterek megértése (temperature, top_p, max_tokens)", subcategory: "Technikai Készségek" }
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
