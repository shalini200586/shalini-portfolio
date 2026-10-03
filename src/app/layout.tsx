import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { ScrollAnimations } from "@/components/layout/ScrollAnimations";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shalini Jha — Software Engineer · Bain & Company",
  description:
    "Portfolio of Shalini Jha — SDE Intern at Bain & Company. Full-stack, backend, automation, and AI engineering.",
  keywords: [
    "Shalini Jha",
    "Bain and Company",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Developer",
    "AI Engineer",
  ],
  openGraph: {
    title: "Shalini Jha — SDE · AI/ML · Bain & Company",
    description: "Intelligent software systems — engineering, automation, and AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-bg text-text antialiased">
        <div className="grain" aria-hidden />
        <CustomCursor />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
