import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for a personal portfolio client-side demo, we use the env var directly as per instructions.
// Lazy initialization to prevent crash on load if key is missing
let ai: GoogleGenAI | null = null;
const getAiClient = () => {
    if (!ai) {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.error("Gemini API Key is missing!");
            throw new Error("Gemini API Key is not configured.");
        }
        ai = new GoogleGenAI({ apiKey });
    }
    return ai;
};

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], newMessage: string) => {
  try {
    const client = getAiClient();
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};