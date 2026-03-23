import { ReactNode } from "react";

type SecondaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function SecondaryButton({
  href,
  children,
  className = "",
  target,
  rel,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </a>
  );
}