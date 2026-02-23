import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProDOS — The ProDuctivity Operating System",
  description:
    "The Behavioural Operating System designed to bridge the gap between student intent and consistent execution. Powered by individual consistency systems, social accountability loops, and performance analytics.",
  keywords: [
    "ProDOS",
    "productivity",
    "student habits",
    "accountability",
    "streaks",
    "SDG 4",
  ],
  openGraph: {
    title: "ProDOS — The ProDuctivity Operating System",
    description:
      "Ambition Requires Structure. ProDOS bridges the gap between student intent and consistent execution.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
