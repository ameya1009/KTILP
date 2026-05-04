"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul S.",
    role: "Senior QA Engineer",
    text: "This masterclass completely transformed my career. The technical depth and real-world projects are unmatched. I doubled my salary within 3 months of completing it.",
  },
  {
    name: "Priya M.",
    role: "Product Manager",
    text: "The communication and storytelling courses were exactly what I needed to lead my teams more effectively. Absolutely brilliant insights and practical advice.",
  },
  {
    name: "Amit T.",
    role: "Software Developer",
    text: "I was struggling with web app security concepts until I took Nishant's module. Clear, concise, and straight to the point. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[--color-neon-cyan] opacity-10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Don't Just Take <span className="text-gradient">Our Word For It</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Join thousands of students who have already leveled up.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[--color-neon-cyan]/30 transition-colors backdrop-blur-sm"
            >
              <div className="flex text-[--color-neon-magenta] mb-6 space-x-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[--color-neon-cyan] to-[--color-neon-magenta] p-[2px]">
                  <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
