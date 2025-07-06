"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Cpu, Globe, Smartphone } from "lucide-react"

const floatingIcons = [
  { icon: Code2, delay: 0, x: "10%", y: "20%" },
  { icon: Palette, delay: 0.5, x: "80%", y: "30%" },
  { icon: Zap, delay: 1, x: "15%", y: "70%" },
  { icon: Cpu, delay: 1.5, x: "85%", y: "60%" },
  { icon: Globe, delay: 2, x: "20%", y: "50%" },
  { icon: Smartphone, delay: 2.5, x: "75%", y: "80%" },
]

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{
            delay: item.delay,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
          }}
          className="hidden md:block"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="p-4 bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-lg"
          >
            <item.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
