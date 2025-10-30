import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, Eye, ArrowRight, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BlogPage() {
  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "English Speaking", count: 5, active: false },
    { name: "Mindfulness", count: 4, active: false },
    { name: "Success Stories", count: 3, active: false },
  ]

  const featuredPost = {
    id: 1,
    title: "How to Master English Speaking in Hindi: The KTILP Method",
    excerpt:
      "Discover the proven methodology that helped 40,000+ students achieve 97% success rate in English speaking. Learn how to speak fluently with confidence.",
    image: "/english-learning.jpg",
    author: "Nishant Shukla",
    date: "January 20, 2024",
    readTime: "12 min read",
    views: "5.2K",
    likes: "412",
    category: "English Speaking",
    tags: ["English", "Speaking", "KTILP Method"],
  }

  const blogPosts = [
    {
      id: 2,
      title: "English Speaking in Hindi: Breaking Language Barriers",
      excerpt:
        "Learn English without leaving your comfort zone. Our Hindi-English approach makes learning natural and effective for Indian learners.",
      image: "/hindi-english.jpg",
      author: "Nishant Shukla",
      date: "January 18, 2024",
      readTime: "8 min read",
      views: "3.1K",
      likes: "245",
      category: "English Speaking",
      tags: ["Hindi", "English", "Learning"],
    },
    {
      id: 3,
      title: "Communication Skills: The Key to Career Success",
      excerpt:
        "Master business communication and storytelling skills that will transform your professional life and open new opportunities.",
      image: "/interconnected-communication.png",
      author: "Nishant Shukla",
      date: "January 15, 2024",
      readTime: "10 min read",
      views: "4.8K",
      likes: "356",
      category: "English Speaking",
      tags: ["Communication", "Career", "Skills"],
    },
    {
      id: 4,
      title: "Mindfulness for Inner Peace: Transform Your Mental Health",
      excerpt:
        "Become your own therapist. Learn mindfulness techniques to resolve mental blocks, improve self-awareness, and achieve inner peace.",
      image: "/mindful-moment.png",
      author: "Nishant Shukla",
      date: "January 12, 2024",
      readTime: "9 min read",
      views: "2.9K",
      likes: "198",
      category: "Mindfulness",
      tags: ["Mindfulness", "Mental Health", "Wellness"],
    },
    {
      id: 5,
      title: "From Beginner to Fluent: Real Student Success Stories",
      excerpt:
        "Read inspiring stories of students who transformed their English skills and careers through KTILP's proven methodology.",
      image: "/success-stories.jpg",
      author: "Nishant Shukla",
      date: "January 10, 2024",
      readTime: "7 min read",
      views: "3.5K",
      likes: "267",
      category: "Success Stories",
      tags: ["Success", "Stories", "Transformation"],
    },
    {
      id: 6,
      title: "Business Storytelling: Engage Your Audience with Confidence",
      excerpt:
        "Learn the art of storytelling to captivate audiences, close deals, and build meaningful professional relationships.",
      image: "/storytelling-scene.png",
      author: "Nishant Shukla",
      date: "January 8, 2024",
      readTime: "11 min read",
      views: "4.2K",
      likes: "321",
      category: "English Speaking",
      tags: ["Storytelling", "Business", "Engagement"],
    },
    {
      id: 7,
      title: "Self-Awareness Through Mindfulness: A Practical Guide",
      excerpt:
        "Discover how mindfulness practices can help you understand yourself better and make positive changes in your life.",
      image: "/self-awareness.jpg",
      author: "Nishant Shukla",
      date: "January 5, 2024",
      readTime: "8 min read",
      views: "2.1K",
      likes: "156",
      category: "Mindfulness",
      tags: ["Self-Awareness", "Mindfulness", "Personal Growth"],
    },
  ]

  const popularTags = [
    "English Speaking",
    "Hindi-English",
    "Communication",
    "Mindfulness",
    "Career Growth",
    "Storytelling",
    "Mental Health",
    "Success Stories",
    "Self-Awareness",
    "Professional Development",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50"></div>
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="bg-blue-100 text-blue-500 border-blue-200">
              KTILP Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Master English &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                {" "}
                Transform Your Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on English speaking in Hindi, communication skills, mindfulness, and personal
              transformation. Learn from 14 years of proven methodology.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-400 text-gray-600 hover:bg-gray-200 bg-transparent"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-gray-600 text-lg">Our most impactful content</p>
          </div>

          <Card className="bg-white border-gray-200 backdrop-blur max-w-6xl mx-auto overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Featured</Badge>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-500 w-fit">
                    {featuredPost.category}
                  </Badge>

                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{featuredPost.title}</h3>

                  <p className="text-gray-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-400 text-gray-500">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-300">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {featuredPost.views}
                      </span>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600 text-lg">Fresh insights on English and mindfulness</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="bg-white border-gray-200 backdrop-blur group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-200 text-gray-500 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-300">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest English learning tips and mindfulness insights delivered to your inbox.
            </p>
            <div className="space-y-4">
              <Input
                placeholder="Enter your email"
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
