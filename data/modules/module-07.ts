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
        { id: "7-1", text: "Containerizálás alapjai (Docker, Kubernetes)", subcategory: "Deployment stratégiák" },
        { id: "7-2", text: "Felhő platformok megismerése: AWS, GCP, Azure", subcategory: "Deployment stratégiák" },
        { id: "7-3", text: "API gateway és load balancing", subcategory: "Deployment stratégiák" },
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
