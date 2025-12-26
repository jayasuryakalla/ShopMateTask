require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const geminiApikey = process.env.GOOGLE_API_KEY;

if (!geminiApikey) {
  console.error(
    "CRITICAL ERROR: GOOGLE_API_KEY is not verified in environment variables."
  );
}

const genAI = new GoogleGenAI({ apiKey: geminiApikey });

async function generateProductDescription(productname, Category) {
  const prompt =
    "you are an expert e commerce copywriter.\n" +
    "write a catchy SEO-friendly product description (max 100 words ) for :" +
    productname +
    ".\n" +
    "Under the category: " +
    Category +
    ".\n" +
    "Tone: professional yet exciting.";
  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return result.text;
  } catch (error) {
    console.error("Error generating product description:", error);
    return "Description unavailable";
  }
}
module.exports = {
  generateProductDescription,
};
