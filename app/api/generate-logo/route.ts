import { generateText } from "ai"
import { replicate } from "@ai-sdk/replicate"

export async function POST(req: Request) {
  try {
    const {
      prompt = "A modern, minimalist logo for PULSE, an educational analytics platform. Clean lines, professional design with a hint of technology and innovation.",
    } = await req.json()

    const { text } = await generateText({
      model: replicate.image("recraft-ai/recraft-v3-svg"),
      prompt,
    })

    return Response.json({
      success: true,
      svg: text.replace('width="1024"', "").replace('height="1024"'),
    })
  } catch (error) {
    console.error(error)
    return Response.json(
      {
        success: false,
        error: "Failed to generate logo",
      },
      {
        status: 500,
      },
    )
  }
}
