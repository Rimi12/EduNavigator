import { openai } from '@ai-sdk/openai';
import { generateText, generateObject } from 'ai';
import { z } from 'zod';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { prompt, goal, constraints, temperature = 0.5 } = await req.json();

        if (!prompt || !goal) {
            return NextResponse.json({ error: 'A prompt és a cél megadása kötelező.' }, { status: 400 });
        }

        // 1. Run the user's prompt to generate the text
        const { text: generatedText } = await generateText({
            model: openai('gpt-4o-mini'),
            prompt: prompt,
            temperature: temperature,
        });

        // 2. Evaluate the generated text with the Grader prompt
        const graderPrompt = `
You are an expert AI evaluator.
Your task is to evaluate a generated text based on a specific goal and set of constraints.

GOAL:
${goal}

CONSTRAINTS:
${constraints || 'None'}

GENERATED TEXT TO EVALUATE:
${generatedText}

Evaluate if the GENERATED TEXT successfully achieves the GOAL while strictly following the CONSTRAINTS.
Provide a boolean "passed" (true if it completely succeeds, false if it fails or violates constraints).
Provide a score from 0 to 100 based on quality.
Provide a short, constructive educational feedback in Hungarian language.
`;

        const { object: evaluation } = await generateObject({
            model: openai('gpt-4o-mini'),
            schema: z.object({
                passed: z.boolean().describe('True if the generated text achieves the goal and meets all constraints.'),
                score: z.number().min(0).max(100).describe('Score from 0 to 100 based on how well it did.'),
                feedback: z.string().describe('Short constructive feedback in Hungarian.'),
            }),
            prompt: graderPrompt,
        });

        // Return both the evaluation and the original generated text so the user can see what the AI produced
        return NextResponse.json({
            passed: evaluation.passed,
            score: evaluation.score,
            feedback: evaluation.feedback,
            generatedText: generatedText
        });

    } catch (error: any) {
        console.error('Értékelési hiba:', error);
        return NextResponse.json({ error: error.message || 'Hiba történt az értékelés során' }, { status: 500 });
    }
}
