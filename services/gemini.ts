import { GoogleGenAI } from "@google/genai";
import { API_MODEL } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateSecurityResponse = async (
  history: { role: string; text: string }[],
  currentMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct the prompt with history context
    // We are simulating a Red Team Operator AI
    const systemInstruction = `
      You are PENTEST-AI, an advanced offensive security operations assistant.
      Your persona is professional, slightly paranoid, and highly technical.
      You assist users with penetration testing concepts, code vulnerability analysis, and security best practices.
      
      Rules:
      1. Use technical terminology (CVE, RCE, XSS, Buffer Overflow, etc.) where appropriate.
      2. Keep responses concise and formatted like a terminal output or report.
      3. If asked to hack a real target, REFUSE politely but firmly, citing Rules of Engagement (ROE) and ethical hacking boundaries.
      4. Always emphasize "Authorization" and "Scope".
      5. Tone: Dark, serious, authoritative.
    `;

    const chat = ai.chats.create({
      model: API_MODEL,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: currentMessage });
    return result.text || "Connection terminated by remote host.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ERROR: Secure channel handshake failed. Check network configuration.";
  }
};