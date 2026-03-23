export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            CLIENT|OS
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
            Disciplined client acquisition systems for high-ticket coaches who
            want faster response, better follow-up, and more booked calls.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/60 md:items-end">
          <a
            href="https://calendly.com/thestillcompass1"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Book a Strategy Call
          </a>

          <a
            href="https://wa.me/917760875502?text=Hi%2C%20I%20want%20to%20fix%20my%20client%20acquisition%20system"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            WhatsApp
          </a>

          <p className="text-white/35">
            © 2026 CLIENT|OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}