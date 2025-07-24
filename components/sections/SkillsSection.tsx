"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Database, Palette, Wrench, Globe, Server } from "lucide-react";

const skills = [
  { name: "JavaScript", category: "Languages", icon: "code" },
  { name: "TypeScript", category: "Languages", icon: "code" },
  { name: "PHP", category: "Languages", icon: "server" },
  { name: "Java", category: "Languages", icon: "code" },
  { name: "React", category: "Frameworks", icon: "globe" },
  { name: "Next.js", category: "Frameworks", icon: "globe" },
  { name: "Vue.js", category: "Frameworks", icon: "globe" },
  { name: "Astro", category: "Frameworks", icon: "globe" },
  { name: "MongoDB", category: "Databases", icon: "database" },
  { name: "SQL", category: "Databases", icon: "database" },
  { name: "Tailwind CSS", category: "Styling", icon: "palette" },
  { name: "Git", category: "Tools", icon: "wrench" },
  { name: "Gitlab", category: "Tools", icon: "server" },
];

const categories = [
  { name: "All", count: skills.length },
  {
    name: "Languages",
    count: skills.filter((s) => s.category === "Languages").length,
  },
  {
    name: "Frameworks",
    count: skills.filter((s) => s.category === "Frameworks").length,
  },
  {
    name: "Databases",
    count: skills.filter((s) => s.category === "Databases").length,
  },
  {
    name: "Styling",
    count: skills.filter((s) => s.category === "Styling").length,
  },
  { name: "Tools", count: skills.filter((s) => s.category === "Tools").length },
];

const getIcon = (iconType: string) => {
  const iconProps = { size: 24, className: "text-cyan-400" };
  switch (iconType) {
    case "code":
      return <Code {...iconProps} />;
    case "database":
      return <Database {...iconProps} />;
    case "palette":
      return <Palette {...iconProps} />;
    case "wrench":
      return <Wrench {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    case "server":
      return <Server {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.name
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
              }`}
            >
              <span className="flex items-center gap-2">
                {category.name}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/90 dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl group-hover:bg-gradient-to-br group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
