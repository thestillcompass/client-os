"use client";

import { useState } from "react";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const encoded = encodeURIComponent(
      message || "Hi, I want to fix my client acquisition system"
    );

    window.open(
      `https://wa.me/917760875502?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Button */}
      <button
  onClick={() => setOpen(true)}
  className="fixed bottom-6 right-6 z-40 hidden rounded-full border border-white/10 bg-white px-4 py-2.5 text-sm font-medium text-black shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-200 hover:scale-[1.02] hover:bg-white/90 lg:inline-flex"
>
  WhatsApp
</button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[320px] rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white">
              Start a conversation
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50"
            >
              ✕
            </button>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="mt-3 w-full rounded-lg bg-black/40 p-3 text-sm text-white outline-none"
            rows={3}
          />

          <button
            onClick={handleSend}
            className="mt-3 w-full rounded-full bg-white py-2 text-sm font-medium text-black"
          >
            Continue on WhatsApp
          </button>
        </div>
      )}
    </>
  );
}