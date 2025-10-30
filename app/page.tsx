import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Play,
  Globe,
  MessageCircle,
  Brain,
  TrendingUp,
  Clock,
  Shield,
  Youtube,
  LinkIcon,
} from "lucide-react"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function HomePage() {
  const learningMethods = [
    {
      icon: Play,
      title: "13 hours on-demand video",
      description: "Engaging video content with real-world scenarios and practical examples",
      color: "text-blue-400",
    },
    {
      icon: BookOpen,
      title: "3 articles to read",
      description: "In-depth articles to supplement your learning and understanding",
      color: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: "31 downloadable resources",
      description: "Practical exercises, worksheets, and templates for hands-on practice",
      color: "text-purple-400",
    },
    {
      icon: Globe,
      title: "Access on mobile and TV",
      description: "Learn anytime, anywhere, on your preferred device",
      color: "text-orange-400",
    },
    {
      icon: Award,
      title: "Certificate of completion",
      description: "Receive a certificate upon successful completion of the course",
      color: "text-red-400",
    },
  ]

  const achievements = [
    { number: "97%", label: "Success Metric", icon: TrendingUp },
    { number: "14", label: "Years of experience", icon: Clock },
    { number: "40000+", label: "Enrolled Students", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-20"
            src="/placeholder.mp4?query=professional english learning communication skills animation"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"></div>
        </div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="w-fit mx-auto lg:mx-0 bg-white text-blue-600 border-blue-700 hover:bg-blue-50 animate-scale-in">
                  🚀 Transform Your Communication
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                  Master English & Communication Skills in Hindi – Speak with Confidence!
                </h1>
                <p className="text-xl text-blue-100 max-w-[600px] mx-auto lg:mx-0 text-pretty">
                  Join 40,000+ students who have transformed their lives. Achieve 97% success with 14 years of proven
                  expertise. Learn English, build confidence, and unlock your potential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#courses">
                  <Button
                    size="lg"
                    className="text-lg px-8 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover-lift"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent shadow-lg hover-lift"
                  >
                    <Youtube className="ml-2 h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-3xl blur-3xl animate-pulse-glow"></div>
              <div className="relative bg-card backdrop-blur rounded-2xl p-8 border border-border shadow-2xl hover-lift">
                <div className="mb-6 rounded-lg overflow-hidden h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative group">
                  <video
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                    src="/placeholder.mp4?query=english learning communication animation"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <Play className="h-12 w-12 text-white absolute opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border hover-lift group cursor-pointer">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover-scale" />
                    <p className="text-foreground font-semibold">English Speaking</p>
                    <p className="text-muted-foreground text-sm">in Hindi</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border hover-lift group cursor-pointer">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover-scale" />
                    <p className="text-foreground font-semibold">Communication</p>
                    <p className="text-muted-foreground text-sm">Skills</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border hover-lift group cursor-pointer">
                    <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover-scale" />
                    <p className="text-foreground font-semibold">Mindfulness</p>
                    <p className="text-muted-foreground text-sm">Self-Awareness</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4 text-center border border-border hover-lift group cursor-pointer">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover-scale" />
                    <p className="text-foreground font-semibold">Inner Peace</p>
                    <p className="text-muted-foreground text-sm">Therapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-blue-600 text-white border-blue-700">Proven Results & Expertise</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Proven Results & Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands who have transformed their lives with our programs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card border-border text-center hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  {React.createElement(achievement.icon, {
                    className: "h-12 w-12 text-blue-600 mx-auto mb-4 group-hover-scale",
                  })}
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-blue-600 text-white border-blue-700">Meet Your Instructor</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Nishant Sir: Your Guide to Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Learn from an experienced educator with 14 years of proven expertise, 40,000+ successful students, and a
              97% success rate.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border hover-lift animate-slide-in-left">
              <Image
                src="/images/nishant-sir-professional.jpg"
                alt="Nishant Sir Professional"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">Nishant Sir</h3>
                <p className="text-lg">Founder & Lead Instructor, KTILP</p>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-muted-foreground">
                Nishant Sir brings over 14 years of dedicated experience in teaching and mentoring, specializing in
                English communication, public speaking, and personal development. His unique approach combines
                linguistic mastery with psychological insights, helping students not only speak better but also
                understand themselves more deeply.
              </p>
              <p className="text-lg text-muted-foreground">
                With a proven track record of over 40,000 enrolled students and a 97% success rate, Nishant Sir is
                committed to fostering a supportive learning environment where every individual can unlock their full
                potential and achieve their personal and professional goals.
              </p>
              <div className="flex items-center space-x-4 hover-lift p-4 rounded-lg bg-secondary">
                <Image
                  src="/images/nishant-sir-casual.jpg"
                  alt="Nishant Sir Casual"
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-blue-600 shadow-lg"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    "Empowering minds, transforming lives through authentic education."
                  </p>
                  <p className="text-sm text-muted-foreground">- Nishant Sir, Founder KTILP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-blue-600 text-white border-blue-700">Our Transformative Courses</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Choose Your Path to Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Enroll in our specialized courses to master English, communication, and self-awareness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border hover-lift animate-fade-in-up group overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <video
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  src="/placeholder.mp4?query=english learning course animation professional communication"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">
                  English Speaking Course in Hindi - English For Beginners
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Master English grammar, communication, and storytelling. This beginner-friendly course includes over
                  1000 vocabulary items, idioms, and practical speaking and writing exercises.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">₹3,999</div>
                  <div className="text-muted-foreground line-through">₹29,999</div>
                </div>
                <Link href="https://www.udemy.com/user/kritika-shukla-20/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-smooth">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="bg-card border-border hover-lift animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-40 bg-gradient-to-br from-purple-400 to-purple-600 overflow-hidden">
                <video
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  src="/placeholder.mp4?query=mindfulness meditation therapy self-awareness animation"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-foreground">
                  Become Your Own Therapist - Resolve Mental Blocks & Enhance Mindfulness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Explore mental well-being with our course. Learn to balance emotions, synchronize mind and body, and
                  enhance happiness with mindfulness and breathing techniques. Ideal for improving self-awareness and
                  overcoming personal challenges.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">₹3,999</div>
                  <div className="text-muted-foreground line-through">₹19,999</div>
                </div>
                <Link href="https://www.udemy.com/user/kritika-shukla-20/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-smooth">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="bg-card border-border hover-lift animate-fade-in-up group overflow-hidden col-span-full lg:col-span-1"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative h-40 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
                <video
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  src="/placeholder.mp4?query=bundle offer special deal savings animation"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-foreground">Bundle Offer - Save 90%</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Enroll in both courses at once and save 90%! Get complete access to English communication and
                  mindfulness training in one powerful bundle.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">₹4,999</div>
                  <div className="text-muted-foreground line-through">₹49,998</div>
                </div>
                <Link href="https://www.udemy.com/user/kritika-shukla-20/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 transition-smooth">
                    Purchase Both Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-blue-600 text-white border-blue-700">Our Special Features</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              What Makes Us Unique
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              We have extended our reach by offering our courses online through online platforms, making our research
              and materials available to a broader audience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {learningMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-card border-border hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary group-hover-scale">
                    {React.createElement(method.icon, { className: `h-6 w-6 ${method.color}` })}
                  </div>
                  <CardTitle className="text-foreground">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Video Background */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-10"
            src="/placeholder.mp4?query=success celebration achievement animation"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white">Ready to Transform Your Life?</h2>
            <p className="text-xl text-blue-100">
              Join 40,000+ successful individuals who have mastered communication and found inner peace with KTILP.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover-lift">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover-scale">97%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover-scale">14</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover-scale">40000+</div>
                  <div className="text-blue-100">Enrolled Students</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#courses">
                  <Button
                    size="lg"
                    className="text-xl px-12 py-6 bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-lg hover-lift"
                  >
                    <BookOpen className="mr-3 h-6 w-6" />
                    Start Your Journey Today
                  </Button>
                </Link>
                <Link href="https://www.udemy.com/user/kritika-shukla-20/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl px-12 py-6 border-white text-white hover:bg-white/10 bg-transparent shadow-lg hover-lift"
                  >
                    <LinkIcon className="mr-3 h-6 w-6" />
                    Visit Our Udemy Page
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
