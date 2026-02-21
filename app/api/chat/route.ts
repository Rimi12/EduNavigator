import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { prompt, temperature = 0.5, topP = 1.0 } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        // Call the language model
        const result = streamText({
            model: openai('gpt-4o-mini'),
            prompt: prompt,
            temperature: parseFloat(temperature),
            topP: parseFloat(topP),
            system: "Te egy segítőkész AI asszisztens vagy, akivel magyar diákok tanulják a prompt engineering és az AI alapjait. Válaszolj lényegretörően, és ha megkérnek valamire, hajtsd végre kreatívan, de mindenképp magyarul (kivéve, ha mást kérnek).",
        });

        // Respond with the stream
        return result.toTextStreamResponse();
    } catch (error) {
        console.error("AI SDK Error:", error);
        return NextResponse.json({ error: 'Valami hiba történt a generálás során. Kérlek ellenőrizd az API kulcsod az .env.local fájlban.' }, { status: 500 });
    }
}
