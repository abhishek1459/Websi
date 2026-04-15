import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2"
    >
      <div className="glass flex items-center justify-between rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Aether</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Platform", "Pricing", "Company"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="group relative flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95">
          Get Started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.nav>
  );
};
