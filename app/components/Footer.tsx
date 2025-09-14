import { Youtube, Facebook, Globe, BookOpen, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-900 py-16 border-t border-slate-800 relative">
      {/* Logo Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full bg-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/ktilp-logo.jpg')",
            backgroundSize: "150px 150px",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/ktilp-logo.jpg" alt="KTILP Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold">KTILP</span>
            </div>
            <p className="text-slate-600 max-w-xs">
              Professional English learning platform designed for Indian learners. Transform your career with expert
              instruction and proven methodologies.
            </p>
            <div className="flex space-x-4">
              <Link href="https://ktilp.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@ktilplearning/featured"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/InteractiveLearningProgram"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.udemy.com/user/kritika-shukla-20/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join-course" className="text-slate-600 hover:text-slate-900 transition-colors">
                  English Courses
                </Link>
              </li>
              <li>
                <Link href="/watch-reels" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Video Lessons
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/rss" className="text-slate-600 hover:text-slate-900 transition-colors">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About Nishant
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-600">
                <Mail className="h-4 w-4" />
                <span>nishant@ktilp.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} KTILP. All rights reserved.</p>
          <p className="text-slate-600 text-sm mt-4 md:mt-0">Empowering professionals through English education</p>
        </div>
      </div>
    </footer>
  )
}
