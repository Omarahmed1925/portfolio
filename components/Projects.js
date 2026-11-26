"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProjectGallery, setCurrentProjectGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (projectIndex, projectName) => {
    setCurrentProjectGallery(projectIndex);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentProjectGallery(null);
  };

  const nextImage = () => {
    if (currentProjectGallery !== null) {
      const project = currentProjectGallery === "featured" ? null : projects[currentProjectGallery];
      const screenshots = currentProjectGallery === "featured" ? featuredProject.screenshots : project?.screenshots || [];
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (currentProjectGallery !== null) {
      const project = currentProjectGallery === "featured" ? null : projects[currentProjectGallery];
      const screenshots = currentProjectGallery === "featured" ? featuredProject.screenshots : project?.screenshots || [];
      setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

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
    featured: true,
    image: "/projects/ambient/screenshot1.png",
    screenshots: [
      "/projects/ambient/screenshot1.png",
      "/projects/ambient/screenshot2.png",
      "/projects/ambient/screenshot3.png",
      "/projects/ambient/screenshot4.png"
    ]
  };

  const projects = [
    {
      title: "Ecommerce",
      description: "Full-featured ecommerce platform with product catalog, shopping cart, wishlist management, authentication, and secure checkout. Built with Flutter, Clean Architecture, and BLoC state management.",
      tech: ["Flutter", "Clean Architecture", "BLoC", "Firebase", "REST API"],
      github: "https://github.com/Omarahmed1925/ecommerce",
      date: "2025",
      image: "/projects/ecommerce/screenshot1.webp",
      screenshots: [
        "/projects/ecommerce/screenshot1.webp",
        "/projects/ecommerce/screenshot2.webp",
        "/projects/ecommerce/screenshot3.webp",
        "/projects/ecommerce/screenshot4.webp",
        "/projects/ecommerce/screenshot5.webp",
        "/projects/ecommerce/screenshot6.webp",
        "/projects/ecommerce/screenshot7.webp",
        "/projects/ecommerce/screenshot8.webp"
      ]
    },
    {
      title: "MoviesApp",
      description: "Movie exploration app with Clean Architecture and BLoC, featuring trending/popular/top-rated categories, genre filtering, full movie details, and keyword search.",
      tech: ["Flutter", "Clean Architecture", "BLoC", "REST API"],
      github: "https://github.com/Omarahmed1925",
      date: "Sep 2025",
      image: "/projects/moviesapp/screenshot1.webp",
      screenshots: [
        "/projects/moviesapp/screenshot1.webp",
        "/projects/moviesapp/screenshot2.webp",
        "/projects/moviesapp/screenshot3.webp",
        "/projects/moviesapp/screenshot4.webp",
        "/projects/moviesapp/screenshot5.webp",
        "/projects/moviesapp/screenshot6.webp",
        "/projects/moviesapp/screenshot7.webp",
        "/projects/moviesapp/screenshot8.webp"
      ]
    },
    {
      title: "NewsApp",
      description: "Real-time news app integrating NewsAPI with category browsing (Business, Sports, Tech, Health), article details, keyword search, and in-app or browser reading.",
      tech: ["Flutter", "BLoC/Cubit", "NewsAPI"],
      github: "https://github.com/Omarahmed1925/newsApp",
      date: "Aug 2025",
      image: "/projects/newsapp/screenshot1.webp",
      screenshots: [
        "/projects/newsapp/screenshot1.webp",
        "/projects/newsapp/screenshot2.webp",
        "/projects/newsapp/screenshot3.webp",
        "/projects/newsapp/screenshot4.webp",
        "/projects/newsapp/screenshot5.webp",
        "/projects/newsapp/screenshot6.webp",
        "/projects/newsapp/screenshot7.webp"
      ]
    },
    {
      title: "EventlyApp",
      description: "Event discovery and management app with category browsing, event creation, and Google Maps integration for exact venue location display.",
      tech: ["Flutter", "Google Maps API", "REST API"],
      github: "https://github.com/Omarahmed1925",
      date: "Jul 2025",
      image: "/projects/eventlyapp/screenshot1.webp",
      screenshots: [
        "/projects/eventlyapp/screenshot1.webp",
        "/projects/eventlyapp/screenshot2.webp",
        "/projects/eventlyapp/screenshot3.webp",
        "/projects/eventlyapp/screenshot4.webp",
        "/projects/eventlyapp/screenshot5.webp",
        "/projects/eventlyapp/screenshot6.webp",
        "/projects/eventlyapp/screenshot7.webp",
        "/projects/eventlyapp/screenshot8.webp"
      ]
    },
    {
      title: "Islami",
      description: "Comprehensive Islamic app featuring the full Quran with 114 Surahs, Hadith collection, live Islamic radio streaming with renowned reciters, and a digital Tasbeeh counter for remembrance.",
      tech: ["Flutter", "Provider", "Local Storage"],
      github: "https://github.com/Omarahmed1925/Islami",
      date: "Jul 2025",
      image: "/projects/islami/screenshot1.webp",
      screenshots: [
        "/projects/islami/screenshot1.webp",
        "/projects/islami/screenshot2.webp",
        "/projects/islami/screenshot3.webp",
        "/projects/islami/screenshot4.webp",
        "/projects/islami/screenshot5.webp",
        "/projects/islami/screenshot6.webp",
        "/projects/islami/screenshot7.webp",
        "/projects/islami/screenshot8.webp"
      ]
    },
    {
      title: "Online Exam App",
      description: "Professional exam management platform with real-time exam delivery, automated grading, student progress tracking, instructor dashboard for exam creation and administration.",
      tech: ["Flutter", "Clean Architecture", "Firebase", "REST API"],
      github: "https://github.com/Omarahmed1925/elevate-exam-app",
      date: "Nov 2025",
      screenshots: []
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
            <div className="relative bg-neutral-900 border-2 border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
                {featuredProject.image && (
                  <div className="relative h-64 lg:h-auto bg-neutral-800 overflow-hidden order-2 lg:order-2 cursor-pointer group/image" onClick={() => openGallery("featured", "Ambient")}>
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity text-sm">View Gallery</span>
                    </div>
                  </div>
                )}
                <div className="p-10 lg:p-12 order-1 lg:order-1">
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
                  <div className="flex items-center gap-4 mb-8 lg:mb-0">
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
                <div className="p-10 lg:p-12 space-y-6 order-3 lg:order-3">
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
              <div className="h-full bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col">
                {project.image && (
                  <div className="relative h-48 bg-neutral-800 overflow-hidden cursor-pointer group/image" onClick={() => openGallery(index, project.title)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity text-sm">View Gallery</span>
                    </div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-neutral-500 whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Modal */}
        {galleryOpen && currentProjectGallery !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center" onClick={closeGallery}>
            <motion.div
              className="relative max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative bg-neutral-900 rounded-2xl overflow-hidden">
                <img
                  src={currentProjectGallery === "featured" ? featuredProject.screenshots[currentImageIndex] : projects[currentProjectGallery].screenshots[currentImageIndex]}
                  alt="Gallery"
                  className="block mx-auto w-auto max-w-full max-h-[80vh] object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation */}
                {(currentProjectGallery === "featured" ? featuredProject.screenshots.length : projects[currentProjectGallery].screenshots.length) > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {currentProjectGallery === "featured" ? featuredProject.screenshots.length : projects[currentProjectGallery].screenshots.length}
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 p-4 bg-neutral-800/50 overflow-x-auto">
                  {(currentProjectGallery === "featured" ? featuredProject.screenshots : projects[currentProjectGallery].screenshots).map((screenshot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                        idx === currentImageIndex ? 'border-blue-500' : 'border-neutral-600 hover:border-neutral-500'
                      }`}
                    >
                      <img src={screenshot} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
