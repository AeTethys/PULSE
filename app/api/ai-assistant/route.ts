import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { prompt, gradeLevel } = await req.json()

    // System message to ensure grade-appropriate, learning-focused responses
    const systemMessage = `You are an AI Learning Assistant for grade ${gradeLevel} students. Your role is to:
    1. Never provide direct answers
    2. Guide students through problem-solving with questions
    3. Provide relevant examples and hints
    4. Use grade-appropriate language and concepts
    5. Encourage critical thinking and understanding
    6. Focus on learning process over solutions
    7. Maintain ethical educational standards`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      system: systemMessage,
    })

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
