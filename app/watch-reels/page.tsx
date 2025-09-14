import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Search, Filter, Youtube, Heart, Share2, Eye, Clock, Rss } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function WatchReelsPage() {
  const reelCategories = [
    { name: "All", count: 50, active: true },
    { name: "Hindi English Stories", count: 15, active: false },
    { name: "Grammar", count: 25, active: false },
    { name: "Business English", count: 20, active: false },
    { name: "Pronunciation", count: 15, active: false },
    { name: "Conversation", count: 10, active: false },
  ]

  const featuredReels = [
    {
      id: 1,
      title: "The Tortoise and the Hare - Hindi & English Story",
      description: "Learn English through this classic fable with Hindi explanations and vocabulary building",
      thumbnail: "/placeholder-9c6f1.png",
      duration: "8:45",
      views: "325K",
      likes: "28.2K",
      category: "Hindi English Stories",
      difficulty: "Beginner",
      tags: ["Stories", "Hindi English", "Vocabulary"],
    },
    {
      id: 2,
      title: "Business English: Meetings",
      description: "Learn how to conduct effective meetings in English",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "6:30",
      views: "198K",
      likes: "16.5K",
      category: "Business English",
      difficulty: "Beginner",
      tags: ["Business", "Meetings", "English"],
    },
    {
      id: 3,
      title: "The Lion and the Mouse - Bilingual Learning",
      description: "Discover moral values while improving English with Hindi support",
      thumbnail: "/lion-and-mouse.png",
      duration: "7:30",
      views: "256K",
      likes: "22.1K",
      category: "Hindi English Stories",
      difficulty: "Beginner",
      tags: ["Stories", "Moral Tales", "Bilingual"],
    },
    {
      id: 4,
      title: "English Conversation: Small Talk",
      description: "Learn how to make small talk in English",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "4:15",
      views: "187K",
      likes: "15.8K",
      category: "Conversation",
      difficulty: "Intermediate",
      tags: ["Conversation", "Small Talk", "English"],
    },
    {
      id: 5,
      title: "The Clever Fox - Grammar Through Stories",
      description: "Learn English grammar concepts through engaging storytelling",
      thumbnail: "/clever-fox-illustration.png",
      duration: "9:15",
      views: "212K",
      likes: "17.9K",
      category: "Hindi English Stories",
      difficulty: "Intermediate",
      tags: ["Stories", "Grammar", "Hindi English"],
    },
    {
      id: 6,
      title: "English Grammar: Prepositions",
      description: "Learn how to use prepositions correctly in English",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "9:30",
      views: "176K",
      likes: "14.2K",
      category: "Grammar",
      difficulty: "Advanced",
      tags: ["Grammar", "Prepositions", "English"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50"></div>
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
              🎬 Watch & Learn
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
              Hindi & English Stories
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                {" "}
                Video Lessons
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our collection of bilingual stories and professional English lessons. Learn through engaging
              Hindi & English stories, grammar tutorials, and practical business communication skills.
            </p>

            {/* RSS Feed Link */}
            <div className="flex justify-center mb-6">
              <Link href="/watch-reels/rss" target="_blank">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Rss className="mr-2 h-4 w-4" />
                  Subscribe to RSS Feed
                </Button>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search lessons, stories, topics..."
                className="pl-12 pr-4 py-3 bg-slate-100/50 border-slate-300 text-slate-900 placeholder:text-slate-400 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-slate-100/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {reelCategories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-slate-300 text-slate-600 hover:bg-slate-200 bg-transparent text-slate-900"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
            <Button
              variant="outline"
              className="border-slate-300 text-slate-600 hover:bg-slate-200 bg-transparent text-slate-900"
            >
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">📚 Hindi & English Stories</h2>
            <p className="text-slate-600">Learn English through engaging bilingual stories</p>
            <Link
              href="/watch-reels/rss"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mt-2"
            >
              <Rss className="mr-1 h-4 w-4" />
              <span className="text-sm">Subscribe to Stories RSS Feed</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {featuredReels
              .filter((reel) => reel.category === "Hindi English Stories")
              .slice(0, 3)
              .map((reel) => (
                <Card
                  key={reel.id}
                  className="bg-white/80 border-orange-200 backdrop-blur group hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={reel.thumbnail || "/placeholder.svg"}
                        alt={reel.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-orange-600 text-white text-xs">Story</Badge>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 rounded px-2 py-1">
                        <span className="text-white text-xs flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {reel.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{reel.title}</h3>
                      <p className="text-slate-600 text-xs line-clamp-2">{reel.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {reel.views}
                        </span>
                        <Badge variant="outline" className="border-green-500 text-green-600 text-xs">
                          {reel.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Reels Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">All Learning Content</h2>
            <p className="text-slate-600 text-lg">Stories, grammar lessons, and professional English skills</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredReels.map((reel) => (
              <Card
                key={reel.id}
                className="bg-slate-100/50 border-slate-200 backdrop-blur group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={reel.thumbnail || "/placeholder.svg"}
                      alt={reel.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          reel.category === "Hindi English Stories"
                            ? "bg-orange-600"
                            : reel.category === "Business English"
                              ? "bg-blue-600"
                              : reel.category === "Grammar"
                                ? "bg-green-600"
                                : "bg-purple-600"
                        }`}
                      >
                        {reel.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 rounded px-2 py-1">
                      <span className="text-white text-sm flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {reel.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="border-green-500 text-green-400 bg-black/50">
                        {reel.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{reel.title}</h3>
                      <p className="text-slate-600 text-sm line-clamp-2">{reel.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {reel.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-200 text-slate-600 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {reel.views}
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {reel.likes}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-900">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Play className="mr-2 h-4 w-4" />
                      Watch & Learn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Youtube className="mr-2 h-5 w-5" />
              View All Content on YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Channel Integration */}
      <section className="py-20 bg-slate-100/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Subscribe to Our YouTube Channel</h2>
            <p className="text-xl text-slate-600">
              Get notified when we upload new Hindi & English stories and professional English lessons
            </p>

            <div className="bg-slate-100/50 backdrop-blur rounded-2xl p-8 border border-slate-200">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">10K+</div>
                  <div className="text-slate-600">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-slate-600">Learning Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">Weekly</div>
                  <div className="text-slate-600">New Content</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    <Youtube className="mr-2 h-6 w-6" />
                    Subscribe to KTILP Learning
                  </Button>
                </Link>
                <Link href="/watch-reels/rss" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Rss className="mr-2 h-6 w-6" />
                    RSS Feed
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
