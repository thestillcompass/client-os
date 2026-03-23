import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}