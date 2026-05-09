"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Experience",
    category: "Development",
    description: "A headless Shopify build with Next.js and Framer Motion for ultra-smooth interactions.",
  },
  {
    title: "Fintech Dashboard",
    category: "Design & Engineering",
    description: "Real-time data visualization platform with bespoke WebGL elements.",
  },
  {
    title: "Web3 Protocol",
    category: "Creative Dev",
    description: "Immersive, physics-based landing page for a decentralized finance protocol.",
  },
  {
    title: "AI Interface",
    category: "Prototyping",
    description: "Experimental voice and text UI for a large language model application.",
  }
];

export default function Projects() {
  return (
    <section className="bg-[#121212] py-32 px-6 md:px-20 min-h-screen relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Selected Works
          </h2>
          <p className="text-zinc-400 mt-4 text-xl">A collection of recent digital experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-8 md:p-12 transition-all duration-500 hover:border-white/[0.15] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[300px] justify-between">
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 mt-12 max-w-sm group-hover:text-zinc-300 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/[0.04] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
