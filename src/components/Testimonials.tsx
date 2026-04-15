import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena Vance",
    role: "CTO at Nexus Labs",
    content: "Aether has completely transformed how our engineering team operates. It's not just an assistant; it's a force multiplier.",
    avatar: "https://picsum.photos/seed/elena/100/100",
  },
  {
    name: "Marcus Thorne",
    role: "Design Director, Prism",
    content: "The attention to detail in the interface is matched only by the intelligence of the underlying models. Truly premium.",
    avatar: "https://picsum.photos/seed/marcus/100/100",
  },
  {
    name: "Sarah Chen",
    role: "Founder of Aetheria",
    content: "Finally, an AI platform that respects privacy while delivering world-class performance. Aether is the gold standard.",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Trusted by the <br />
              <span className="text-purple-400">Visionaries</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative rounded-[32px] p-8"
            >
              <Quote className="mb-6 h-8 w-8 text-purple-500/40" />
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border border-white/10 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
