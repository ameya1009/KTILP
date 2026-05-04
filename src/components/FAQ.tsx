"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I get lifetime access to the courses?",
    answer: "Yes! Once you enroll in any of our courses on Udemy or purchase the All-Access Pass, you get lifetime access to the materials and any future updates.",
  },
  {
    question: "Are these courses suitable for beginners?",
    answer: "Absolutely. Most of our courses, including English Speaking and Storytelling, are designed from the ground up, starting from absolute basics and moving to advanced concepts.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, Udemy provides a 30-day money-back guarantee. If you are not satisfied with the course content, you can easily request a refund.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Yes, upon completing 100% of the videos and assignments in a course, you will receive a verifiable Certificate of Completion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[--color-neon-cyan] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
