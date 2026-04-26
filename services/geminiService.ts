import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
// The API key is injected via process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateReviewText = async (
  rating: number,
  category: 'Shopping' | 'Delivery',
  positiveTags: string[],
  negativeTags: string[]
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const prompt = `
      Write a short, helpful customer review (maximum 3-4 sentences) for a ${category} experience.
      
      Rating: ${rating}/5 stars.
      What went well: ${positiveTags.join(', ') || 'N/A'}.
      What could be improved: ${negativeTags.join(', ') || 'N/A'}.
      
      The tone should be constructive and authentic. Do not include quotes around the text.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "";
  } catch (error) {
    console.error("Error generating review:", error);
    throw error;
  }
};

export const suggestTags = async (reviewText: string): Promise<{ positive: string[], negative: string[] }> => {
    // This could be used to reverse-engineer tags from text, but we'll stick to text gen for now to match the UI flow.
    return { positive: [], negative: [] };
}