"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle, Briefcase, Zap, Code2 } from "lucide-react";

const benefits = [
  {
    title: "Master Your Skills",
    description: "Learn industry-standard practices. Go from zero to mastery in weeks with practical guidance.",
    icon: <Briefcase className="w-8 h-8 text-[--color-neon-cyan]" />,
  },
  {
    title: "Ace Interviews",
    description: "Master communication rounds and technical queries. Gain the confidence you need to succeed.",
    icon: <CheckCircle className="w-8 h-8 text-[--color-neon-magenta]" />,
  },
  {
    title: "Advance Your Career",
    description: "Level up your professional trajectory. We teach you how to stand out and earn more.",
    icon: <Zap className="w-8 h-8 text-[--color-neon-cyan]" />,
  },
  {
    title: "Technical & Soft Skills",
    description: "From App Security to Emotional Intelligence. A holistic approach to personal growth.",
    icon: <Code2 className="w-8 h-8 text-[--color-neon-magenta]" />,
  },
];

function TiltCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[--color-neon-cyan]/10 to-[--color-neon-magenta]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl z-0" />
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
          {benefit.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 relative z-10 bg-[--color-dark-bg]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-gradient">KTILP?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            We don't just teach theory. We build careers with hands-on, practical skills that the industry actually needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 1000 }}>
          {benefits.map((benefit, index) => (
            <TiltCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
