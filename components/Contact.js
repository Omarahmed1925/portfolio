"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oa718307@gmail.com",
      href: "mailto:oa718307@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+20) 102-650-1506",
      href: "tel:+201026501506"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Available for freelance projects and full-time opportunities. 
            Let's discuss how I can help bring your mobile app vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + (index * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-xl hover:bg-neutral-900/50 hover:border-neutral-700 transition-all"
                  >
                    <div className="p-3 bg-neutral-800/50 rounded-lg group-hover:bg-neutral-800 transition-colors">
                      <info.icon size={20} className="text-neutral-400 group-hover:text-neutral-300 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{info.label}</p>
                      <p className="text-neutral-300 group-hover:text-neutral-100 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-xl">
                    <div className="p-3 bg-neutral-800/50 rounded-lg">
                      <info.icon size={20} className="text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{info.label}</p>
                      <p className="text-neutral-300">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 bg-neutral-100 text-neutral-950 rounded-xl font-medium hover:bg-neutral-200 transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
