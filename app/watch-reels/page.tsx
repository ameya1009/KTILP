import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Play, Eye, ThumbsUp, Youtube, Users } from "lucide-react"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function WatchReelsPage() {
  const categories = [
    { name: "All Videos", count: 150, active: true },
    { name: "English Speaking", count: 45, active: false },
    { name: "Communication Tips", count: 38, active: false },
    { name: "Mindfulness", count: 32, active: false },
    { name: "Success Stories", count: 25, active: false },
    { name: "Quick Tips", count: 10, active: false },
  ]

  const videos = [
    {
      id: 1,
      title: "How to Speak English Fluently in Hindi - Complete Guide",
      channel: "KTILP Learning",
      views: "125K",
      likes: "8.2K",
      duration: "12:45",
      thumbnail: "/english-speaking-tutorial.jpg",
      category: "English Speaking",
      date: "2 weeks ago",
      featured: true,
    },
    {
      id: 2,
      title: "Business English: Professional Communication Skills",
      channel: "KTILP Learning",
      views: "89K",
      likes: "5.1K",
      duration: "15:30",
      thumbnail: "/business-english-communication.jpg",
      category: "Communication Tips",
      date: "3 weeks ago",
      featured: true,
    },
    {
      id: 3,
      title: "Mindfulness Meditation for Stress Relief - 10 Minutes",
      channel: "KTILP Learning",
      views: "156K",
      likes: "12.3K",
      duration: "10:00",
      thumbnail: "/mindfulness-meditation.jpg",
      category: "Mindfulness",
      date: "1 week ago",
      featured: true,
    },
    {
      id: 4,
      title: "From Zero to Hero: Student Success Story",
      channel: "KTILP Learning",
      views: "67K",
      likes: "4.8K",
      duration: "8:20",
      thumbnail: "/student-success-story.jpg",
      category: "Success Stories",
      date: "4 days ago",
      featured: false,
    },
    {
      id: 5,
      title: "5 Common English Speaking Mistakes - Quick Fix",
      channel: "KTILP Learning",
      views: "203K",
      likes: "15.7K",
      duration: "6:15",
      thumbnail: "/english-mistakes-correction.jpg",
      category: "Quick Tips",
      date: "5 days ago",
      featured: false,
    },
    {
      id: 6,
      title: "Confidence Building Techniques for Public Speaking",
      channel: "KTILP Learning",
      views: "98K",
      likes: "7.2K",
      duration: "14:00",
      thumbnail: "/public-speaking-confidence.jpg",
      category: "Communication Tips",
      date: "1 week ago",
      featured: false,
    },
    {
      id: 7,
      title: "Self-Awareness Through Mindfulness - Deep Dive",
      channel: "KTILP Learning",
      views: "45K",
      likes: "3.1K",
      duration: "18:45",
      thumbnail: "/self-awareness-mindfulness.jpg",
      category: "Mindfulness",
      date: "2 weeks ago",
      featured: false,
    },
    {
      id: 8,
      title: "Business Storytelling: Engage Your Audience",
      channel: "KTILP Learning",
      views: "112K",
      likes: "8.9K",
      duration: "16:30",
      thumbnail: "/business-storytelling.jpg",
      category: "Communication Tips",
      date: "3 weeks ago",
      featured: false,
    },
    {
      id: 9,
      title: "Pronunciation Guide: Master English Sounds",
      channel: "KTILP Learning",
      views: "178K",
      likes: "13.4K",
      duration: "11:20",
      thumbnail: "/english-pronunciation-guide.jpg",
      category: "English Speaking",
      date: "1 month ago",
      featured: false,
    },
  ]

  const channelStats = {
    subscribers: "250K+",
    videos: "150+",
    views: "5M+",
    engagement: "97%",
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-red-50 to-slate-50">
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="bg-red-100 text-red-600 border-red-200">
              KTILP YouTube Channel
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Learn English &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                {" "}
                Transform Your Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch free video tutorials on English speaking, communication skills, mindfulness, and personal
              transformation. Subscribe to KTILP Learning for daily tips and insights.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-red-400" />
                <span>250K+ Subscribers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-red-500" />
                <span>150+ Videos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-red-600" />
                <span>5M+ Views</span>
              </div>
            </div>

            <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 font-bold">
                <Youtube className="mr-3 h-6 w-6" />
                Subscribe on YouTube
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Channel Info */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{channelStats.subscribers}</div>
              <div className="text-gray-600">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{channelStats.videos}</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{channelStats.views}</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{channelStats.engagement}</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gray-100 border-b border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search videos..."
                className="pl-12 pr-4 py-3 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-400 text-gray-600 hover:bg-gray-200 bg-white"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Videos</h2>
            <p className="text-gray-600 text-lg">Most popular and trending content</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {videos
              .filter((video) => video.featured)
              .map((video, index) => (
                <Link
                  key={video.id}
                  href={`https://www.youtube.com/@ktilplearning/featured`}
                  target="_blank"
                  className="group"
                >
                  <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full animate-fade-in">
                    <div className="relative overflow-hidden bg-gray-900 aspect-video">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <Badge className="absolute top-3 right-3 bg-red-600 text-white">{video.duration}</Badge>
                      {video.featured && (
                        <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">Featured</Badge>
                      )}
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{video.channel}</p>
                      </div>

                      <Badge variant="secondary" className="bg-gray-200 text-gray-700 w-fit">
                        {video.category}
                      </Badge>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {video.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {video.likes}
                          </span>
                        </div>
                        <span>{video.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* All Videos */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Videos</h2>
            <p className="text-gray-600 text-lg">Browse our complete video library</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <Link
                key={video.id}
                href={`https://www.youtube.com/@ktilplearning/featured`}
                target="_blank"
                className="group"
              >
                <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full animate-fade-in">
                  <div className="relative overflow-hidden bg-gray-900 aspect-video">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-2 right-2 bg-red-600 text-white text-xs">{video.duration}</Badge>
                  </div>

                  <CardContent className="p-4 space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-500">{video.channel}</p>

                    <Badge variant="secondary" className="bg-gray-200 text-gray-700 text-xs w-fit">
                      {video.category}
                    </Badge>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-0.5" />
                          {video.views}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-0.5" />
                          {video.likes}
                        </span>
                      </div>
                      <span>{video.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Youtube className="mr-2 h-5 w-5" />
                View All Videos on YouTube
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-red-50 to-slate-50 rounded-2xl p-8 border border-red-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss an Update</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our YouTube channel and turn on notifications to get the latest English learning tips and
              mindfulness insights.
            </p>
            <div className="space-y-4">
              <Input
                placeholder="Enter your email"
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
              <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
