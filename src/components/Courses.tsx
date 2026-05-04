"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const courses = [
  {
    id: "01",
    title: "English Speaking Course",
    topics: ["Beginner to Advance", "Hindi to English", "Fluency Building", "Grammar Essentials"],
    url: "https://www.udemy.com/course/english-speaking-course-beginner-advance-hindi-to-english/",
    color: "from-[#00f0ff] to-[#0088aa]"
  },
  {
    id: "02",
    title: "Mindfulness & Self-Awareness",
    topics: ["Counselling in Hindi", "Stress Management", "Self Discovery", "Mental Well-being"],
    url: "https://www.udemy.com/course/mindfulness-self-awareness-counselling-course-in-hindi/",
    color: "from-[#ff00ff] to-[#aa00aa]"
  },
  {
    id: "03",
    title: "Communication Skills",
    topics: ["Storytelling", "Communication Tips", "Public Speaking", "Confidence Building"],
    url: "https://www.udemy.com/course/communication-skills-storytelling-communication-tips/",
    color: "from-[#00f0ff] to-[#ff00ff]"
  },
  {
    id: "04",
    title: "Mobile & Web App Security",
    topics: ["Security Pinning", "Interview Prep", "Vulnerability Testing", "Cybersecurity Basics"],
    url: "https://www.udemy.com/course/mobile-app-security-web-app-security-pinning-interview-nishant-shukla/",
    color: "from-[#ff00ff] to-[#00f0ff]"
  },
  {
    id: "05",
    title: "The Art of Being Productive",
    topics: ["Planning", "Effective Execution", "Time Management", "Goal Setting"],
    url: "https://www.udemy.com/course/the-art-of-being-productive-planning-effective-execution/",
    color: "from-[#00f0ff] to-[#0088aa]"
  },
  {
    id: "06",
    title: "Business Storytelling",
    topics: ["Storytelling for Beginners", "Corporate Communication", "Pitching Ideas", "Leadership Narratives"],
    url: "https://www.udemy.com/course/storytelling-business-storytelling-for-beginners/",
    color: "from-[#ff00ff] to-[#aa00aa]"
  },
  {
    id: "07",
    title: "Emotional Intelligence",
    topics: ["Life Psychology", "End Procrastination", "Self Regulation", "Empathy & Social Skills"],
    url: "https://www.udemy.com/course/emotional-intelligence-life-psychology-end-procrastination/",
    color: "from-[#00f0ff] to-[#ff00ff]"
  }
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div className="w-[85vw] md:w-[45vw] h-[65vh] md:h-[55vh] flex-shrink-0 flex items-center justify-center p-6">
      <div className="relative w-full h-full rounded-3xl overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
        <div className="absolute inset-0 backdrop-blur-md border border-white/10 bg-[#111]/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-[--color-neon-cyan] font-mono text-xl mb-4 opacity-70">COURSE {course.id}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">{course.title}</h3>
            <ul className="space-y-3 md:space-y-4">
              {course.topics.map((topic, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300 text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-[--color-neon-magenta] shadow-[0_0_10px_#ff00ff]" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-400">Available on Udemy</span>
            <a 
              href={course.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"
            >
              →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} id="courses" className="relative h-[400vh] bg-[--color-dark-bg]">
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden pt-24 pb-12">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-gradient">Premium Courses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From technical mastery to soft skills. Elevate every aspect of your professional and personal life.
          </p>
        </div>

        <motion.div style={{ x }} className="flex w-[595vw] md:w-[315vw] items-center">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
