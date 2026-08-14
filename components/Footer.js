"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/Omarahmed1925", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/omar-ahmedanwar/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:oa718307@gmail.com", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium mb-2">Omar Ahmed Anwar</p>
            <p className="text-sm text-neutral-500">
              Flutter Developer • Cairo, Egypt
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-100 transition-colors"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800/50 text-center">
          <p className="text-sm text-neutral-500">
            {currentYear} Omar Ahmed Anwar. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
