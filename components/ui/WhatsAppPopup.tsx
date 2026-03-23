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
        className="fixed bottom-5 right-5 z-50 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-2xl"
      >
        Chat on WhatsApp
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