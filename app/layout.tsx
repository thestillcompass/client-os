import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLIENT|OS — Fix Your Client Acquisition System",
  description:
    "CLIENT|OS builds disciplined client acquisition systems that help high-ticket coaches capture, follow up, qualify, and convert more leads into booked calls.",
  openGraph: {
    title: "CLIENT|OS — Fix Your Client Acquisition System",
    description:
      "Fix your client acquisition system. Capture, follow up, and convert more leads into booked calls.",
    url: "https://yourdomain.com",
    siteName: "CLIENT|OS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}