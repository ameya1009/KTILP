"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I get lifetime access to the courses?",
    answer: "Yes! Once you enroll in any of our courses on Udemy, you get lifetime access to the materials and any future updates.",
  },
  {
    question: "Are these courses suitable for beginners?",
    answer: "Absolutely. Most of our courses, including English Speaking and Storytelling, are designed from the ground up, starting from absolute basics and moving to advanced concepts.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, Udemy provides a 30-day money-back guarantee. If you are not satisfied with the course content, you can easily request a refund directly through their platform.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Yes, upon completing 100% of the videos and assignments in a course, you will receive a verifiable Certificate of Completion from Udemy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[--color-brand-blue] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
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
                    <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-200 pt-4">
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
