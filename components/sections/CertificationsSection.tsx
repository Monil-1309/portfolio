"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "HTML Tutorial Module", icon: "🌐" },
  { name: "Search Engine Optimization (SEO) with Squarespace", icon: "🔍" },
  { name: "Modern JavaScript: ES6 Basics", icon: "⚡" },
  { name: "Introduction to Bash Shell Scripting", icon: "💻" },
  { name: "Command Line Linux", icon: "🐧" },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-white dark:bg-slate-900/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-indigo-950/50" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-200/30 dark:border-cyan-800/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-200/30 dark:border-purple-800/30 rounded-full"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <Award className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
