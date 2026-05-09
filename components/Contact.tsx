"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#121212] py-32 px-6 md:px-20 relative z-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
            Let's build <br className="hidden md:block" />
            <span className="text-zinc-500">something great.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left Column: Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-xl text-zinc-400 max-w-md leading-relaxed mb-12">
                I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase block mb-2">Email</span>
                  <a href="mailto:hello@example.com" className="text-xl text-white hover:text-zinc-300 transition-colors">
                    hello@example.com
                  </a>
                </div>
                
                <div className="flex gap-8 mt-4">
                  <a 
                    href="https://github.com/Raghavkumar099" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-sm text-zinc-600">
              © {new Date().getFullYear()} Raghav Kumar. All rights reserved.
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="What's your name?"
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="mt-4 bg-white text-[#121212] font-semibold rounded-xl px-8 py-4 hover:bg-zinc-200 transition-colors w-full md:w-auto self-start"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
