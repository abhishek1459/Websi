import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individuals exploring the future of AI.",
    features: ["Basic Neural Processing", "5GB Secure Storage", "Community Support", "Standard Latency"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "49",
    description: "Advanced features for high-performance professionals.",
    features: ["Advanced Context Awareness", "50GB Secure Storage", "Priority Support", "Ultra-low Latency", "Custom Neural Models"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale intelligence for global organizations.",
    features: ["Unlimited Neural Capacity", "Dedicated Infrastructure", "24/7 Concierge Support", "On-premise Deployment", "Custom API Integration"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Simple, Transparent <span className="text-blue-400">Pricing</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Choose the plan that fits your ambition. No hidden fees, just pure
            intelligence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass relative flex flex-col rounded-[40px] p-10 ${
                plan.highlighted ? "border-purple-500/50 shadow-[0_0_50px_rgba(139,92,246,0.2)]" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-white/40">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20">
                      <Check className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`group flex items-center justify-center gap-2 rounded-full py-4 font-bold transition-all active:scale-95 ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
