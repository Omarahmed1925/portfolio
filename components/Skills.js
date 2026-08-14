"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Server, Wrench } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillGroups = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Dart", "Java", "C++", "Kotlin"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Frameworks",
      skills: ["Flutter", "Clean Architecture", "BLoC/Cubit", "Provider", "MVVM"]
    },
    {
      icon: Server,
      title: "Backend & Databases",
      skills: ["Firebase", "Supabase", "REST APIs", "Spring Boot", "Java EE", "PostgreSQL", "SQL"]
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      skills: ["Git", "Agile/Scrum", "SOLID principles", "Mapbox", "BLE/IoT integration", "Three.js"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-neutral-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * (groupIndex + 1),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-neutral-800/50 rounded-xl group-hover:bg-neutral-800 transition-colors">
                    <group.icon size={24} className="text-neutral-400 group-hover:text-neutral-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * (groupIndex + 1) + (skillIndex * 0.05),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold mb-2">Clean Architecture</p>
            <p className="text-sm text-neutral-500">Design Pattern Focus</p>
          </div>
          <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold mb-2">BLoC/Cubit</p>
            <p className="text-sm text-neutral-500">State Management</p>
          </div>
          <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold mb-2">Real-Time Systems</p>
            <p className="text-sm text-neutral-500">Specialization</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
