"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl leading-tight">
            Computer science student focused on building production-grade mobile applications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-lg text-neutral-400 leading-relaxed"
          >
            <p>
              Mobile Software Engineer with a B.Sc. in Computer Science and Artificial Intelligence 
              (Very Good, expected Jun 2026) from Cairo University. I've built five Flutter applications 
              using Clean Architecture, BLoC/Cubit, Firebase, REST APIs, and Google Maps.
            </p>
            <p>
              My experience spans a government-sponsored DEPI program, a Cisco VoIP internship, 
              and multiple full-featured solo projects covering real-time data, state management, 
              and cross-platform UI development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <p className="text-neutral-400 leading-relaxed">
                Building <span className="text-neutral-100 font-medium">Ambient</span>, 
                an AI-powered smart campus navigation app that combines BLE beacon positioning 
                with LLM-driven assistance for real-time indoor navigation with 1–3m accuracy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">5+</p>
                <p className="text-sm text-neutral-500">Flutter Apps Built</p>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">3</p>
                <p className="text-sm text-neutral-500">Certification Programs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
