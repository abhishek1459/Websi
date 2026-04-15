import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Real-time Context Awareness",
  "Multi-modal Input Processing",
  "Autonomous Task Execution",
  "Predictive Resource Allocation",
  "Neural Search & Discovery",
  "Seamless API Orchestration",
];

export const Capabilities = () => {
  return (
    <section id="platform" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Beyond Artificial <br />
              <span className="font-serif italic text-blue-400">Intelligence</span>
            </h2>
            <p className="mb-8 text-lg text-white/60 leading-relaxed">
              Aether isn't just a tool; it's a cognitive partner. Our platform
              leverages a proprietary neural architecture that mirrors human
              synaptic efficiency, allowing for faster, more intuitive
              problem-solving.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-white/80">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass aspect-square rounded-[48px] p-8 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-black/40 border border-white/5">
                {/* Abstract Data Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="h-64 w-64 rounded-full border-2 border-dashed border-purple-500/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute h-48 w-48 rounded-full border-2 border-dashed border-blue-500/20"
                  />
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 blur-2xl opacity-40 animate-pulse" />
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-8 left-8 right-8 flex justify-between">
                  <div className="h-2 w-24 rounded-full bg-white/10" />
                  <div className="h-2 w-12 rounded-full bg-purple-500/40" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <div className="h-2 w-full rounded-full bg-white/5" />
                  <div className="h-2 w-2/3 rounded-full bg-white/5" />
                  <div className="h-2 w-1/2 rounded-full bg-white/5" />
                </div>
              </div>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
