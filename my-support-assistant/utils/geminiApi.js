import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBo-F1Ho0V2oOgbE42MDly46SrfXTqcxQo");

export const getUserInfo = async () => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Provide a sample user info in JSON format with fields: name, email, and accountType";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching user info from Gemini API:", error);
    throw error;
  }
};

export const getAccountDetails = async () => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Provide sample account details in JSON format with fields: balance, lastTransaction, and accountStatus";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching account details from Gemini API:", error);
    throw error;
  }
};
