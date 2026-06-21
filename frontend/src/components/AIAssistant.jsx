import { useState } from "react";
import { askAssistant } from "../services/aiService";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Assalamualaikum! Ask me about products, sizing, or orders." },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const userMsg = message.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setMessage("");
    setLoading(true);
    try {
      const { data } = await askAssistant(userMsg);
      setMessages((prev) => [...prev, { from: "ai", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "AI service is offline. Try again later or contact support." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="ai-fab" onClick={() => setOpen(!open)}>🤖 AI</button>
      {open && (
        <aside className="ai-assistant">
          <div className="ai-header">
            <h3>AI Assistant</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.from}`}>{msg.text}</div>
            ))}
            {loading && <div className="ai-msg ai">Thinking...</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about products, orders..."
            />
            <button type="submit" disabled={loading}>Ask</button>
          </form>
        </aside>
      )}
    </>
  );
}
