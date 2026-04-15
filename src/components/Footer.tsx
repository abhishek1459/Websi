import { motion } from "motion/react";
import { ArrowRight, Twitter, Github, Linkedin } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-[64px] bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-12 text-center md:p-24"
        >
          <div className="relative z-10">
            <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Ready to transcend?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/60">
              Join thousands of teams already building the future with Aether
              OS. Experience the next generation of intelligence today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-all hover:bg-white/90 active:scale-95">
                Get Started Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Aether</span>
            </div>
            <p className="mb-8 max-w-xs text-white/40 leading-relaxed">
              The next generation neural operating system. Augmenting human
              intelligence through elegant design and advanced cognition.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/5"
                >
                  <Icon className="h-5 w-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-white/40">Product</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-white/40">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-white/20">
            © 2026 Aether AI Technologies Inc. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="text-xs text-white/20 hover:text-white/40">Status</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40">Security</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
