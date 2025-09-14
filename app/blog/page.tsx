import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, Eye, Heart, Share2, ArrowRight, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BlogPage() {
  const categories = [
    { name: "All Posts", count: 45, active: true },
    { name: "Career English", count: 20, active: false },
    { name: "Business Communication", count: 15, active: false },
    { name: "Leadership Skills", count: 10, active: false },
    { name: "Networking", count: 5, active: false },
  ]

  const featuredPost = {
    id: 1,
    title: "Mastering English for Career Advancement: A Comprehensive Guide",
    excerpt:
      "Unlock your career potential by mastering essential English skills. Learn how to communicate effectively in professional settings and advance your career.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Nishant Shukla",
    date: "January 15, 2024",
    readTime: "10 min read",
    views: "3.1K",
    likes: "212",
    category: "Career English",
    tags: ["Career", "Professional Skills", "Communication"],
  }

  const blogPosts = [
    {
      id: 2,
      title: "Effective Email Communication: A Guide for Professionals",
      excerpt:
        "Learn how to write professional emails that get results. Improve your email etiquette and communication skills for career success.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "January 12, 2024",
      readTime: "7 min read",
      views: "2.3K",
      likes: "125",
      category: "Business Communication",
      tags: ["Email", "Communication", "Professional"],
    },
    {
      id: 3,
      title: "Networking Strategies for English-Speaking Professionals",
      excerpt:
        "Discover effective networking strategies to expand your professional network and build valuable connections in English-speaking environments.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "January 10, 2024",
      readTime: "6 min read",
      views: "3.8K",
      likes: "256",
      category: "Networking",
      tags: ["Networking", "Connections", "Career Growth"],
    },
    {
      id: 4,
      title: "Leadership Communication: Inspiring Teams in English",
      excerpt:
        "Develop your leadership communication skills to inspire and motivate your team. Learn how to communicate effectively as a leader in English.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "January 8, 2024",
      readTime: "5 min read",
      views: "1.9K",
      likes: "92",
      category: "Leadership Skills",
      tags: ["Leadership", "Communication", "Teamwork"],
    },
    {
      id: 5,
      title: "Business English Vocabulary: Essential Terms for Success",
      excerpt:
        "Expand your business English vocabulary with essential terms and phrases. Improve your communication skills for success in the business world.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "January 5, 2024",
      readTime: "8 min read",
      views: "2.7K",
      likes: "178",
      category: "Career English",
      tags: ["Vocabulary", "Business English", "Terms"],
    },
    {
      id: 6,
      title: "Presenting with Confidence: Mastering English Presentation Skills",
      excerpt:
        "Learn how to deliver confident and engaging presentations in English. Improve your presentation skills for career advancement.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "January 3, 2024",
      readTime: "6 min read",
      views: "4.5K",
      likes: "321",
      category: "Business Communication",
      tags: ["Presentation Skills", "Confidence", "Public Speaking"],
    },
    {
      id: 7,
      title: "Negotiating in English: Strategies for Successful Outcomes",
      excerpt:
        "Master the art of negotiation in English with effective strategies and techniques. Achieve successful outcomes in business negotiations.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Nishant Shukla",
      date: "December 30, 2023",
      readTime: "10 min read",
      views: "2.1K",
      likes: "135",
      category: "Leadership Skills",
      tags: ["Negotiation", "Strategies", "Business"],
    },
  ]

  const popularTags = [
    "Career English",
    "Business Communication",
    "Leadership Skills",
    "Networking",
    "Presentation Skills",
    "Vocabulary",
    "Email Etiquette",
    "Professional Development",
    "Negotiation",
    "Public Speaking",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50"></div>
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-blue-100 text-blue-500 border-blue-200">
              💼 KTILP Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Elevate Your Career
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                {" "}
                Through English
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock expert insights, success stories, and practical tips to accelerate your English learning journey
              for professional growth. Get inspired by real transformations and proven strategies.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles, tips, success stories..."
                className="pl-12 pr-4 py-3 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-slate-900">
                Search
              </Button>
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
                    ? "bg-blue-600 hover:bg-blue-700 text-slate-900"
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
            <p className="text-gray-600 text-lg">Our most popular and impactful content</p>
          </div>

          <Card className="bg-white border-gray-200 backdrop-blur max-w-6xl mx-auto overflow-hidden">
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
                  <Badge className="bg-blue-600 text-slate-900">Featured</Badge>
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
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {featuredPost.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {featuredPost.likes}
                      </span>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-slate-900 w-fit">
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
            <p className="text-gray-600 text-lg">Fresh insights and tips for your English learning journey</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border-gray-200 backdrop-blur group hover:scale-105 transition-all duration-300"
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
                    <Badge
                      className={`${
                        post.category === "Career English"
                          ? "bg-red-600"
                          : post.category === "Business Communication"
                            ? "bg-blue-600"
                            : post.category === "Leadership Skills"
                              ? "bg-green-600"
                              : "bg-purple-600"
                      }`}
                    >
                      {post.category}
                    </Badge>
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
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </span>
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-gray-900 p-1">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-slate-900 bg-transparent"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-slate-900">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tags & Newsletter */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Popular Tags */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className="border-gray-400 text-gray-600 hover:bg-blue-600 hover:border-blue-600 hover:text-slate-900 bg-transparent"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get the latest English learning tips, success stories, and exclusive content delivered to your inbox.
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-slate-900">Subscribe to Newsletter</Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">Join 5,000+ English learners. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
