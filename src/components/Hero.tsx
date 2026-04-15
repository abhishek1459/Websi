import { motion } from "motion/react";
import { ArrowRight, Play, Cpu, Zap, Activity, Globe } from "lucide-react";

const StatusCard = ({ icon: Icon, label, value, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`glass absolute flex items-center gap-3 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl ${className}`}
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
        {label}
      </p>
      <p className="text-xs font-mono font-medium text-white/90">{value}</p>
    </div>
  </motion.div>
);

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              Introducing Aether OS v2.0
            </motion.div>

            <h1 className="mb-6 text-6xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              The AI that <br />
              <span className="font-serif italic text-purple-400 text-glow">
                understands
              </span>{" "}
              you.
            </h1>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60">
              Aether is the first neural operating system designed to augment
              human intelligence. Experience a seamless fusion of high-end
              design and advanced artificial cognition.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-bold text-white shadow-2xl shadow-purple-500/20 transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">Start for free</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              <button className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                <Play className="h-5 w-5 fill-white" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Content - 3D Robot Placeholder */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 h-[500px] w-[500px]"
            >
              {/* Pedestal / Platform */}
              <div className="absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" />
              
              {/* Robot Body (Abstract Geometric) */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                {/* Core Sphere */}
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500 via-blue-600 to-purple-900 shadow-[0_0_100px_rgba(139,92,246,0.5)]">
                  <div className="absolute inset-0 rounded-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  {/* Inner Glow */}
                  <div className="absolute inset-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" />
                  {/* Neural Lines */}
                  <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100">
                    <motion.path
                      d="M20,50 Q50,20 80,50"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.path
                      d="M20,50 Q50,80 80,50"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                  </svg>
                </div>

                {/* Floating Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                />
              </motion.div>

              {/* Status Cards */}
              <StatusCard
                icon={Cpu}
                label="Core Status"
                value="ONLINE"
                delay={0.5}
                className="top-10 left-0"
              />
              <StatusCard
                icon={Zap}
                label="Latency"
                value="12ms"
                delay={0.7}
                className="top-40 -right-10"
              />
              <StatusCard
                icon={Activity}
                label="AI Active"
                value="98.4%"
                delay={0.9}
                className="bottom-20 -left-10"
              />
              <StatusCard
                icon={Globe}
                label="Live Sync"
                value="Global"
                delay={1.1}
                className="bottom-0 right-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
