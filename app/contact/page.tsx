import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  Clock,
  Send,
  Youtube,
  Facebook,
  Globe,
  MessageCircle,
  BookOpen,
  Users,
  Award,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "nishant@ktilp.com",
      action: "mailto:nishant@ktilp.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 98765 43210",
      action: "tel:+919876543210",
      color: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      contact: "+91 98765 43210",
      action: "https://wa.me/919876543210",
      color: "text-green-500",
    },
  ]

  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@ktilplearning",
      url: "https://www.youtube.com/@ktilplearning/featured",
      color: "text-red-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "InteractiveLearningProgram",
      url: "https://www.facebook.com/InteractiveLearningProgram",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      name: "Website",
      handle: "ktilp.com",
      url: "https://ktilp.com",
      color: "text-green-500",
    },
    {
      icon: BookOpen,
      name: "Udemy",
      handle: "Nishant Shukla",
      url: "https://www.udemy.com/user/kritika-shukla-20/",
      color: "text-purple-500",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most students notice improvement in their confidence and understanding within 2-3 weeks of consistent practice with our movie-based method.",
    },
    {
      question: "Do I need any prior English knowledge?",
      answer:
        "Our course is designed for all levels. We start with basics and gradually progress to advanced concepts, making it suitable for beginners to intermediate learners.",
    },
    {
      question: "Can I access the course on mobile?",
      answer:
        "Yes! Our course is fully optimized for mobile devices, tablets, and desktops. You can learn anywhere, anytime.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll refund your payment.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50 bg-[url('/images/logo-background-pattern.svg')] opacity-10"></div>
        <div className="container relative px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Elevate Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Professional English
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seeking expert consultation for career advancement? Inquire about our Business English courses and
              professional development programs. We're dedicated to guiding you toward your career aspirations.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Personalized support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span>Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-slate-600 text-lg">Choose the method that works best for you</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-white shadow-md border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4 transition-colors`}
                  >
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <Link href={method.action} className={`${method.color} hover:underline font-medium`}>
                    {method.contact}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Whether you have questions about
                our course or need technical support, we're here to help.
              </p>

              <Card className="bg-white shadow-md border-slate-200">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-gray-900 mb-2 block">First Name</label>
                        <Input
                          placeholder="Enter your first name"
                          className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-900 mb-2 block">Last Name</label>
                        <Input
                          placeholder="Enter your last name"
                          className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">Subject</label>
                      <Input
                        placeholder="What's this about?"
                        className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-2 block">Message</label>
                      <Textarea
                        placeholder="Tell us more about your question or how we can help..."
                        rows={5}
                        className="bg-slate-50 border-slate-300 text-gray-900 placeholder:text-slate-500"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Instructor Info */}
              <Card className="bg-white shadow-md border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src="/images/instructor-professional.jpg"
                      alt="Nishant Shukla"
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-blue-500/30"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Nishant Shukla</h3>
                      <p className="text-blue-600">Founder & Lead Instructor</p>
                      <p className="text-slate-600 text-sm">English Trainer • YouTuber • Educator</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    "I personally read and respond to every message. Your success in learning English is my priority,
                    and I'm here to support you throughout your journey."
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Usually responds within 2-4 hours</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-md border-slate-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Follow Us on Social Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors group"
                    >
                      <social.icon className={`h-6 w-6 ${social.color}`} />
                      <div>
                        <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                          {social.name}
                        </p>
                        <p className="text-slate-600 text-sm">{social.handle}</p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-r from-blue-100 to-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Why Students Choose KTILP</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">10K+</div>
                      <div className="text-slate-600 text-sm">Happy Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">4.9/5</div>
                      <div className="text-slate-600 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800">24hrs</div>
                      <div className="text-slate-600 text-sm">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">5+</div>
                      <div className="text-slate-600 text-sm">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-md border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us Directly
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
