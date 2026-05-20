"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size="sm" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600">
          <Link href="#benefits" className="hover:text-[--color-brand-blue] transition-colors">Benefits</Link>
          <Link href="#courses" className="hover:text-[--color-brand-blue] transition-colors">Udemy Courses</Link>
          <Link href="#testimonials" className="hover:text-[--color-brand-blue] transition-colors">Testimonials</Link>
        </div>
      </div>
    </motion.nav>
  );
}
