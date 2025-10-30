import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users, Star, Youtube, Mail, Heart, Target, Lightbulb, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: "40K+", label: "Enrolled Students", color: "text-blue-400" },
    { icon: BookOpen, number: "14", label: "Years of Experience", color: "text-green-400" },
    { icon: Star, number: "97%", label: "Success Rate", color: "text-yellow-400" },
    { icon: Award, number: "2", label: "Specialized Courses", color: "text-purple-400" },
  ]

  const skills = [
    "English Speaking in Hindi",
    "Communication Skills",
    "Business Storytelling",
    "Mindfulness Training",
    "Mental Wellness Coaching",
    "Self-Awareness Development",
    "Confidence Building",
    "Professional Development",
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      content: "KTILP's English course transformed my confidence. I can now speak fluently in professional meetings.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      content: "The mindfulness course helped me manage stress and improve my overall well-being significantly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      content: "Nishant sir's teaching methodology is unique and effective. Highly recommended for career growth.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center animate-fade-in">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                About KTILP
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                Master English &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}
                  Transform Your Life
                </span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                KTILP - Kritika's The Interactive Learning Program. Empowering 40,000+ students with English
                communication skills and mindfulness training for 14 years.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Learn English Speaking in Hindi with 97% success rate. Master communication skills, business
                storytelling, and inner peace through our proven methodology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join-course">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/@ktilplearning/featured" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <Image
                  src="/images/nishant-sir-professional.jpg"
                  alt="Nishant Shukla - KTILP Founder"
                  width={500}
                  height={500}
                  className="rounded-2xl border-4 border-blue-500/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-slate-700 text-lg">Real numbers from real students</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200 backdrop-blur text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>{achievement.number}</div>
                  <div className="text-slate-700">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission & Vision</h2>
              <p className="text-slate-700 text-lg">Transforming lives through English and mindfulness</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <Lightbulb className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-700">
                    To create a world where English communication and mindfulness are accessible to everyone, enabling
                    personal and professional growth for millions.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <Target className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-700">
                    Empower professionals with English speaking skills in Hindi and mindfulness training. Help 40,000+
                    students achieve 97% success rate through innovative, interactive learning.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <Heart className="h-8 w-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Impact</h3>
                  <p className="text-slate-700">
                    Witnessing students gain confidence, advance careers, and achieve inner peace through our 14 years
                    of proven methodology and personalized support.
                  </p>
                </div>
              </div>

              <div className="relative animate-float">
                <Image
                  src="/images/nishant-sir-casual.jpg"
                  alt="Nishant Shukla teaching"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-slate-100/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Teach</h2>
            <p className="text-slate-700 text-lg">Comprehensive programs for English and wellness</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-slate-200 text-center hover:scale-105 transition-transform"
                >
                  <span className="text-slate-900 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-slate-700 text-lg">Real feedback from real students</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-slate-200 backdrop-blur hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Start Your Transformation Today</h2>
            <p className="text-xl text-slate-700">
              Join 40,000+ students who have transformed their lives with KTILP's proven methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join-course">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <Link
                href="https://www.youtube.com/@ktilplearning/featured"
                target="_blank"
                className="text-slate-500 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-8 w-8" />
              </Link>
              <Link
                href="https://www.udemy.com/user/kritika-shukla-20/"
                target="_blank"
                className="text-slate-500 hover:text-purple-400 transition-colors"
              >
                <Globe className="h-8 w-8" />
              </Link>
              <Link href="mailto:nishant@ktilp.com" className="text-slate-500 hover:text-green-400 transition-colors">
                <Mail className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
