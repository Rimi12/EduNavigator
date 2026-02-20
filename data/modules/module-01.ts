import { Module } from "@/types";

export const module01: Module = {
    id: 1,
    title: "Generatív AI Alapok",
    icon: "Sparkles", // Lucide icon
    description: "Ismerd meg a generatív mesterséges intelligencia működését és alapjait.",
    dayInSchedule: "Nap 1",

    painPoints: [
        "Kreatív tartalom előállításának lassú folyamata",
        "Repetitív szöveggenerálási feladatok automatizálásának hiánya",
        "Képek, videók, szövegek manuális létrehozásának magas költsége",
        "Korlátozott kreatív kapacitás a csapatokban"
    ],

    curriculum: [
        { id: "1-1", text: "Mi a generatív AI és hogyan működik", subcategory: "Alapfogalmak" },
        { id: "1-2", text: "Nagy nyelvi modellek (LLM-ek) architektúrája", subcategory: "Alapfogalmak" },
        { id: "1-3", text: "Transformer modellek megértése", subcategory: "Alapfogalmak" },
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
    }
};
