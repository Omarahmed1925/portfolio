"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building2 } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "Mar 2025 – Sep 2025",
      title: "Flutter Diploma, Mobile App Development",
      organization: "Route IT Training Center 2014",
      location: "Cairo, Egypt",
      description: [
        "Completed a 100-hour intensive diploma covering the Flutter & Dart ecosystem: OOP, Clean Architecture, BLoC/Cubit, Provider, Firebase",
        "Mastered MVVM & Repository patterns, dependency injection, animations, payment integration, mobile ads",
        "Practiced SOLID principles, Agile methodology, clean code, team collaboration via Trello & Adobe XD"
      ],
      tags: ["Flutter", "Clean Architecture", "BLoC", "Firebase"]
    },
    {
      period: "Jun 2024 – Oct 2024",
      title: "Flutter & Android Development Course",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Cairo, Egypt",
      description: [
        "Built multiple mobile UIs through a government-sponsored program, applying Clean Architecture and scalability best practices",
        "Integrated Firebase (auth, real-time updates, cloud storage) and connected REST APIs",
        "Used Provider for state management, introductory Kotlin experience"
      ],
      tags: ["Flutter", "Provider", "REST APIs", "Kotlin"]
    },
    {
      period: "Jul 2023 – Aug 2023",
      title: "Networking and VoIP Intern",
      organization: "IST, Cisco Department",
      location: "Cairo, Egypt",
      description: [
        "Configured routers and switches via Cisco Packet Tracer and CLI",
        "Set up Cisco IP phones with SIP/VoIP call flow",
        "Built virtual machines across multiple domains"
      ],
      tags: ["Cisco", "VoIP", "Networking"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-neutral-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Journey</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * (index + 1),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-neutral-200 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        <span>{exp.organization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 bg-neutral-800/50 px-4 py-2 rounded-lg whitespace-nowrap">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-neutral-400 leading-relaxed flex">
                      <span className="mr-3 text-neutral-600">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-md text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <Building2 size={24} className="text-neutral-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-neutral-400 mb-1">Cairo University</p>
              <p className="text-sm text-neutral-500">
                Bachelor of Computer Science and Artificial Intelligence — Software Engineering
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                Sep 2022 – Jun 2026 (Expected) • Grade: Very Good
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
