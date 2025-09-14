import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KTILP - Learn English Through Movies & Stories | Nishant Shukla English Course",
  description:
    "Learn English the fun way through Bollywood & Hollywood movie scenes and Hindi-English bilingual stories. Join KTILP (Kritika's The Interactive Learning Program) with Nishant Shukla for practical spoken English with Hindi-English translation, cultural context, and life skills. Master English through iconic dialogues and engaging stories.",
  keywords:
    "Learn English through movies, English speaking course India, Spoken English via Hindi, KTILP English course, English Stories Learning, Learn English with Bollywood, Nishant Shukla English trainer, Movie dialogues English learning, Hindi to English translation, Interactive English learning, Hindi English stories",
  authors: [{ name: "Nishant Shukla" }],
  creator: "KTILP - Kritika's The Interactive Learning Program",
  publisher: "KTILP",
  openGraph: {
    title: "KTILP - Learn English Through Movies & Stories",
    description:
      "Transform your English speaking skills with iconic Bollywood & Hollywood movie scenes and engaging Hindi-English stories. Join thousands of students learning English the fun way with Nishant Shukla!",
    url: "https://ktilp.com",
    siteName: "KTILP",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTILP - Learn English Through Movies & Stories",
    description:
      "Learn English the fun way through movie scenes and bilingual stories with Hindi-English translation and cultural context.",
    creator: "@ktilplearning",
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
      "application/rss+xml": [
        { url: "/rss", title: "KTILP Blog RSS Feed" },
        { url: "/watch-reels/rss", title: "KTILP Hindi & English Stories RSS Feed" },
      ],
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="KTILP Blog RSS Feed" href="/rss" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="KTILP Hindi & English Stories RSS Feed"
          href="/watch-reels/rss"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
