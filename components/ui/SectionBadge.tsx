import { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionBadge({
  children,
  className = "",
}: SectionBadgeProps) {
  return (
    <p className={`text-sm uppercase tracking-[0.2em] text-white/40 ${className}`}>
      {children}
    </p>
  );
}