import { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function PrimaryButton({
  href,
  children,
  className = "",
  target,
  rel,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-white/90 ${className}`}
    >
      {children}
    </a>
  );
}