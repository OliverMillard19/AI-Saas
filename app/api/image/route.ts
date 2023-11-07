import {Configuration, OpenAIApi} from "openai";
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});


const openai = new OpenAIApi({configuration});

export async function POST(
    req: Request
){
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});

        }

        if (!configuration.apiKey){
            return new NextResponse("OpenAi API key not configured", {status: 500})
        }

        if (!messages) {
            return new NextResponse("Messages are required", {status: 400})

        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
        });

        return NextResponse.json(response.choices[0].messages);


    } catch (error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}