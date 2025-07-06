"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ui/particle-background";
import FloatingElements from "@/components/ui/floating-elements";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#contact");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-0" // px-2 for mobile
    >
      <ParticleBackground />
      <FloatingElements />

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/10 dark:to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 dark:from-purple-400/10 dark:to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-2 sm:px-4 max-w-full sm:max-w-5xl mx-auto" // px-2 for mobile
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 shadow-lg shadow-cyan-500/10" // px-4 py-2 mb-4 for mobile
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </motion.div>
              <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold">
                Available for work
              </span>
            </motion.div>
            <motion.span
              className="text-base sm:text-lg text-slate-600 dark:text-cyan-400 font-medium" // text-base for mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-tight" // text-4xl mb-6 for mobile
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="bg-gradient-to-r from-slate-900 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-400 dark:to-purple-400 bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Monil Desai
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
            <motion.div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200" // text-2xl for mobile
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                Frontend Developer
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-xs sm:max-w-3xl mx-auto leading-relaxed" // text-base max-w-xs for mobile
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Building exceptional web applications with modern technologies.
              Passionate about creating seamless user experiences and innovative
              digital solutions that make a difference.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20" // gap-4 mb-12 for mobile
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto"
            >
              <a href="/Monil-Resume.pdf" download className="block w-full">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 text-base sm:text-lg font-semibold" // px-6 py-3 text-base for mobile
                >
                  <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToNext()}
                className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg font-semibold bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm" // px-6 py-3 text-base for mobile
              >
                <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2 }}
              className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 p-2 sm:p-3 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 backdrop-blur-sm" // p-2 for mobile
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
