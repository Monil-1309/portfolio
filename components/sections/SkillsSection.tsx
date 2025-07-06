"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "JavaScript", level: 90, category: "Languages" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "PHP", level: 75, category: "Languages" },
  { name: "Java", level: 70, category: "Languages" },
  { name: "React", level: 95, category: "Frameworks" },
  { name: "Next.js", level: 90, category: "Frameworks" },
  { name: "Vue.js", level: 85, category: "Frameworks" },
  { name: "Astro", level: 80, category: "Frameworks" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "SQL", level: 85, category: "Databases" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "Git", level: 90, category: "Tools" },
];

const categories = [
  "All",
  "Languages",
  "Frameworks",
  "Databases",
  "Styling",
  "Tools",
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-cyan-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                />
              </div>

              <span className="text-sm text-slate-400">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
