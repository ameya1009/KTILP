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
    { icon: Users, number: "10K+", label: "Professionals Trained", color: "text-blue-400" },
    { icon: BookOpen, number: "20+", label: "Business English Courses", color: "text-green-400" },
    { icon: Star, number: "4.9/5", label: "Average Course Rating", color: "text-yellow-400" },
    { icon: Award, number: "5+", label: "Years of Experience", color: "text-green-400" },
  ]

  const skills = [
    "Business English Communication",
    "Presentation Skills Training",
    "Negotiation English",
    "Cross-Cultural Communication",
    "Executive Coaching",
    "Corporate Training",
    "Leadership Communication",
    "Professional Writing",
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Nishant sir's business English course helped me communicate effectively with international clients.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Marketing Manager",
      content: "The presentation skills training was invaluable. I now deliver confident and persuasive presentations.",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      role: "Team Lead",
      content: "KTILP's corporate training improved our team's communication and collaboration significantly.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-[url('/images/logo-background-pattern.svg')]">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                👨‍🏫 Meet Your Instructor
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                Meet
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}
                  Nishant Shukla
                </span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Business English Trainer • Corporate Educator • Communication Coach
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Empowering professionals with effective communication skills for career advancement. Specializing in
                business English, presentation skills, and cross-cultural communication.
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
                <Link href="https://ktilp.com" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    Visit Our Website
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <Image
                  src="/images/instructor-professional.jpg"
                  alt="Nishant Shukla - Business English Trainer"
                  width={500}
                  height={500}
                  className="rounded-2xl border-4 border-blue-500/30 shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-100/90 backdrop-blur rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-slate-900 font-semibold">10K+ Connections</div>
                      <div className="text-slate-500 text-sm">Website Visitors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-100/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements & Impact</h2>
            <p className="text-slate-700 text-lg">Numbers that speak for themselves</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white border-slate-200 backdrop-blur text-center">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">My Story & Mission</h2>
              <p className="text-slate-700 text-lg">The journey to empowering professionals</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <Lightbulb className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">The Inspiration</h3>
                  <p className="text-slate-700">
                    Recognizing the critical need for effective communication in the global business environment, I
                    founded KTILP to provide professionals with the skills to excel in their careers.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <Target className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">The Mission</h3>
                  <p className="text-slate-700">
                    To empower professionals with the communication skills they need to succeed in today's competitive
                    business world. Through targeted training and personalized coaching, I help individuals and teams
                    achieve their full potential.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <Heart className="h-8 w-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">The Impact</h3>
                  <p className="text-slate-700">
                    Witnessing professionals gain confidence, advance their careers, and achieve their goals through
                    improved communication skills is the ultimate reward.
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/instructor-casual.jpg"
                  alt="Nishant Shukla teaching"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-slate-100/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-slate-700 text-lg">Areas of specialization in English education</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 text-center">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Professionals Say</h2>
            <p className="text-slate-700 text-lg">Real feedback from real students</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-slate-200 backdrop-blur">
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
            <h2 className="text-3xl font-bold text-slate-900">Elevate Your Communication Skills</h2>
            <p className="text-xl text-slate-700">
              Join professionals who have transformed their careers with KTILP's expert training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join-course">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
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
                href="https://ktilp.com"
                target="_blank"
                className="text-slate-500 hover:text-blue-400 transition-colors"
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
