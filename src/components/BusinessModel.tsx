import { motion } from "framer-motion";
import { TrendingUp, Eye, EyeOff, Infinity, Zap, ShieldCheck } from "lucide-react";
import TiltCard from "./TiltCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const BusinessModel = () => {
  const cards = [
    { icon: TrendingUp, title: "The Problem", desc: "Senior remote roles pay exceptionally well — but the competition is brutal. Thousands of strong candidates fight for the same positions. Most go through it alone, limited to one role and one income.", color: "text-destructive" },
    { icon: Zap, title: "How Redwood Solves It", desc: "We apply to high-quality senior remote roles on your behalf, bring interviews directly to you, and support you in real time through every stage of the hiring process — HR screens to final rounds.", color: "text-primary" },
    { icon: ShieldCheck, title: "What You Get", desc: "A dedicated senior engineer and expert hiring manager assigned personally to you. Proprietary AI tools. Real-time interview support. And a team that stays with you long after you're hired.", color: "text-accent" },
    { icon: Infinity, title: "Unlimited Opportunity", desc: "There is no cap. You can land and manage multiple senior roles simultaneously — each one generating real income. The system is designed for it.", color: "text-primary" },
    { icon: Eye, title: "Zero Disruption", desc: "If you have an existing role, nothing changes. Redwood operates entirely around your schedule, with your approval at every step. No risk, no disruption.", color: "text-accent" },
    { icon: EyeOff, title: "Fully Behind the Scenes", desc: "Nobody will ever know we exist. We operate under your identity — your name, your profile, your brand. You are the engineer. We are the engine.", color: "text-primary" },
  ];

  return (
    <section id="business-model" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Our Model
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Built for Engineers Who Want More
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Redwood isn't a side hustle or a gig platform. It's a structured engineering operation built to help you earn at the level you deserve — from multiple positions simultaneously.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={item} style={{ transformPerspective: 800 }}>
              <TiltCard className="group h-full">
                <div className="glass-card flex h-full flex-col rounded-2xl p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.15)]">
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <card.icon size={24} className={card.color} />
                  </motion.div>
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;
