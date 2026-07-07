import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini review generation
  app.post("/api/generate-review", async (req, res) => {
    try {
      const { rating, category, positiveTags, negativeTags } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY or API_KEY environment variable is required");
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const model = 'gemini-3.5-flash';
      const prompt = `
        Write a short, helpful customer review (maximum 3-4 sentences) for a ${category} experience.
        
        Rating: ${rating}/5 stars.
        What went well: ${positiveTags?.join(', ') || 'N/A'}.
        What could be improved: ${negativeTags?.join(', ') || 'N/A'}.
        
        The tone should be constructive and authentic. Do not include quotes around the text.
      `;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      res.json({ text: response.text || "" });
    } catch (error) {
      console.error("Error in /api/generate-review:", error);
      res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
