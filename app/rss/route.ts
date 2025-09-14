import { NextResponse } from "next/server"

export async function GET() {
  // Sample blog posts data - in a real app, this would come from a database
  const posts = [
    {
      title: "How Bollywood Movies Can Transform Your English Speaking Skills",
      description:
        "Discover the science behind movie-based language learning and why it's more effective than traditional methods.",
      link: "https://ktilp.com/blog/bollywood-movies-english-learning",
      pubDate: "Mon, 15 Jan 2024 10:00:00 GMT",
      guid: "https://ktilp.com/blog/bollywood-movies-english-learning",
    },
    {
      title: "10 Iconic Dialogues from 3 Idiots That Will Improve Your English",
      description:
        "Break down the most memorable quotes from this beloved film and learn practical English expressions.",
      link: "https://ktilp.com/blog/3-idiots-english-dialogues",
      pubDate: "Fri, 12 Jan 2024 10:00:00 GMT",
      guid: "https://ktilp.com/blog/3-idiots-english-dialogues",
    },
    {
      title: "Common English Grammar Mistakes Indians Make (And How to Fix Them)",
      description: "Identify and correct the most frequent grammar errors made by Indian English learners.",
      link: "https://ktilp.com/blog/common-grammar-mistakes-indians",
      pubDate: "Wed, 10 Jan 2024 10:00:00 GMT",
      guid: "https://ktilp.com/blog/common-grammar-mistakes-indians",
    },
    {
      title: "From Shy to Confident: Rahul's English Transformation Story",
      description: "Read how a software engineer from Bangalore overcame his fear of speaking English.",
      link: "https://ktilp.com/blog/rahul-transformation-story",
      pubDate: "Mon, 08 Jan 2024 10:00:00 GMT",
      guid: "https://ktilp.com/blog/rahul-transformation-story",
    },
    {
      title: "Hollywood vs Bollywood: Which is Better for Learning English?",
      description: "Compare the advantages of learning English through Hollywood and Bollywood movies.",
      link: "https://ktilp.com/blog/hollywood-vs-bollywood-english-learning",
      pubDate: "Fri, 05 Jan 2024 10:00:00 GMT",
      guid: "https://ktilp.com/blog/hollywood-vs-bollywood-english-learning",
    },
  ]

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KTILP - Learn English Through Movies</title>
    <description>Learn English the fun way through Bollywood and Hollywood movie scenes. Expert tips, success stories, and practical advice from Nishant Shukla.</description>
    <link>https://ktilp.com</link>
    <language>en-us</language>
    <managingEditor>nishant@ktilp.com (Nishant Shukla)</managingEditor>
    <webMaster>nishant@ktilp.com (Nishant Shukla)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://ktilp.com/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://ktilp.com/images/ktilp-logo.jpg</url>
      <title>KTILP - Learn English Through Movies</title>
      <link>https://ktilp.com</link>
      <width>144</width>
      <height>144</height>
    </image>
    <category>Education</category>
    <category>English Learning</category>
    <category>Movie-based Learning</category>
    <category>Language Education</category>
    
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.guid}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <author>nishant@ktilp.com (Nishant Shukla)</author>
      <category>English Learning</category>
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
