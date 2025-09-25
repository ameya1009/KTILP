import { GeistSans, GeistMono } from "geist/font"
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title:
    "Master English & Communication Skills in Hindi – Speak with Confidence! Unlock Inner Peace – Become Your Own Therapist & Enhance Mindfulness",
  description:
    "Unlock your potential by mastering English communication and finding inner peace. Learn to speak with confidence, become your own therapist, and enhance mindfulness with our expert-led courses. Achieve success with 97% proven results and 14 years of experience.",
  keywords:
    "English speaking course, communication skills, business storytelling, Hindi English, mindfulness, self-awareness, mental blocks, inner peace, therapist, confidence, success, online courses",
  authors: [{ name: "Successful People" }],
  creator: "Successful People",
  publisher: "Successful People",
  openGraph: {
    title: "Master English & Communication Skills & Unlock Inner Peace",
    description:
      "Speak with confidence, resolve mental blocks, and enhance mindfulness. Join 40000+ students and achieve 97% success with our comprehensive courses.",
    url: "https://successfulpeople.com", // Placeholder URL, can be updated later
    siteName: "Successful People",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master English & Communication Skills & Unlock Inner Peace",
    description:
      "Learn to speak with confidence, become your own therapist, and enhance mindfulness for a successful life.",
    creator: "@successfulpeople", // Placeholder Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/rss", title: "Successful People Blog RSS Feed" }],
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
