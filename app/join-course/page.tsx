import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  Play,
  BookOpen,
  Download,
  MessageCircle,
  Video,
  FileText,
  Headphones,
  Shield,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function JoinCoursePage() {
  const courseFeatures = [
    {
      icon: Video,
      title: "Expert Video Lessons",
      description: "Learn from industry leaders with practical insights.",
    },
    {
      icon: MessageCircle,
      title: "Business Communication",
      description: "Master professional communication for career success.",
    },
    {
      icon: Headphones,
      title: "Accent Training",
      description: "Refine your pronunciation for clear and confident speaking.",
    },
    {
      icon: FileText,
      title: "Downloadable Templates",
      description: "Use professional templates for reports, emails, and presentations.",
    },
    {
      icon: Play,
      title: "Role-Playing Exercises",
      description: "Practice real-world scenarios to build confidence.",
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Earn a recognized certificate to boost your career.",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "₹2,999",
      originalPrice: "₹4,999",
      duration: "3 Months Access",
      popular: false,
      features: ["Access to Basic Modules", "Email Support", "Downloadable Resources", "Certificate of Completion"],
    },
    {
      name: "Pro Plan",
      price: "₹4,999",
      originalPrice: "₹7,999",
      duration: "Lifetime Access",
      popular: true,
      features: [
        "Access to All Modules",
        "Priority Support",
        "Downloadable Resources",
        "Live Q&A Sessions",
        "Advanced Certification",
      ],
    },
    {
      name: "Executive Plan",
      price: "₹9,999",
      originalPrice: "₹14,999",
      duration: "Lifetime + Mentorship",
      popular: false,
      features: [
        "Everything in Pro Plan",
        "1-on-1 Mentorship Sessions",
        "Personalized Feedback",
        "Career Guidance",
        "Executive Certificate",
      ],
    },
  ]

  const courseModules = [
    {
      title: "Business Communication",
      lessons: 8,
      duration: "2 hours",
      topics: ["Effective Email Writing", "Presentation Skills", "Meeting Etiquette"],
    },
    {
      title: "Professional Writing",
      lessons: 12,
      duration: "3.5 hours",
      topics: ["Report Writing", "Proposal Development", "Business Correspondence"],
    },
    {
      title: "Interview Skills",
      lessons: 10,
      duration: "3 hours",
      topics: ["Resume Building", "Common Interview Questions", "Negotiation Techniques"],
    },
    {
      title: "Leadership Communication",
      lessons: 15,
      duration: "4 hours",
      topics: ["Team Communication", "Conflict Resolution", "Motivational Speaking"],
    },
    {
      title: "Advanced English",
      lessons: 10,
      duration: "2.5 hours",
      topics: ["Advanced Grammar", "Vocabulary Building", "Idiomatic Expressions"],
    },
  ]

  const bonuses = [
    {
      title: "Bonus: Business English Dictionary",
      value: "₹999",
      description: "Comprehensive guide with explanations and usage examples",
    },
    {
      title: "Bonus: Professional Email Templates",
      value: "₹1,499",
      description: "Ready-to-use templates for various business scenarios",
    },
    {
      title: "Bonus: Interview Success Guide",
      value: "₹799",
      description: "Tips and strategies to ace your next job interview",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              🚀 Elevate Your Career
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Master Professional English for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {" "}
                Career Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join professionals who have enhanced their English skills and advanced their careers through our
              specialized course. Get lifetime access to premium content and personalized support.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>1,000+ Professionals Enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Certified Course</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-gray-600 text-lg">Comprehensive learning experience designed for your success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 mb-4">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-gray-600 text-lg">Structured learning path from beginner to advanced</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {courseModules.map((module, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Module {index + 1}: {module.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {module.lessons} Lessons
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {module.duration}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-slate-900 mt-2 md:mt-0">Module {index + 1}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="bg-gray-200 text-gray-700">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-600 text-lg">Flexible pricing options to suit your needs and budget</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white border-gray-200 shadow-sm relative ${plan.popular ? "border-2 border-blue-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-slate-900">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-gray-900 text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-gray-500">{plan.duration}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`}
                    size="lg"
                  >
                    {plan.popular ? "Get Started Now" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              🔒 30-day money-back guarantee • 🎯 Instant access • 📱 Mobile & Desktop
            </p>
            <div className="flex justify-center space-x-4">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-gray-600">Secure payment powered by Razorpay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Bonuses</h2>
            <p className="text-gray-600 text-lg">Additional resources worth ₹3,297 - FREE with your enrollment</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{bonus.title}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Worth {bonus.value}</div>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                  <Badge className="mt-4 bg-blue-600 text-slate-900">FREE Bonus</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-gray-600 text-lg">Real transformations from real students</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I got promoted at work after improving my English confidence through KTILP. The movie-based approach
                  made learning so natural!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Software Engineer, Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My IELTS score improved from 6.5 to 8.0 after taking this course. The cultural context explanations
                  were game-changing!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">IELTS Candidate, Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I can now watch Hollywood movies without subtitles and understand every emotion. This course changed
                  my life!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Amit Patel</p>
                    <p className="text-sm text-gray-500">College Student, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your English?</h2>
            <p className="text-xl text-gray-600">
              Join the KTILP family today and start your journey to English fluency through the magic of movies!
            </p>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Limited Time</div>
                  <div className="text-gray-600">Special Offer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50% OFF</div>
                  <div className="text-gray-600">Course Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Lifetime</div>
                  <div className="text-gray-600">Access</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-900 font-bold"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Enroll Now - ₹4,999
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-xl px-12 py-6 border-blue-500 text-blue-400 hover:bg-blue-500 text-slate-900 bg-transparent"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Watch Free Preview
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Instant access after payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Mobile & desktop compatible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
