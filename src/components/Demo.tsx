import { motion } from "motion/react";

export const Demo = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          >
            The Interface of <span className="text-blue-400">Tomorrow</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            A minimalist workspace that disappears when you don't need it, and
            anticipates your next move before you even think of it.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Mockup Frame */}
          <div className="glass overflow-hidden rounded-[40px] p-4 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-video overflow-hidden rounded-[24px] bg-[#0a0a0a] border border-white/5">
              {/* Mockup Content */}
              <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/5 p-6 space-y-6 hidden md:block">
                  <div className="h-8 w-8 rounded-lg bg-white/5" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-3 w-full rounded-full bg-white/5" />
                    ))}
                  </div>
                </div>
                
                {/* Main Area */}
                <div className="flex-1 p-8 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-32 rounded-full bg-white/10" />
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-32 rounded-2xl bg-white/5 border border-white/5" />
                    ))}
                  </div>
                  
                  <div className="h-64 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8">
                    <div className="h-4 w-1/3 rounded-full bg-purple-500/20 mb-4" />
                    <div className="space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/5" />
                      <div className="h-2 w-full rounded-full bg-white/5" />
                      <div className="h-2 w-2/3 rounded-full bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-600/20 blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-600/20 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
};
