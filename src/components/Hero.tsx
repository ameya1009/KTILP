"use client";

import { motion } from "framer-motion";
import HeroScene from "./canvas/HeroScene";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[--color-light-bg]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white z-0"></div>
      
      {/* 3D Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[--color-brand-orange] animate-pulse"></span>
            <span className="text-sm font-bold text-gray-600">Official Udemy Courses</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-gray-900"
          >
            Speak Confidently. <br />
            <span className="text-gradient">Grow Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-medium"
          >
            Master your craft with our premium Udemy courses. Elevate your personal and professional life through expert-led communication, productivity, and technical training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#courses" className="group relative px-8 py-4 bg-[#f36c21] text-white rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-orange-400/40 hover:bg-[#e05610]">
              <span className="relative z-10">Explore Udemy Courses</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#benefits" className="px-8 py-4 rounded-full font-bold text-lg text-white bg-[#009ce0] border-2 border-[#009ce0] hover:bg-[#0088cc] transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md">
              <BookOpen className="w-5 h-5" />
              <span>Why Choose Us?</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
