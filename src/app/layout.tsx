import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KTILP | Premium Courses & Masterclasses",
  description: "Master Your Craft. Elevate Your Career. Premium masterclasses on software, soft skills, and productivity.",
  openGraph: {
    title: "KTILP | Premium Courses & Masterclasses",
    description: "Master Your Craft. Elevate Your Career. Premium masterclasses on software, soft skills, and productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-neon-cyan/30 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
