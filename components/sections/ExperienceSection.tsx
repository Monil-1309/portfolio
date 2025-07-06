"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Frontend Intern",
    company: "Kiara TechX",
    location: "Ahmedabad",
    period: "August 2024 – Present",
    description:
      "Working as a Frontend Intern contributing to the development of four projects, including static websites and implementing Role-Based Access Control (RBAC) systems.",
    achievements: [
      "Developed and managed complex multi-level routing structure for e-commerce applications",
      "Implemented dynamic route management for category-specific product listings",
      "Optimized user experience with smooth transitions and fast-loading pages",
      "Built responsive user interfaces and enhanced user experience",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-white dark:bg-slate-900/60"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-950"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold  mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-cyan-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-slate-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
