import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { topic1, topic2, numberOfDiff, acronym } = await req.json();

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "user",
          content: `Generate me a tabular format in markdown format This was about the content format.
        Now the content part: it should have ${numberOfDiff} differentiating points between the topics ${topic1} and ${topic2}. The table should have 3 columns: column1 - 'parameter' containing the subpoint of the differentiating point, column2 - ${topic1}, and column3 - ${topic2}.
        ${
          acronym
            ? "Generate a ${numberOfDiff}-letter acronym based on the first letter of each parameter. The acronym should be after the tabular format and it should start with 'Here is the acronym for the parameters: (acronym word)' the '' the acronym word should be bold . Also explain what each letter of the acronym stands for from the parameter."
            : ""
        } `,
        },
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    // You can also return a response with an error message if you want
    return new Response("An error occurred", { status: 500 });
  }
}
