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
          <Image
            src="/images/ktilp-logo.jpg" // Updated logo source to new KTILP logo
            alt="KTILP Logo" // Updated alt text for new logo
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-slate-900">KTILP</span> {/* Updated brand name */}
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="#courses" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Courses
          </Link>
          <Link href="#features" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link
            href="https://www.udemy.com/user/kritika-shukla-20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            Udemy
          </Link>
          <Link
            href="https://www.youtube.com/@ktilplearning/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            YouTube
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#courses" className="hidden sm:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Start Learning</Button>
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
              href="#courses"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="#features"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="https://www.udemy.com/user/kritika-shukla-20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Udemy
            </Link>
            <Link
              href="https://www.youtube.com/@ktilplearning/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              YouTube
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full">Start Learning</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
