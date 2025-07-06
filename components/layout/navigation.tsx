"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
]

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
		setIsOpen(false)
	}

	if (!mounted) return null

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
				scrolled
					? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8"> {/* px-2 for mobile */}
				<div className="flex items-center justify-between h-14 sm:h-16"> {/* h-14 for mobile */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center space-x-2 cursor-pointer group"
						onClick={() => scrollToSection("#hero")}
					>
						<motion.div
							className="w-8 h-8 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm" // text-xs for mobile
							whileHover={{ rotate: 5 }}
						>
							MD
						</motion.div>
						<span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"> {/* text-lg for mobile */}
							Monil Desai
						</span>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4 lg:space-x-8"> {/* space-x-4 for mobile */}
						{navItems.map((item, index) => (
							<motion.button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className="relative text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group font-medium text-base lg:text-base" // text-base for mobile
							>
								{item.name}
								<motion.div
									className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"
									whileHover={{ width: "100%" }}
								/>
							</motion.button>
						))}

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 rounded-full p-2"
							>
								<motion.div
									initial={false}
									animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 1.1 }}
									transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
								>
									{theme === "dark" ? (
										<Sun className="h-5 w-5 text-amber-500" />
									) : (
										<Moon className="h-5 w-5 text-indigo-600" />
									)}
								</motion.div>
							</Button>
						</motion.div>
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden flex items-center space-x-1"> {/* space-x-1 for tighter mobile spacing */}
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-full p-2"
							>
								<motion.div
									initial={false}
									animate={{ rotate: theme === "dark" ? 0 : 180 }}
									transition={{ duration: 0.3 }}
								>
									{theme === "dark" ? (
										<Sun className="h-4 w-4 text-amber-500" />
									) : (
										<Moon className="h-4 w-4 text-indigo-600" />
									)}
								</motion.div>
							</Button>
						</motion.div>

						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsOpen(!isOpen)}
								className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-full p-2"
							>
								<motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
									{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
								</motion.div>
							</Button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50"
					>
						<div className="px-2 py-3 space-y-1"> {/* px-2, py-3, space-y-1 for mobile */}
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ x: 10, scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 font-medium text-base" // py-2 px-3 text-base for mobile
								>
									{item.name}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	)
}
