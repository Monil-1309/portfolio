"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-900 border-t border-slate-800 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-2 text-slate-400 mb-4"
        >
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>by Monil Desai</span>
        </motion.div>

        <p className="text-slate-500 text-sm">© 2024 Monil Desai. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
