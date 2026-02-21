import { Module } from "@/types";

export const module07: Module = {
    id: 7,
    title: "AI Deploy & Karbantartás",
    icon: "Rocket", // Lucide icon
    description: "AI rendszerek production (éles) környezetbe vitele és fenntartása.",
    tags: ['advanced', 'coding'],
    dayInSchedule: "Nap 6",

    painPoints: [
        "AI modellek production környezetbe vitele bonyolult",
        "Verziókezelés és rollback hiánya",
        "Infrastruktúra költségek kontrollálatlansága",
        "Deployment pipeline komplexitása"
    ],

    curriculum: [
        {
            id: "7-1",
            text: "Containerizálás alapjai (Docker, Kubernetes)",
            subcategory: "Deployment stratégiák",
            videoUrl: "https://www.youtube.com/embed/gAkwW2tuIqE",
            content: `## Ne Csak "Nálam Fusson"! Építs Dobozt!

Az informatika történetének legnagyobb idézete az, amikor a fejlesztő mondja: *"De hát az én gépemen tökéletesen futott!"*
Sajnos ez az AI projekteknél is így van. Lehet hogy neked fel van téve a lokális Pythonodban a Numpy meg a Pytorch a gépdre, de amint feltöltöd az éles Vállalati Szerverre a szűz Windowshoz, minden összeomlik, mert ott ezek nincsenek.

Itt jön a képbe a **Docker** és a Konténerizáció.

### Mi az a Docker?
Létrehozol egy "Receptkönyvet" (Dockerfile), ami megmondja a gépnek:
1. "Vedd elő a legújabb Python operációs rendszert."
2. "Töltsd le ezt a 3 kiegészítőt pont ebben a verzióban."
3. "Végül másold be az én kódomat a mappába és futtasd."

Ebből a fejlesztő egy "Virtuális Dobozt" (Docker Container) süt ki, amit áttolhat pendrive-on a világ túlsó felére. Aki elindítja a dobozt, annál hajszálpontosan ugyanaz a tiszta operációs rendszer és függőségi lánc fog elindulni, ahogy te otthagytad. Nincs több inkompatibilis hiba! Sose deployolunk éles környezetbe AI motort egy sima Script feltöltéssel. Konténerizálunk!`
        },
        {
            id: "7-2",
            text: "Felhő platformok megismerése: AWS, GCP, Azure",
            subcategory: "Deployment stratégiák",
            content: `## Hová Rakjuk a Kész Ügynökeinket?

Bár az OpenAI maga Cloud (Felhő) szolgáltatás (távoli API szerver van a motor mögött), de neked az a Python kód, ami az irányítást és Promtolást (Az Orchestrator) végzi, szintén kell hogy pörögjön 0-24 órában és ne a Te laptopod kelljen hozzá nyitva hagyni az "Íróasztal" mappában!

### Cloud Szolgáltatók ("The Big 3")
Ezek a cégek "számítógép parkokat" adnak bérbe óradíjas, másodpercdíjas elszámolással:

1. **AWS (Amazon Web Services):** A világ legnagyobb, legkomplexebb, és piacvezető felhőszolgáltatója. Itt fut szinte az internet. A *Bedrock* a saját AI-kompatibilis rendszerük.
2. **Azure (Microsoft):** A nagyvállalati biztonság etalonja, amely egyedi, privát OpenAI API felületekkel rendelkezik (tehát senkivel nem kell a nyilvános ChatGPT kvótádon osztozkodnod).
3. **GCP (Google Cloud Platform):** A fejlesztői-barátság netovábbja, zseniális beépített Machine Learning integrációkkal (*Vertex AI*) ahol a Gemini modelleket futtathatjuk.`
        },
        {
            id: "7-3",
            text: "API gateway és load balancing",
            subcategory: "Deployment stratégiák",
            content: `## Védelem és Terheléselosztás

Tegyük fel, hogy a kész Python AI-szolgáltatásodra belinkelésre kerül a reggeli TV műsorban. Másodpercenként 10 ezren fognak ráfrissíteni a doméne-edre. Mi fog történni az AI kérésekkel ha nem vagy felkészült?

Az egy szem futó "Szerver Gép" lángolva omlik össze, és nem kap vissza senki választ!

### Load Balancer (Terheléselosztó)
A terheléselosztó a "Közlekedési Rendőr" a kapuban.
* "Jöttök tízezren? Semmi gond! Egy pillanat és elosztom a forgalmat 5x2ezer blokkba."
* Ezután "leklónozza" a szerveredet (Scale Out), és ráereti az egyik adagot az első, a másikat a második azonos szerver gépre párhuzamosan.
* Mindenki boldog, a rendszer kiírja magát a hatalmas terhelést is.

### API Gateway (Az előkapu)
Mielőtt még az LLM kérdésed eljutna a motorhoz, áthalad a Gatewayen. Ő ellenőrzi, hogy jogosult vagy-e ekkora kérésre (Valid API Kulcs), vagy megnézi, nem kérted-e már pont ezt 2 másodperccel ezelőtt. Ha igen, beavatkozás nélkül kidobja neked a raktárból az adatot. Megspórolt egy drága token futtatást!`
        },
        { id: "7-4", text: "CI/CD pipelines kialakítása AI projektekhez", subcategory: "Deployment stratégiák" },
        { id: "7-5", text: "Infrastruktúra optimalizálás: GPU vs. CPU", subcategory: "Infrastruktúra" },
        { id: "7-6", text: "Model serving frameworks: TorchServe, TensorFlow Serving", subcategory: "Infrastruktúra" },
        { id: "7-7", text: "Model registry (MLflow, Weights & Biases)", subcategory: "Verziókezelés" },
        { id: "7-8", text: "A/B deployment és canary releases", subcategory: "Verziókezelés" },
        { id: "7-9", text: "Token usage monitoring és budgeting", subcategory: "Költségek" }
    ],

    whenToChoose: [
        "Prototípusból production-ready rendszert kell készítened",
        "Több környezetet menedzselsz (dev, staging, prod)",
        "Magas rendelkezésre állás kritikus a rendszeredben",
        "A token és infrastruktúra költségeket optimalizálnád"
    ],

    projects: [
        {
            title: "Production-Ready API Deployment",
            description: "FastAPI backend containerizálása Dockerrel és publikálás felhőben."
        },
        {
            title: "Model Serving Pipeline",
            description: "Model registry beállítás és A/B blue-green deployment kialakítása."
        }
    ],

    resources: [
        { title: "Docker Desktop", url: "https://www.docker.com/" },
        { title: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" }
    ],

    microLearning: "Egy működő 'Jupyter Notebook' prototípus és egy éles, méretezhető alkalmazás (Deployment) közti különbség olyan, mint egy jó recept alapján otthon főzni, vagy megnyitni egy ipari méretű éttermet.",

    deepDive: `## Deployálás és CI/CD Pipeline

Amikor a helyi gépeden fut az AI modelled, az még messze nem piacképes.

### CI/CD - Continuous Integration / Continuous Deployment
A CI/CD az automata "futószalag" a kódod írásától az éles indításig. 
1. **Pull Request:** Új kódot küldesz be.
2. **Automated Testing:** A szerver automatikusan leteszteli (Vajon elrontottad a meglévő promptokat?).
3. **Build Model:** Elkészíti a Docker "konténert".
4. **Deploy:** Ha minden zöld, kicseréli a régi verziót az újra (leállás nélkül).

> Ha nem használsz verziókezelést a modellhez és CI/CD pipeline-t a kódhoz, előbb utóbb fel fogod tenni a kérdést: "Hová tűnt a régi, jól működő modellünk?"

### A/B és Canary Releases
Nem akarod egyből 100% ügyfélre "ráönteni" a legújabb frissítésed. A **Canary** (kanári a bányában) technika azt jelenti, hogy csak a falhasználók 5%-a kapja meg az új modelt, tesztelve a vizet a tömeges kritikus leállás kockázata nélkül.`,

    sandboxLinks: [
        { label: "AWS Bedrock", url: "https://aws.amazon.com/bedrock/", type: "tool" },
    ],

    interactiveElement: {
        question: "A Canary (kanári) deployment stratégia során mi történik a frissítéssel?",
        options: [
            "Az összes felhasználó azonnal megkapja az új frissítést (Minden vagy semmi)",
            "A kódot csak madarakról szóló modellekhez használják",
            "Az új verzió csak a felhasználók egy pici töredékéhez jut el tesztelési célból, majd fokozatosan mindenkire rákerül",
            "Duplikálja a szervereket, és a felhasználók választhatnak a kettő közül"
        ],
        correct: 2,
        explanation: "A Canary Deploymentnél az éles változat fokozatosan kerül bevezetésre. Így ha az új AI változat például sok 'hallucinációt' gerjeszt, azonnal vissza tudod vonni anélkül, hogy az ügyfelek tömegét érintené."
    }
};
