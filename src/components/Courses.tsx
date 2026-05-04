"use client";

import { motion } from "framer-motion";

const courses = [
  {
    id: "01",
    title: "English Speaking Course",
    topics: ["Beginner to Advance", "Hindi to English", "Fluency Building", "Grammar Essentials"],
    url: "https://www.udemy.com/course/english-speaking-course-beginner-advance-hindi-to-english/",
    color: "from-[--color-brand-blue] to-[#0088aa]"
  },
  {
    id: "02",
    title: "Mindfulness & Self-Awareness",
    topics: ["Counselling in Hindi", "Stress Management", "Self Discovery", "Mental Well-being"],
    url: "https://www.udemy.com/course/mindfulness-self-awareness-counselling-course-in-hindi/",
    color: "from-[--color-brand-orange] to-[#e05610]"
  },
  {
    id: "03",
    title: "Communication Skills",
    topics: ["Storytelling", "Communication Tips", "Public Speaking", "Confidence Building"],
    url: "https://www.udemy.com/course/communication-skills-storytelling-communication-tips/",
    color: "from-[--color-brand-yellow] to-[#e6a300]"
  },
  {
    id: "04",
    title: "Mobile & Web App Security",
    topics: ["Security Pinning", "Interview Prep", "Vulnerability Testing", "Cybersecurity Basics"],
    url: "https://www.udemy.com/course/mobile-app-security-web-app-security-pinning-interview-nishant-shukla/",
    color: "from-[--color-brand-blue] to-[--color-brand-orange]"
  },
  {
    id: "05",
    title: "The Art of Being Productive",
    topics: ["Planning", "Effective Execution", "Time Management", "Goal Setting"],
    url: "https://www.udemy.com/course/the-art-of-being-productive-planning-effective-execution/",
    color: "from-[#0088aa] to-[--color-brand-blue]"
  },
  {
    id: "06",
    title: "Business Storytelling",
    topics: ["Storytelling for Beginners", "Corporate Communication", "Pitching Ideas", "Leadership Narratives"],
    url: "https://www.udemy.com/course/storytelling-business-storytelling-for-beginners/",
    color: "from-[--color-brand-orange] to-[--color-brand-yellow]"
  },
  {
    id: "07",
    title: "Emotional Intelligence",
    topics: ["Life Psychology", "End Procrastination", "Self Regulation", "Empathy & Social Skills"],
    url: "https://www.udemy.com/course/emotional-intelligence-life-psychology-end-procrastination/",
    color: "from-[--color-brand-blue] to-[#0088aa]"
  }
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-3xl overflow-hidden group border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color}`} />
      <div className="p-8 md:p-10 flex flex-col h-full justify-between">
        <div>
          <div className="text-[--color-brand-blue] font-mono text-sm font-bold mb-4">UDEMY COURSE {course.id}</div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">{course.title}</h3>
          <ul className="space-y-3 md:space-y-4 mb-8">
            {course.topics.map((topic, i) => (
              <li key={i} className="flex items-start space-x-3 text-gray-600 text-sm md:text-base font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[--color-brand-orange] mt-2 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
          <span className="text-sm font-bold text-gray-400">Available on Udemy</span>
          <a 
            href={course.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-[--color-brand-blue] group-hover:text-white group-hover:border-[--color-brand-blue] transition-all"
          >
            →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Explore Our <span className="text-gradient">Udemy Courses</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            From technical mastery to soft skills. Elevate every aspect of your professional and personal life with our official Udemy masterclasses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
