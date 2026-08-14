"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProject = {
    title: "Ambient",
    subtitle: "AI-Powered Indoor Campus Navigation",
    description: "AI-powered indoor campus navigation app using BLE beacon triangulation with Kalman filtering for real-time positioning (1–3m accuracy), turn-by-turn multi-floor routing across buildings.",
    features: [
      "Location-aware AI chatbot with streaming SSE backend",
      "Academic management module with automated 16-week scheduling",
      "Mapbox integration with floor switching and POI search",
      "Multi-layer SharedPreferences caching for offline use"
    ],
    tech: ["Flutter", "BLE", "Mapbox", "Supabase", "Clean Architecture"],
    github: "https://github.com/Omarahmed1925",
    date: "Jul 2026",
    featured: true
  };

  const projects = [
    {
      title: "MoviesApp",
      description: "Movie exploration app with Clean Architecture and BLoC, featuring trending/popular/top-rated categories, genre filtering, full movie details, and keyword search.",
      tech: ["Flutter", "Clean Architecture", "BLoC", "REST API"],
      github: "https://github.com/Omarahmed1925",
      date: "Sep 2025"
    },
    {
      title: "Internir2",
      description: "Cross-platform internship platform connecting students with opportunities, letting companies post listings. Firebase auth, real-time updates, location-based services.",
      tech: ["Flutter", "Firebase", "REST API"],
      github: "https://github.com/Omarahmed1925",
      date: "Nov 2024"
    },
    {
      title: "El Hariry Print Landing Page",
      description: "Three.js-powered landing page with 3D elements, dark mode, and Arabic/English localization for a print business.",
      tech: ["Three.js", "JavaScript", "i18n"],
      link: "https://hariry-print.com",
      github: "https://github.com/Omarahmed1925",
      date: "2024"
    },
    {
      title: "NewsApp",
      description: "Real-time news app integrating NewsAPI with category browsing (Business, Sports, Tech, Health), article details, keyword search, and in-app or browser reading.",
      tech: ["Flutter", "BLoC/Cubit", "NewsAPI"],
      github: "https://github.com/Omarahmed1925",
      date: "Aug 2025"
    },
    {
      title: "EventlyApp",
      description: "Event discovery and management app with category browsing, event creation, and Google Maps integration for exact venue location display.",
      tech: ["Flutter", "Google Maps API", "REST API"],
      github: "https://github.com/Omarahmed1925",
      date: "Jul 2025"
    },
    {
      title: "Islami",
      description: "Full-featured Islamic app with Qur'an tab (114 Surahs), Ahadeeth collection, live Islamic radio streaming with reciters list, and a digital Tasbeeh counter.",
      tech: ["Flutter", "Provider"],
      github: "https://github.com/Omarahmed1925",
      date: "Jul 2025"
    }
  ];

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-10 lg:p-12 hover:border-neutral-700 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <span className="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 mb-6">
                    Featured Project
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">{featuredProject.title}</h3>
                  <p className="text-xl text-neutral-400 mb-6">{featuredProject.subtitle}</p>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    {featuredProject.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {featuredProject.features.map((feature, i) => (
                      <li key={i} className="text-neutral-400 flex">
                        <span className="mr-3 text-neutral-600">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <GitHubIcon size={18} />
                      <span>View on GitHub</span>
                    </motion.a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-neutral-800/70 border border-neutral-700 rounded-lg text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-6">
                    <p className="text-sm text-neutral-500 mb-2">Timeline</p>
                    <p className="text-neutral-300 font-medium">{featuredProject.date}</p>
                  </div>
                  <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-6">
                    <p className="text-sm text-neutral-500 mb-2">Type</p>
                    <p className="text-neutral-300 font-medium">Graduation Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1]
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="h-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap ml-2">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded text-xs text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-100 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <GitHubIcon size={18} />
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-100 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
