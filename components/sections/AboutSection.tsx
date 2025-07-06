"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Code, Coffee, Award, Users, Lightbulb } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "1+", label: "Years Experience", icon: Award },
    { number: "5+", label: "Projects Completed", icon: Code },
    { number: "5+", label: "Technologies", icon: Lightbulb },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 px-4 bg-white dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg"
              >
                <MapPin className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </motion.div>
              <span className="text-lg font-medium">Ahmedabad, India</span>
            </div>

            <div className="space-y-6">
              <motion.p
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                I'm a passionate Frontend Developer with expertise in building
                modern, responsive web applications. Currently pursuing B.E. in
                Information Technology at Silver Oak University with a CGPA of
                9.5.
              </motion.p>

              <motion.p
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                My journey in web development has led me to work with
                cutting-edge technologies like React, Next.js, and Vue.js. I
                specialize in creating seamless user experiences and have
                hands-on experience with RBAC systems, multi-level routing, and
                dynamic product rendering.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                {
                  icon: Code,
                  title: "Clean Code",
                  desc: "Writing maintainable and scalable code",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  icon: Coffee,
                  title: "Problem Solver",
                  desc: "Turning complex problems into simple solutions",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                  >
                    MD
                  </motion.div>
                  <motion.p
                    className="text-slate-700 dark:text-slate-300 text-xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    Frontend Developer
                  </motion.p>
                  <motion.p
                    className="text-slate-500 dark:text-slate-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                  >
                    Ahmedabad, India
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/80 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 10 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
