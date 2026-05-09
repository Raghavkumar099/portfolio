"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "ai-healthcare",
    title: "AI in Healthcare",
    category: "Machine Learning",
    description: "ML classification project predicting heart disease using Logistic Regression & Random Forest, including comprehensive EDA and feature analysis.",
    githubUrl: "https://github.com/Raghavkumar099/Ai-in-Healthcare",
  },
  {
    id: "quantum-lead",
    title: "Quantum Lead Trackit",
    category: "AI & Optimization",
    description: "AI-powered traffic control system aimed at maximizing section throughput by optimizing train movements in real-time to reduce delays.",
    githubUrl: "https://github.com/Raghavkumar099/Quantum-Lead-Trackit-",
  },
  {
    id: "netflix-strategy",
    title: "Netflix Content Strategy",
    category: "Data Analysis",
    description: "Exploratory Data Analysis of Netflix datasets exploring content trends, popular genres, ratings, and time-series analysis using Python.",
    githubUrl: "https://github.com/Raghavkumar099/Cracking-the-Code-An-Inside-Look-at-Netflix-s-Content-Strategy",
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation",
    category: "Unsupervised ML",
    description: "Unsupervised machine learning identifying distinct customer groups using clustering to provide rich, actionable insights for targeted marketing.",
    githubUrl: "https://github.com/Raghavkumar099/Customer-Segmentation-with-Clustering",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#121212] py-32 px-6 md:px-20 min-h-screen relative z-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Selected Works
            </h2>
            <p className="text-zinc-400 mt-4 text-xl">A collection of recent digital experiences.</p>
          </div>
          
          <a 
            href="https://github.com/Raghavkumar099" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-colors w-fit"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View GitHub Profile
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="block group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-8 md:p-12 transition-all duration-500 hover:border-white/[0.15] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[250px] justify-between pointer-events-none">
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4 tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div>
                  <p className="text-zinc-400 mt-12 mb-8 max-w-sm group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-white tracking-wide uppercase bg-white/5 border border-white/10 px-5 py-3 rounded-full group-hover:bg-white/10 transition-colors">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </div>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/[0.04] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
