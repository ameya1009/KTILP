import { Youtube, Globe, Mail, Phone, MapPin, LinkIcon } from "lucide-react"
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
            backgroundImage: "url('/placeholder.svg?key=el7s3')", // Updated background image
            backgroundSize: "150px 150px",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?key=gltt0"
                alt="Successful People Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Successful People</span>
            </div>
            <p className="text-slate-600 max-w-xs">
              Empowering individuals to master English, communication, and achieve inner peace for a successful life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://successfulpeople.com"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@ktilplearning/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.udemy.com/user/kritika-shukla-20/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <LinkIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-slate-600 hover:text-slate-900 transition-colors">
                  English Speaking
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Self-Awareness
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Bundle Offer
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact
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
                <span>info@successfulpeople.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>Global Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Successful People. All rights reserved.</p>
          <p className="text-slate-600 text-sm mt-4 md:mt-0">Empowering you to achieve your full potential</p>
        </div>
      </div>
    </footer>
  )
}
