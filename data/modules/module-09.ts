import { Module } from "@/types";

export const module09: Module = {
    id: 9,
    title: "Optimalizálás és Finomhangolás",
    icon: "Gauge", // Lucide icon
    description: "A modellek sebességének növelése, memóriaigényük csökkentése (Fine-Tuning) és az egyedi adatok betanítása.",
    dayInSchedule: "Nap 7",

    painPoints: [
        "Az általános (Generic) modellek nem elég pontosak a saját szakterületi feladataidra",
        "Túl magas inference (kimeneti) költségek a szolgáltatók felé",
        "Lassú válaszidők, a felhasználó sokat vár az üzenetekre",
        "Memória és számítási (Compute) erőforrás hiányok"
    ],

    curriculum: [
        { id: "9-1", text: "Supervised Fine-Tuning (SFT) Labeled adatokkal", subcategory: "Finomhangolási Technikák" },
        { id: "9-2", text: "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)", subcategory: "Finomhangolási Technikák" },
        { id: "9-3", text: "Instruction tuning és RLHF alapok", subcategory: "Finomhangolási Technikák" },
        { id: "9-4", text: "Learning rate scheduling, batch size tuning", subcategory: "Hyperparameter optimalizálás" },
        { id: "9-5", text: "Epoch selection és optimizer választás", subcategory: "Hyperparameter optimalizálás" },
        { id: "9-6", text: "Quantization (Kvantálás) technikái: 16-bit, 8-bit, 4-bit", subcategory: "Modell tömörítés" },
        { id: "9-7", text: "Pruning és Distillation: felesleg eltávolítása", subcategory: "Modell tömörítés" },
        { id: "9-8", text: "Inference optimalizálás: Caching és Batch processing", subcategory: "Kimenet gyorsítás" },
        { id: "9-9", text: "Speculative decoding alapok", subcategory: "Kimenet gyorsítás" }
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
