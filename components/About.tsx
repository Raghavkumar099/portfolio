"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "3D & Interactive",
    skills: ["Three.js", "WebGL", "GSAP"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Vercel", "Figma", "AWS"]
  }
];

export default function About() {
  return (
    <section id="about" className="bg-[#121212] py-32 px-6 md:px-20 relative z-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
                About Me
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                I am a passionate Machine Learning Engineer and Creative Full Stack Developer specializing in building intelligent, high-performance digital experiences. I bridge cutting-edge machine learning models with beautiful, interactive user interfaces.
                <br /><br />
                With expertise in developing end-to-end ML solutions, computer vision, and modern web applications, I create systems that not only look exceptional but also think intelligently.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">Technical Skills</h3>
              
              <div className="flex flex-col gap-10">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-zinc-300 font-medium tracking-wide text-sm hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative sticky top-32"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-60" />
              <Image 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                alt="Raghav Kumar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none" />
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
