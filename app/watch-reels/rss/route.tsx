import { NextResponse } from "next/server"

export async function GET() {
  // Sample lesson/story data - in a real app, this would come from a database
  const lessons = [
    {
      title: "The Tortoise and the Hare - Hindi & English Story for English Learning",
      description:
        "Learn English through the classic fable of The Tortoise and the Hare. This bilingual story helps improve vocabulary, pronunciation, and comprehension with Hindi explanations.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Mon, 20 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#tortoise-and-hare",
      duration: "8:45",
      category: "Hindi English Stories",
      difficulty: "Beginner",
    },
    {
      title: "The Lion and the Mouse - Bilingual Story for English Improvement",
      description:
        "Discover the moral tale of The Lion and the Mouse in both Hindi and English. Perfect for building English vocabulary and understanding story structure.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Fri, 17 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#lion-and-mouse",
      duration: "7:30",
      category: "Hindi English Stories",
      difficulty: "Beginner",
    },
    {
      title: "The Clever Fox - Hindi English Story with Grammar Tips",
      description:
        "Learn English grammar and vocabulary through the story of a clever fox. Includes Hindi translations and explanations for better understanding.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Wed, 15 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#clever-fox",
      duration: "9:15",
      category: "Hindi English Stories",
      difficulty: "Intermediate",
    },
    {
      title: "The Golden Goose - English Learning Through Stories",
      description:
        "Improve your English with this engaging story of The Golden Goose. Features Hindi explanations, vocabulary building, and pronunciation practice.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Mon, 13 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#golden-goose",
      duration: "10:20",
      category: "Hindi English Stories",
      difficulty: "Intermediate",
    },
    {
      title: "The Ant and the Grasshopper - Bilingual Learning Story",
      description:
        "Learn valuable life lessons and English skills through The Ant and the Grasshopper story. Includes Hindi context and English vocabulary expansion.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Fri, 10 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#ant-and-grasshopper",
      duration: "6:45",
      category: "Hindi English Stories",
      difficulty: "Beginner",
    },
    {
      title: "The Wise Owl - Advanced English Story with Hindi Support",
      description:
        "Challenge yourself with this advanced English story about a wise owl. Perfect for intermediate to advanced learners with Hindi explanations available.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Wed, 08 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#wise-owl",
      duration: "11:30",
      category: "Hindi English Stories",
      difficulty: "Advanced",
    },
    {
      title: "The Magic Lamp - Interactive English Story Learning",
      description:
        "Dive into the magical world of The Magic Lamp while improving your English skills. Features interactive elements and Hindi translations for clarity.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Mon, 05 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#magic-lamp",
      duration: "12:15",
      category: "Hindi English Stories",
      difficulty: "Intermediate",
    },
    {
      title: "The Brave Little Sparrow - English Pronunciation Practice",
      description:
        "Improve your English pronunciation and speaking skills with this heartwarming story of a brave little sparrow. Includes Hindi context for better understanding.",
      link: "https://www.youtube.com/@ktilplearning/videos",
      pubDate: "Fri, 03 Jan 2024 10:00:00 GMT",
      guid: "https://www.youtube.com/@ktilplearning/videos#brave-sparrow",
      duration: "8:00",
      category: "Hindi English Stories",
      difficulty: "Beginner",
    },
  ]

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>KTILP - Hindi &amp; English Stories to Improve English</title>
    <description>Learn English through engaging Hindi &amp; English bilingual stories. Perfect for Indian learners who want to improve their English vocabulary, pronunciation, and comprehension skills. Each story comes with Hindi explanations and English learning tips from Nishant Shukla.</description>
    <link>https://www.youtube.com/@ktilplearning/videos</link>
    <language>en-in</language>
    <managingEditor>nishant@ktilp.com (Nishant Shukla)</managingEditor>
    <webMaster>nishant@ktilp.com (Nishant Shukla)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://ktilp.com/watch-reels/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://ktilp.com/images/ktilp-logo.jpg</url>
      <title>KTILP - Hindi &amp; English Stories to Improve English</title>
      <link>https://www.youtube.com/@ktilplearning/videos</link>
      <width>144</width>
      <height>144</height>
    </image>
    <category>Education</category>
    <category>English Learning</category>
    <category>Hindi English Stories</category>
    <category>Language Education</category>
    <category>Bilingual Learning</category>
    
    <itunes:subtitle>Learn English through Hindi &amp; English bilingual stories</itunes:subtitle>
    <itunes:author>Nishant Shukla - KTILP</itunes:author>
    <itunes:summary>Improve your English skills with engaging bilingual stories that combine Hindi explanations with English learning. Perfect for Indian students and professionals.</itunes:summary>
    <itunes:owner>
      <itunes:name>Nishant Shukla</itunes:name>
      <itunes:email>nishant@ktilp.com</itunes:email>
    </itunes:owner>
    <itunes:image href="https://ktilp.com/images/ktilp-logo.jpg"/>
    <itunes:category text="Education">
      <itunes:category text="Language Learning"/>
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    
    ${lessons
      .map(
        (lesson) => `
    <item>
      <title><![CDATA[${lesson.title}]]></title>
      <description><![CDATA[${lesson.description}]]></description>
      <link>${lesson.link}</link>
      <guid isPermaLink="true">${lesson.guid}</guid>
      <pubDate>${lesson.pubDate}</pubDate>
      <author>nishant@ktilp.com (Nishant Shukla)</author>
      <category>Hindi English Stories</category>
      <category>English Learning</category>
      <category>${lesson.difficulty} Level</category>
      
      <itunes:author>Nishant Shukla</itunes:author>
      <itunes:subtitle><![CDATA[${lesson.description.substring(0, 100)}...]]></itunes:subtitle>
      <itunes:summary><![CDATA[${lesson.description}]]></itunes:summary>
      <itunes:duration>${lesson.duration}</itunes:duration>
      <itunes:keywords>English learning, Hindi English stories, bilingual stories, ${lesson.difficulty.toLowerCase()}, vocabulary, pronunciation</itunes:keywords>
      <itunes:explicit>false</itunes:explicit>
    </item>`,
      )
      .join("")}
    
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
