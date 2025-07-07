"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "OpenObserve",
    description:
      "OpenObserve is an open-source observability platform that provides real-time insights into your applications and infrastructure. It offers powerful features for monitoring, logging, and tracing, making it easier to troubleshoot issues and optimize performance.",
    image: "/o2.png",
    category: "Web Application",
    year: "2024",
    tech: ["Next Js", "TypeScript", "STRAPI"],
    status: "Company Project",
    learnMoreLink: "https://openobserve.dev",
    githubLink: "https://github.com/openobserve/openobserve",
    viewLink: "https://openobserve.ai/",
  },
  {
    title: "eKisanMart",
    description:
      "eKisanMart is a modern e-commerce platform designed to connect farmers directly with consumers. It allows users to buy fresh produce and agricultural products online, promoting local farming and sustainable practices.",
    image: "/ekisanMart.jpeg",
    category: "E-commerce",
    year: "2023",
    tech: ["HTML", "CSS", "JS", "MySQL", "PHP"],
    status: "Personal Project",
    // learnMoreLink: "https://ekisanmart.example.com",
    // githubLink: "https://github.com/yourprofile/ekisanmart",
    // viewLink: "https://ekisanmart.example.com/demo",
  },
  {
    title: "elixLifeStyle",
    description:
      "ElixLifestyle is a modern ladies fashion showcase platform where users can explore a variety of fashion categories and connect directly with vendors. Built for product discovery without integrated payment, it emphasizes style and user experience.",
    image: "/elixlifestyle.png",
    category: "Fashion / Showcase",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase"],
    status: "Personal Project",
    // learnMoreLink: "https://elixlifestyle.example.com",
    // githubLink: "https://github.com/yourprofile/elixlifestyle",
    // viewLink: "https://elixlifestyle.example.com/demo",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio website showcases my skills, projects, and experience in web development. It features a modern design with smooth animations and responsive layout, built using Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    category: "Portfolio",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "Personal Project",
    // learnMoreLink: "https://elixlifestyle.example.com",
    // githubLink: "https://github.com/yourprofile/elixlifestyle",
    // viewLink: "https://elixlifestyle.example.com/demo",
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
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
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
                  src={project?.image}
                  alt={project?.title || "Project image"}
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
                  {project?.viewLink && (
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </a>
                  )}

                  {project?.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </motion.div>

                {/* Status Badge */}
                {project?.status && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-900 dark:text-white text-sm font-medium">
                    {project?.category || "Project"}
                  </span>
                  <span className="text-slate-900 dark:text-white text-sm">
                    {project?.year || ""}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project?.title || "Untitled Project"}
                </h3>

                <p className="text-slate-900 dark:text-white mb-4 leading-relaxed">
                  {project?.description || "No description available."}
                </p>

                {/* Tech Stack */}
                {project?.tech?.length > 0 && (
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
                )}

                {project?.learnMoreLink && (
                  <a
                    href={project.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="ghost"
                      className="text-slate-900 dark:text-white hover:text-cyan-400 transition-colors duration-300 flex items-center"
                    >
                      Learn More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
