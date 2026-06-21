import axios from "axios";

const aiApi = axios.create({
  baseURL: import.meta.env.VITE_AI_URL || "/api/ai",
  headers: {
    "Content-Type": "application/json",
  },
});

export const askAssistant = (message) =>
  aiApi.post("/chat", { message });

export default aiApi;
