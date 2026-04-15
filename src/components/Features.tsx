import { motion } from "motion/react";
import { Shield, Zap, Sparkles } from "lucide-react";

const features = [
  {
    title: "Neural Processing",
    description: "Advanced cognitive models that adapt to your unique workflow and decision-making patterns.",
    icon: Zap,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Secure by Design",
    description: "End-to-end encrypted intelligence ensures your data remains private and strictly yours.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Infinite Scale",
    description: "Deploy across your entire organization with zero latency and seamless cloud integration.",
    icon: Sparkles,
    color: "from-purple-600 to-pink-500",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Engineered for the <span className="text-purple-400">Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-white/60"
          >
            Aether OS combines cutting-edge hardware acceleration with next-gen
            AI to deliver an unparalleled computing experience.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass group relative overflow-hidden rounded-[32px] p-8 transition-all hover:border-white/20"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg shadow-purple-500/20`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle Gradient Glow on Hover */}
              <div className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-[60px] transition-opacity group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
