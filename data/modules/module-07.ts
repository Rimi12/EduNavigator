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
        {
            id: "7-4",
            text: "CI/CD pipelines kialakítása AI projektekhez",
            subcategory: "Deployment stratégiák",
            content: `## A Fejlesztés Futószalagja (CI/CD)

Kezdőként hajlamosak vagyunk megírni a kódot lokálisan a gépünkön, majd hétvégén átmásolni a szerverre pendrive-on, hogy "Fuss!" Ez profiknál tilos!

A **CI/CD** (Continuous Integration / Continuous Deployment) egy automatizált csővezeték (Pipeline).
1. Te megírod az AI programod Pythonban, és feltöltöd a módosítást a központi Github Repository-ba.
2. A GitHub a háttérben **AZONNAL, Automatikusan** elindít 150 darab biztonsági és szintaktikai tesztet. 
3. Ha minden Teszt zöld (Nem rontottál el semmit a kódban az AI hívások körül), a rendszer (CD - Deployment) **Önállóan áttölti az új verziót** a Fő Szerverre és le is cseréli élőben a régi weboldalt. 
Neked (A Fejlesztőnek) sosem kell belépned a végső felhő-gépbe!`
        },
        {
            id: "7-5",
            text: "Infrastruktúra optimalizálás: GPU vs. CPU",
            subcategory: "Infrastruktúra",
            content: `## Drága a Vas? (GPU vs CPU harca)

Ha saját gépeden (On-Premise) akarsz LLM-et futtatni (Pl LLaMA 3), a legnagyobb sokk a Hardver ára lesz.

### CPU (A Processzor)
Hagyományos feladatokra, mint egy Adatbázis futtatása, vagy Weboldal kiszolgálása, kiváló. Matematikailag okos, de egyszerre csak 8-16 "vonalon" tud számolni. AI modell futtatásakor egy szót 5 másodperc alatt dadogna ki a processzorból.

### GPU (A Videókártya - VRAM)
A videókártya a kulcs. Egy modern GPU (Mint egy Nvidia A100-as) több ezer apró "Kiszámoló Egységgel" rendelkezik szimultán! Az LLM neurális hálói nem logikai következtetésben jók elsősorban a vas ismétlésénél, hanem párhuzamos, masszív Mátrix Szorzásban. 
> Ha komoly saját modelld van, bődületes mennyiségű VRAM-ra (Videó Memóriára) lesz szükséged, aminek bérlése a Cloudban óránként simán 3-4 ezer forint!`
        },
        {
            id: "7-6",
            text: "Model serving frameworks: TorchServe, TensorFlow Serving",
            subcategory: "Infrastruktúra",
            content: `## Felszolgáljuk az AI-t a Vendégnek (Serving)

Ha sikerült venni egy izmos videókártyát és feltelepíteni rá a betanított "Saját LLM"-ed, az önmagában gépies és elérhetetlen. Hogy lesz ebből publikus webcím (API), ami válaszol is a többieknek?

Erre valók a **Model Serving Framework**-ök.
Olyan dedikált mikroszerver kódok (pl. *Nvidia Triton*, *TorchServe* ou *vLLM*), amiket a "Nyers Agy" köré csavarunk:
- Ezek az eszközök optimalizálják a GPU hűtését és memória használatát.
- Olyan Endpoint-ot (Végpontot pl: *https://sajatcegem.ai/generate*) adnak, amit a webfejlesztőd pontosan úgy tud bekötni az oldalba, mintha a fizetős OpenAI-t használnád.
- **Batching:** A Serving Framework zsenialitása, hogy ha egyszerre ketten kérdeznek egy rövidet, ő összegyúrja a kettőt, 1 feladattá rakja a GPU-nak, és a választ szétválasztva küldi vissza a klienseknek (Drasztikus gyorsulás).`
        },
        {
            id: "7-7",
            text: "Model registry (MLflow, Weights & Biases)",
            subcategory: "Verziókezelés",
            content: `## Az AI "Könyvtára" (Verziókezelés)

Ahogy egy dokumentumból van *doga_V1.doc*, meg *doga_V3_VEGLEGES.doc*, a gépi tanulásnál a Modellek is folymatosan frissítve vannak. De hol tárolod le az "okosodó agyakat"?

### Model Registry (Modell Regiszter)
Szoftverek mint az **MLFlow** pont ezt csinálják. 
Egy központi Raktár a csapatodban:
- Amikor Pisti végez a finomhangolással Hétfőn, elmenti "V7 Szűrt" néven. A gép naplózza, hogy Pisti mennyi CPU-t használt, hogy milyen adatot tolt bele, és hogy mennyi a modell százalékos tudása.
- Ha az "Éles (Production)" szerveren a modell kedden elkezd hülyeségket beszélni, a csapat egy gombnyomással azonnal le tudja húzni a Raktárból az előző, "V6 Stabil" modellt, és visszacseréli károkozás nélkül!`
        },
        {
            id: "7-8",
            text: "A/B deployment és canary releases",
            subcategory: "Verziókezelés",
            content: `## Tesztelés Élő Emberekkel (Óvatosan!)

Ha van egy vadiúj Generatív AI modellünk, ami szerintünk 20%-kal jobb (de a "Szerintünk" az veszélyes), nem állítjuk át azonnal az egész lakosságot a B verzíóra.

### A Kanári (Canary) Release:
A régi bányászok kanárit vittek le a bányába, ha a madár elpusztult (Mérgező gáz), ők még időben tudtak menekülni.
Informatikában a Kanári Deploy azt jelenti: Az új "Okos AI-Agyat" fellőjjük egy titkos szerverre. A Forgalom-irányító (Balacner) a felhasználók **95%-át** a régi, biztonságos Modellhez irányítja. A gyanútlan látogatók **5%-át** pedig ráköti az "Új" kanári verzióra.

Ha az 5%-os csoport heteken át nem panaszkodik, és pörög az oldal, csak akkor állítjuk át a 95%-ot is az újra. Ha az 5% pánikol mert a bot spamet küld, a 95%-os törzsközönségünk ezt nem érzékeli!`
        },
        {
            id: "7-9",
            text: "Token usage monitoring és budgeting",
            subcategory: "Költségek",
            content: `## Költségvetés: A Menedzser Rémálma

A Generatív AI hihetetlünk képes "szivárogtatni" a pénzt (Lásd: 5. modul / Token Limits). Egy egyszerű programhiba éjszaka százezreket generálhat ha végtelen hurokba (infinite loop) ragad a ChatGPT hívás.

### Így védekezz: Monitoring Limits
Az élesítés előtt a felhőben (pl. AWS Cost Explorer) egy kőkemény **Budget**-et (Keretet) kell beállítanod az API kulcsodra.
- "Soha ne engedd a rendszernek a napi \$50 -os határt átlépni." Ha átlépi, zárja el a csapot – az oldal "Out of Quota" üzenettel lefagy a júzernek, de cserébe nem mész csődbe.
- Be kell kötni egy **Értesítőt (Alerting)**: Ha a napi büdzsé 80%-ra ér a Token fogyás délben, a telefonodon push üzenet érkezik, hogy "Magas Terhelés az AI szerveren", tudd mikor kell közbelépni manuálisan.`
        }
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
