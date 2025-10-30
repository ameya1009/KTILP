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
      title: "13 Hours On-Demand Video",
      description: "Comprehensive video lessons you can watch anytime, anywhere.",
    },
    {
      icon: FileText,
      title: "3 Articles to Read",
      description: "In-depth written guides and resources for deeper learning.",
    },
    {
      icon: Download,
      title: "31 Downloadable Resources",
      description: "Templates, guides, and materials for practical application.",
    },
    {
      icon: Headphones,
      title: "Access on Mobile & TV",
      description: "Learn on any device - phone, tablet, or television.",
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Earn a recognized certificate to boost your credentials.",
    },
    {
      icon: MessageCircle,
      title: "Lifetime Support",
      description: "Get help whenever you need it from our expert team.",
    },
  ]

  const pricingPlans = [
    {
      name: "English Speaking Course",
      price: "₹3,999",
      originalPrice: "₹29,999",
      duration: "Lifetime Access",
      popular: true,
      description: "Master English Speaking in Hindi with Communication Skills & Business Storytelling",
      features: [
        "13 hours on-demand video",
        "3 articles to read",
        "31 downloadable resources",
        "Access on mobile and TV",
        "Certificate of completion",
        "Lifetime access",
        "Email support",
      ],
    },
    {
      name: "Mindfulness Course",
      price: "₹3,999",
      originalPrice: "₹19,999",
      duration: "Lifetime Access",
      popular: false,
      description: "Become Your Own Therapist - Resolve Mental Blocks & Improve Self-Awareness",
      features: [
        "Complete mindfulness training",
        "Mental wellness modules",
        "Self-awareness exercises",
        "Breathing techniques",
        "Meditation guides",
        "Lifetime access",
        "Email support",
      ],
    },
    {
      name: "Bundle Offer",
      price: "₹4,999",
      originalPrice: "₹49,998",
      duration: "Lifetime Access",
      popular: true,
      description: "Both Courses - English Speaking + Mindfulness for Complete Transformation",
      features: [
        "English Speaking Course",
        "Mindfulness Course",
        "26 hours total video content",
        "All resources included",
        "Access on all devices",
        "Both certificates",
        "Priority support",
        "Lifetime access",
      ],
    },
  ]

  const courseModules = [
    {
      title: "English Speaking in Hindi",
      lessons: 12,
      duration: "4 hours",
      topics: ["Pronunciation", "Conversation", "Business English", "Storytelling"],
    },
    {
      title: "Communication Skills",
      lessons: 10,
      duration: "3 hours",
      topics: ["Effective Speaking", "Listening Skills", "Presentation", "Confidence"],
    },
    {
      title: "Business Storytelling",
      lessons: 8,
      duration: "2.5 hours",
      topics: ["Story Structure", "Engagement", "Persuasion", "Impact"],
    },
    {
      title: "Mindfulness & Wellness",
      lessons: 15,
      duration: "5 hours",
      topics: ["Meditation", "Breathing", "Self-Awareness", "Mental Health"],
    },
    {
      title: "Self-Awareness Development",
      lessons: 10,
      duration: "3.5 hours",
      topics: ["Inner Peace", "Emotional Balance", "Personal Growth", "Happiness"],
    },
  ]

  const bonuses = [
    {
      title: "Business English Dictionary",
      value: "₹999",
      description: "Comprehensive guide with explanations and usage examples",
    },
    {
      title: "Professional Email Templates",
      value: "₹1,499",
      description: "Ready-to-use templates for various business scenarios",
    },
    {
      title: "Interview Success Guide",
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
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              Transform Your Life
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Master English &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {" "}
                Achieve Inner Peace
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 40,000+ students who have transformed their lives with KTILP's proven methodology. Learn English
              Speaking in Hindi with 97% success rate and achieve mindfulness.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>40,000+ Students Enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>97% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-400" />
                <span>14 Years Experience</span>
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
            <p className="text-gray-600 text-lg">Comprehensive learning experience with real value</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courseFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
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
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
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
                    <Badge className="bg-blue-600 text-white mt-2 md:mt-0">Module {index + 1}</Badge>
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
            <p className="text-gray-600 text-lg">Flexible pricing options with lifetime access</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white border-gray-200 shadow-sm relative hover:shadow-lg transition-all ${
                  plan.popular ? "border-2 border-blue-500 md:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-gray-900 text-2xl">{plan.name}</CardTitle>
                  <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
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
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.popular ? "Enroll Now" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              30-day money-back guarantee • Instant access • Mobile & Desktop compatible
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
            <p className="text-gray-600 text-lg">Additional resources worth ₹3,297 - FREE with enrollment</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 shadow-sm hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{bonus.title}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Worth {bonus.value}</div>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                  <Badge className="mt-4 bg-blue-600 text-white">FREE Bonus</Badge>
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
            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I got promoted at work after improving my English confidence through KTILP. The Hindi-English
                  approach made learning so natural!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Software Engineer, Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The mindfulness course helped me manage stress and achieve inner peace. My life has completely
                  transformed!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Marketing Manager, Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I can now speak English confidently in professional meetings. The bundle course gave me everything I
                  needed!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Amit Patel</p>
                    <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-600">
              Join 40,000+ students who have mastered English and achieved inner peace with KTILP.
            </p>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Limited Time</div>
                  <div className="text-gray-600">Special Offer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">Up to 87% OFF</div>
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
                  className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Enroll Now - ₹4,999
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-xl px-12 py-6 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
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
