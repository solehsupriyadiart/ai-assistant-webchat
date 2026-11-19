
"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Halo! Saya AI Assistant. Ada yang bisa saya bantu?"
    }
  ]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!text.trim() || busy) return;

    const next = [
      ...messages,
      { role: "user", content: text }
    ];

    setMessages(next);
    setText("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Terjadi kesalahan");

      setMessages(current => [
        ...current,
        { role: "assistant", content: data.reply }
      ]);
    } catch (error) {
      setMessages(current => [
        ...current,
        { role: "assistant", content: "Maaf, koneksi AI sedang bermasalah." }
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={{
      maxWidth: 500,
      margin: "30px auto",
      padding: 20,
      fontFamily: "Arial",
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 2px 15px #ddd"
    }}>
      <h2>✦ AI Assistant</h2>
      <p>● Online · Siap membantu</p>

      <div style={{
        minHeight: 350,
        padding: 12,
        background: "#f5f6fa",
        borderRadius: 12
      }}>
        {messages.map((m, i) => (
          <p key={i} style={{
            padding: 12,
            borderRadius: 12,
            background: m.role === "user" ? "#dceaff" : "#fff",
            textAlign: m.role === "user" ? "right" : "left"
          }}>
            {m.content}
          </p>
        ))}
        {busy && <p>AI sedang mengetik...</p>}
      </div>

      <form onSubmit={sendMessage} style={{
        display: "flex",
        gap: 8,
        marginTop: 15
      }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Tulis pesan..."
          style={{ flex: 1, padding: 12, borderRadius: 10 }}
        />
        <button disabled={busy} type="submit">Kirim</button>
      </form>
    </main>
  );
}
