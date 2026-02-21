export interface GlossaryTerm {
    term: string;
    definition: string;
}

export const glossaryData: GlossaryTerm[] = [
    { term: "Mesterséges Intelligencia", definition: "Gépi rendszerek azon képessége, hogy emberi intelligenciát igénylő feladatokat (pl. tanulás, problémamegoldás) hajtsanak végre." },
    { term: "AI", definition: "A Mesterséges Intelligencia (Artificial Intelligence) angol nyelvű rövidítése." },
    { term: "Generatív AI", definition: "Olyan MI-rendszerek, amelyek képesek új, eredeti tartalmak (szöveg, kép, zene) létrehozására ahelyett, hogy csak adatokat osztályoznának." },
    { term: "LLM", definition: "Nagy Nyelvi Modell (Large Language Model), hatalmas mennyiségű szöveges adaton betanított neurális háló, ami képes megérteni és generálni az emberi beszédet." },
    { term: "Token", definition: "A szövegfeldolgozás alapegysége egy nyelvi modellnél. Lehet egy szó, szótag vagy akár egyetlen betű. 1 token átlagosan ~4 angol karaktert jelent." },
    { term: "Prompt", definition: "Az a bemeneti utasítás vagy kérdés, amit az AI-nak adunk, hogy az alapján generáljon nekünk valamilyen választ vagy tartalmat." },
    { term: "Prompt Engineering", definition: "A promptok (utasítások) céltudatos szerkesztésének és optimalizálásának művészete, amellyel a lehető legjobb eredményt hozzuk ki egy AI modellből." },
    { term: "Hallucináció", definition: "Amikor egy AI magabiztosan mond valami olyat, ami tényszerűen nem igaz, mert az adatai között logikátlan összefüggést talált." },
    { term: "RAG", definition: "Retrieval-Augmented Generation. Egy technika, amikor a modell keres egy külső adatbázisban releváns infókat, mielőtt válaszol, hogy csökkentse a hallucinációt." },
    { term: "Agentic AI", definition: "Olyan autonóm AI rendszer (ágens), amely nemcsak válaszol a kérdésekre, hanem képes célokat kitűzni, tervezni és külső rendszerek/eszközök (pl. webkereső) használatával feladatokat megoldani." },
    { term: "AGI", definition: "Artificial General Intelligence (Általános Mesterséges Intelligencia). Olyan jövőbeli AI, amely egy ember szintjén képes bármilyen intellektuális feladat megoldására." },
    { term: "Multimodális", definition: "Olyan modellek, amelyek nem csak egyetlen adattípussal (pl. szöveggel) tudnak dolgozni, hanem egyszerre megértik és képesek kombinálni a képeket, hangokat és videókat is." },
    { term: "Kontextus Ablak", definition: "Azon tokenek (szavak) maximális száma, amennyit a modell az aktuális beszélgetésből vagy inputból képes \"fejben tartani\" egyszerre." },
    { term: "Zero-Shot", definition: "Amikor a modellnek úgy adunk ki egy feladatot, hogy nem mutatunk neki előzetesen semmilyen megoldási példát." },
    { term: "Few-Shot", definition: "Amikor a promptba beillesztünk 1-2 kész példát, ezzel \"megtanítva\" a modellnek, hogy milyen formátumban vagy stílusban kérjük a választ." },
    { term: "Temperature", definition: "A nyelvmodellek \"kreativitás-szabályzója\". Az alacsony érték (pl. 0.0) tényszerű, prediktábilis választ eredményez, a magas (pl. 0.8+) váratlanabb, játékosabb szöveget." },
    { term: "Fine-tuning", definition: "Egy meglévő, alap-betanított modell továbbképzése egy specifikus adatbázison vagy feladatra, hogy abban a témában még jobb legyen." },
    { term: "Top-P", definition: "Alternatív \"kreativitás-szabályzó\" a Temperature mellett; a lehetséges következő szavak szűkítésével játszik a valószínűségek alapján." },
    { term: "NLP", definition: "Természetes Nyelvfeldolgozás (Natural Language Processing). Az AI-nak az ága, ami lehetővé teszi a számítógépek számára az emberi nyelv megértését és generálását." },
    { term: "AI Alignment", definition: "Arra irányuló kutatás, hogy az egyre okosabb AI rendszerek az emberi értékekkel, célokkal és morállal egyezően, biztonságosan cselekedjenek." }
];
