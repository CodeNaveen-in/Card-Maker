import { GoogleGenAI, Type } from "@google/genai";
import type { CardData, CardContent } from '../types';

const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY environment variable is not set");
}
const ai = new GoogleGenAI({ apiKey });

const BORDER_STYLES = ["floral", "geometric", "vines", "stars", "confetti", "hearts"];
const ACCESSORIES = ["balloons", "cake", "champagne", "confetti", "hearts", "ribbon", "stars"];

const generateGreetingAndImagePrompt = async (cardData: CardData): Promise<{ greeting: string; imagePrompt: string }> => {
  const { name, occasion, description } = cardData;
  const prompt = `
    You are an expert greeting card writer. Generate a very short, warm greeting for a card and a descriptive prompt for an image generator.
    - Recipient(s): ${name}
    - Occasion: ${occasion}
    - Details: ${description}
    The greeting should be brief, like "Happy Birthday, ${name}!" or "Congratulations!".
    The image prompt should describe an artistic, visually appealing scene for the card cover, relevant to the occasion.
    Return ONLY a JSON object with keys "greeting" and "imagePrompt".
  `;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          greeting: { type: Type.STRING },
          imagePrompt: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text.trim());
};

const generatePoemAndAccessories = async (cardData: CardData): Promise<{ poem: string; accessories: string[] }> => {
  const { name, occasion, description, senderName } = cardData;
  const prompt = `
    You are a gifted poet who writes personalized, heartfelt poems for greeting cards.
    - Recipient(s): ${name}
    - Occasion: ${occasion}
    - Personal Details: ${description}
    - Sender(s): ${senderName}
    Write a 4-6 line poem that is personal and reflects the details provided.
    Also, suggest 2-3 keywords for simple, decorative graphics for the page from this list: ${ACCESSORIES.join(', ')}.
    Return ONLY a JSON object with keys "poem" and "accessories". The accessories value must be an array of strings.
  `;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          poem: { type: Type.STRING },
          accessories: { type: Type.ARRAY, items: { type: Type.STRING } }
        }
      }
    }
  });
  return JSON.parse(response.text.trim());
};

const generateBorderStyle = async (cardData: CardData): Promise<{ style: string }> => {
    const { occasion, description } = cardData;
    const prompt = `
      Based on the occasion "${occasion}" and details "${description}", choose the most fitting border style from the following list: ${BORDER_STYLES.join(', ')}.
      Return ONLY a JSON object with a single key "style".
    `;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                style: { type: Type.STRING }
            }
        }
      }
    });
    const result = JSON.parse(response.text.trim());
    return BORDER_STYLES.includes(result.style) ? result : { style: 'confetti' };
};


export const generateCardContent = async (cardData: CardData): Promise<CardContent> => {
  try {
    const [page1Data, page2Data, borderData] = await Promise.all([
      generateGreetingAndImagePrompt(cardData),
      generatePoemAndAccessories(cardData),
      generateBorderStyle(cardData)
    ]);

    const imageResponse = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: page1Data.imagePrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '3:4',
        },
    });

    const base64ImageBytes = imageResponse.generatedImages[0].image.imageBytes;
    const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

    return {
      page1: {
        greeting: page1Data.greeting,
        imageUrl: imageUrl,
      },
      page2: {
        poem: page2Data.poem,
        accessories: page2Data.accessories,
      },
      borderStyle: borderData.style,
    };

  } catch (error) {
    console.error("Error generating card content:", error);
    throw new Error("Failed to generate the AI card. Please check your connection and try again.");
  }
};