"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/images/ktilp-logo.jpg" alt="KTILP Logo" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold text-slate-900">KTILP</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            href="/watch-reels"
            className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            Lessons
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            About Nishant
          </Link>
          <Link
            href="/join-course"
            className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/join-course" className="hidden sm:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-slate-900 font-semibold">Start Learning</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/watch-reels"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lessons
            </Link>
            <Link
              href="/about"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Nishant
            </Link>
            <Link
              href="/join-course"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/blog"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-slate-900 font-semibold w-full">
              Start Learning
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
