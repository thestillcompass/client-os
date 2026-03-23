"use client";

import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Founder", href: "#founder" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white"
        >
          CLIENT|OS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton
            href="https://calendly.com/thestillcompass1"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3"
          >
            Book Call
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <PrimaryButton
              href="https://calendly.com/thestillcompass1"
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full"
            >
              Book Call
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}