"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-[--color-dark-bg]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Invest In <span className="text-gradient">Your Future</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Lifetime access. No hidden fees. Pay once, learn forever.</p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl p-[2px] overflow-hidden"
          >
            {/* Animated glowing border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-neon-cyan] via-purple-500 to-[--color-neon-magenta] animate-pulse" />
            
            <div className="relative bg-[#050505] rounded-[22px] p-8 md:p-12 h-full flex flex-col">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[--color-neon-cyan] to-[--color-neon-magenta] text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[22px]">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">All-Access Pass</h3>
              <p className="text-gray-400 mb-6">Get access to all current and future courses.</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">₹4,999</span>
                <span className="text-gray-500 line-through ml-3">₹15,000</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {["All 7 Premium Masterclasses", "Lifetime Access & Updates", "Exclusive Discord Community", "Direct Q&A with Instructors", "Certificate of Completion"].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-[--color-neon-cyan] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#courses" className="w-full py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                Get Started Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
