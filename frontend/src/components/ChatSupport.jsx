import { useState } from "react";

const faqs = [
  { q: "What is your return policy?", a: "30-day easy returns on unused items." },
  { q: "Is leather genuine?", a: "Yes, all products use 100% genuine leather." },
  { q: "How long is delivery?", a: "3-7 business days across India." },
];

export default function ChatSupport() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      const faq = faqs.find((f) => userMsg.toLowerCase().includes(f.q.split(" ")[0].toLowerCase()));
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: faq?.a || "Our team will reply shortly. Email: support@barakah.com" },
      ]);
    }, 600);
  };

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(!open)}>💬</button>
      {open && (
        <div className="chat-widget">
          <div className="chat-header">
            <strong>Support Chat</strong>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <form className="chat-input" onSubmit={sendMessage}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
