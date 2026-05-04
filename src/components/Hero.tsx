"use client";

import { motion } from "framer-motion";
import HeroScene from "./canvas/HeroScene";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00f0ff]/10 via-black to-black z-0"></div>
      
      {/* 3D Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[--color-neon-cyan] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">New Batches Starting Soon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Master Your Craft. <br />
            <span className="text-gradient">Elevate Your Career.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Join the ultimate Masterclasses designed to transform your personal and professional life. Learn from industry experts, master communication, and secure high-paying roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#courses" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
              <span className="relative z-10">Explore Courses</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[--color-neon-cyan] to-[--color-neon-magenta] opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <a href="#courses" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center space-x-2">
              <Terminal className="w-5 h-5" />
              <span>View Curriculum</span>
            </a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex items-center space-x-6 text-sm text-gray-500 font-medium"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"></div>
              ))}
            </div>
            <div>
              <div className="text-white">Join 5,000+ Students</div>
              <div>Rated 4.9/5 by Alumni</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
