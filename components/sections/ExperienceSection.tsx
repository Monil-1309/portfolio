"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Frontend Intern",
    company: "Kiara TechX",
    location: "Ahmedabad",
    period: "August 2024 – Present",
    description:
      "As a Frontend Intern, I've contributed to diverse web development projects, honing my skills across multiple frameworks and architectures.",
    achievements: [
      "Built a comprehensive RBAC (Role-Based Access Control) web application with complex permission structures and dynamic UI rendering based on user roles",
      "Developed multiple static websites with modern design principles and optimal performance",
      "Created dynamic sites with real-time data fetching and interactive UI components",
      "Implemented an e-commerce platform featuring product listings, cart functionality, and checkout flow",
      "Designed and developed my personal portfolio",
      "Optimized all projects for performance, achieving 90+ Lighthouse scores through code splitting and lazy loading",
      "Collaborated with backend teams to design efficient APIs and data structures",
    ],
    achievementParagraph:
      "During my internship, I successfully delivered multiple projects including a robust RBAC web application with dynamic UI rendering based on user roles, several static marketing websites, and a full-featured e-commerce platform with product management. I also built my personal portfolio using various frameworks integrated with Strapi CMS for content management. My work emphasized creating responsive, accessible interfaces while optimizing performance through techniques like code splitting and lazy loading. I collaborated closely with backend teams to design efficient APIs and implemented CI/CD pipelines to streamline development workflows.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-2 sm:px-4 bg-white dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-8 sm:top-20 right-8 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 border border-cyan-200/30 dark:border-cyan-800/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-8 sm:bottom-20 left-8 sm:left-20 w-14 h-14 sm:w-24 sm:h-24 border border-purple-200/30 dark:border-purple-800/30 rounded-full"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 sm:pl-20 pb-8 sm:pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-950"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 dark:bg-slate-800/50 p-4 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-900 dark:text-white">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-slate-900 dark:text-white" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                        <MapPin className="h-4 w-4 text-slate-900 dark:text-white" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-900 dark:text-white mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm sm:text-base">{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-900 dark:text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 sm:space-x-3 text-slate-900 dark:text-white text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-slate-900 dark:text-white mt-2 sm:mt-4 text-sm sm:text-base">
                    {exp.achievementParagraph}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
