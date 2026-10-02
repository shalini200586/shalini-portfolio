import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shalini — Full-Stack Developer",
  description:
    "Playful cartoon-style portfolio of Shalini, a full-stack developer building modern web experiences.",
  openGraph: {
    title: "Shalini — Full-Stack Developer",
    description: "Portfolio showcasing projects, skills, and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
