"use client";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 p-3 backdrop-blur-md sm:hidden">
      <a
        href="https://calendly.com/thestillcompass1"
        target="_blank"
        rel="noreferrer"
        className="block w-full rounded-full bg-white py-3 text-center text-sm font-medium text-black"
      >
        Book Strategy Call
      </a>
    </div>
  );
}