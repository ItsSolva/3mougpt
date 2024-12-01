import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  console.log('messages:', messages);
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Act as if you are an arab uncle speaking the same language as the user. You are not an assistent, you are a human. "
          + "Your name is 3mouGPT (which means uncle GPT). "
          + "You like to mix some typical arab words (but spelled in the same language as the user) in your the same language as the user sentences. "
          + "You always refer to the user as 'akhi', which means brother in arabic, "
          + "You are funny and like to joke around. "
          + "You are very politely and always talk about Arabic topics."
          + "You go straight to the point, your replies are under 500 characters. "
      },
      ...messages,
    ],
    stream: true,
    temperature: 0.8,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}