"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/omarahmedanwar", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://linkedin.com/in/omar-ahmed-anwar", label: "LinkedIn" },
    { icon: Mail, href: "mailto:oa718307@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className="text-sm text-neutral-500 uppercase tracking-wider mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Flutter Developer
              </motion.p>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Building intelligent
                <br />
                <span className="text-neutral-400">mobile experiences</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                Flutter developer specializing in Clean Architecture, BLoC/Cubit state management, 
                and real-time systems. Currently expanding expertise in backend development through 
                a Java Spring Boot course at Route IT Training Center.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-neutral-100 text-neutral-950 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-neutral-700 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-900/50 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Get in Touch
                </motion.a>
              </div>

              <div className="flex items-center gap-6 mt-12">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-neutral-500 hover:text-neutral-100 transition-colors"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <span className="text-neutral-500 text-sm">Currently</span>
                    <span className="text-neutral-300 text-sm font-medium">Java Spring Boot Course</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Location</span>
                      <span className="text-neutral-300">Cairo, Egypt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Education</span>
                      <span className="text-neutral-300">CS & AI, Cairo University</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Graduation</span>
                      <span className="text-neutral-300">June 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown size={24} className="text-neutral-600" />
      </motion.div>
    </section>
  );
}
