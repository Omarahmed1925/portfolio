"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl border-b border-neutral-800/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-lg font-medium tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Omar Ahmed Anwar
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
