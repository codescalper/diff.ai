import {Configuration,OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config); 

export const runtime = 'edge';
 
export async function POST(req: Request) {
  try{
  const { topic1, topic2, numberOfDiff, acronymn } = await req.json();
 
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: "user",
        content:`Generate me a tabular format in markdown format differentiating points which contain ${numberOfDiff } 
         the topic of the differentiating are ${topic1 } and ${topic2} the table should contain 3 columns, 
         column1 -  'parameter'  containing subpoint of differentiating point , column2 ${topic1} and column2 ${topic2}
          ${acronymn }  ? "Generate a ${numberOfDiff } letter acronym  , the acronym  should be made considering 1st letter of all the parameter the acronym  should be after the tabular format differentiating point and it should start by 'Here is the acronym  for the parameters' also explain what every letter of parameter stand for   " : ""` ,
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
 