import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Globe,
  Headphones,
  MessageCircle,
  Brain,
  Target,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function HomePage() {
  const learningMethods = [
    {
      icon: Play,
      title: "Interactive Video Lessons",
      description: "Engaging video content with real-world scenarios and practical examples",
      color: "text-blue-400",
    },
    {
      icon: Headphones,
      title: "Pronunciation Training",
      description: "Advanced speech recognition technology to perfect your accent",
      color: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: "Conversation Practice",
      description: "Live speaking sessions and AI-powered conversation partners",
      color: "text-purple-400",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Grammar",
      description: "Structured grammar lessons from basic to advanced levels",
      color: "text-orange-400",
    },
    {
      icon: Brain,
      title: "Vocabulary Building",
      description: "Smart spaced repetition system for effective word retention",
      color: "text-red-400",
    },
    {
      icon: Globe,
      title: "Cultural Context",
      description: "Understanding English in different cultural and business contexts",
      color: "text-cyan-400",
    },
  ]

  const achievements = [
    { number: "50K+", label: "Students Worldwide", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "4.9/5", label: "Student Rating", icon: Star },
    { number: "24/7", label: "Learning Support", icon: Clock },
  ]

  const courseFeatures = [
    "Personalized Learning Path",
    "AI-Powered Progress Tracking",
    "Live Group Sessions",
    "1-on-1 Mentoring Available",
    "Mobile Learning App",
    "Offline Content Access",
    "Industry-Specific English",
    "Certification Programs",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Logo Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full bg-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/ktilp-logo.jpg')",
            backgroundSize: "200px 200px",
            backgroundPosition: "center",
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative px-4 md:px-6 z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <Badge className="w-fit mx-auto lg:mx-0 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                  🎓 Professional English Learning Platform
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900">
                  Master English
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Professionally
                  </span>
                  <br />
                  with KTILP
                </h1>
                <p className="text-xl text-slate-600 max-w-[600px] mx-auto lg:mx-0">
                  Transform your career with comprehensive English training. From basic communication to advanced
                  business English, we provide structured learning paths designed for Indian professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/join-course">
                  <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Learning Today
                  </Button>
                </Link>
                <Link href="/watch-reels">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Watch Demo Lessons
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Structured Learning Path</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Expert Instruction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur rounded-2xl p-8 border border-slate-200 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-slate-900 font-semibold">Grammar</p>
                    <p className="text-slate-600 text-sm">Foundation</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center border border-green-100">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-slate-900 font-semibold">Speaking</p>
                    <p className="text-slate-600 text-sm">Fluency</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-100">
                    <Headphones className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-slate-900 font-semibold">Listening</p>
                    <p className="text-slate-600 text-sm">Comprehension</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-100">
                    <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-slate-900 font-semibold">Business</p>
                    <p className="text-slate-600 text-sm">English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="py-20 bg-white/50 backdrop-blur">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">Our Teaching Methodology</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Comprehensive Learning Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Our scientifically-designed curriculum combines multiple learning methods to ensure rapid progress and
              long-term retention
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {learningMethods.map((method, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-slate-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                    <method.icon className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <CardTitle className="text-slate-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Professionals Worldwide</h2>
            <p className="text-slate-600 text-lg">Join thousands who have advanced their careers with better English</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-slate-200 text-center">
                <CardContent className="pt-8 pb-6">
                  <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                  <div className="text-slate-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">Why Choose KTILP</Badge>
                <h2 className="text-3xl font-bold text-slate-900">
                  Everything You Need to Master English Professionally
                </h2>
                <p className="text-lg text-slate-600">
                  Our comprehensive platform provides all the tools, resources, and support you need to achieve English
                  fluency and advance your career.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join-course">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Target className="mr-2 h-5 w-5" />
                    View Course Details
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Meet Your Instructor
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/90 backdrop-blur border-slate-200 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-slate-900">Professional Certification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-center">
                    Earn industry-recognized certificates upon course completion
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Business English Certificate</span>
                      <Badge className="bg-green-100 text-green-700">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Advanced Speaking Certificate</span>
                      <Badge className="bg-green-100 text-green-700">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Professional Writing Certificate</span>
                      <Badge className="bg-green-100 text-green-700">Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="py-20 bg-white/50 backdrop-blur">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-slate-600 text-lg">Real professionals, real results</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/80 backdrop-blur border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "KTILP helped me land a promotion at my MNC. The business English module was exactly what I needed for
                  client presentations."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Rajesh Kumar</p>
                    <p className="text-sm text-slate-500">Senior Manager, TCS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "My IELTS score improved from 6.5 to 8.5 after completing the advanced course. Now I'm studying in
                  Canada!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Priya Sharma</p>
                    <p className="text-sm text-slate-500">Graduate Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "The pronunciation training module transformed my confidence. I now lead international calls without
                  hesitation."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Amit Patel</p>
                    <p className="text-sm text-slate-500">Team Lead, Infosys</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Ready to Transform Your English Skills?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of professionals who have advanced their careers with KTILP's proven English learning
              system
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">30-Day</div>
                  <div className="text-blue-100">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-blue-100">Learning Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">Lifetime</div>
                  <div className="text-blue-100">Course Access</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join-course">
                  <Button size="lg" className="text-xl px-12 py-6 bg-white text-blue-600 hover:bg-blue-50 font-bold">
                    <BookOpen className="mr-3 h-6 w-6" />
                    Start Your Journey Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl px-12 py-6 border-white text-slate-900 hover:bg-white/10 bg-transparent"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Talk to an Advisor
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Certified Courses</span>
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
