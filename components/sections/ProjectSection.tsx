"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "OpenObserve",
    description:
      "A cloud-native observability platform built with Vue.js, Astro, Tailwind CSS, and Strapi. Features multiple pages with varied views and conditional content display.",
    tech: ["Vue.js", "Astro", "Tailwind CSS", "JavaScript", "Strapi"],
    image: "/o2.png",
    category: "Web Application",
    year: "2024",
    status: "Company Project",
  },
  {
    title: "eKisanMart",
    description:
      "A comprehensive web application aimed to help farmers sell crops, buy seeds, and rent farm equipment. Includes 24/7 expert support and government policy updates.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/ekisanMart.jpeg",
    category: "E-commerce",
    year: "2023",
    status: "Personal Project",
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/40 to-transparent"></div>

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  className="absolute inset-0 bg-slate-500/10 flex items-center justify-center space-x-4"
                >
                  <Button
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </motion.div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-900 dark:text-white text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-slate-900 dark:text-white text-sm">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-900 dark:text-white mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="text-slate-900 dark:text-white hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
