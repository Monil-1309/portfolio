"use client";
import emailjs from "@emailjs/browser";

import type React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        "service_3lg83ms", // e.g., service_xxx123
        "template_1xxl3jz", // e.g., template_xyz789
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "yY9e6fC5awRKJE6VC" // e.g., v12xxxAPIKEY
      );

      setFormStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Monil-1309",
      label: "GitHub",
      color: "hover:bg-slate-700",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/monil-desai-a413a9217/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 sm:py-24 px-2 sm:px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-4 right-4 sm:top-10 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 border-2 border-cyan-200/20 dark:border-cyan-800/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 border-2 border-purple-200/20 dark:border-purple-800/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.div
            className="w-20 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-xs sm:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            <div>
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                Get in Touch
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about web development and
                technology.
              </motion.p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "monildesai580@gmail.com",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91-9099737019",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ahmedabad, India",
                  color: "from-green-500 to-emerald-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white/80 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group cursor-pointer"
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {item.label}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-6 sm:pt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Connect with me
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.9 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium text-sm sm:text-base">
                      {social.label}
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 dark:bg-slate-800/50 p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 sm:h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 rounded-xl text-base sm:text-lg transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 sm:h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 rounded-xl text-base sm:text-lg transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 resize-none rounded-xl text-base sm:text-lg transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-14 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl text-base sm:text-lg font-semibold"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                          />
                          Sending Message...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <Send className="mr-3 h-6 w-6" />
                          Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Form Status */}
              <AnimatePresence>
                {formStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`flex items-center space-x-3 p-6 rounded-xl ${
                      formStatus.type === "success"
                        ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.1,
                      }}
                    >
                      {formStatus.type === "success" ? (
                        <CheckCircle className="h-6 w-6 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-6 w-6 flex-shrink-0" />
                      )}
                    </motion.div>
                    <p className="font-medium">{formStatus.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
