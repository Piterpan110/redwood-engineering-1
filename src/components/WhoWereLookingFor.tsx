import { motion } from "framer-motion";
import { Flame, Brain, Rocket, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const WhoWereLookingFor = () => {
  return (
    <section id="join" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Who We're Looking For
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Not Just Experience. The Right Engineer.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We don't simply chase years of experience. We look for a specific combination — and if you're reading this far, chances are you already have it.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            { icon: Brain, title: "Solid Technical Foundations", desc: "Real hands-on experience building and shipping software. You know your craft." },
            { icon: Flame, title: "Genuinely Ambitious", desc: "You're driven, hungry, and ready to operate at a senior level — whether you have 3 years or 15." },
            { icon: Rocket, title: "Ready for the Next Step", desc: "Engineers with decades of experience are often settled. Redwood is for those who want to push forward." },
            { icon: Users, title: "Team-Oriented Mindset", desc: "You thrive in a structured system. You understand that every success strengthens the network." },
          ].map((card) => (
            <motion.div key={card.title} variants={item}>
              <TiltCard className="group h-full">
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.2)]">
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <card.icon size={24} className="text-primary" />
                  </motion.div>
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="highlight-quote mx-auto max-w-2xl text-center" style={{ borderLeft: "none", paddingLeft: 0 }}>
            "We are not building a massive agency. We are building a tight, high-caliber network where the quality of people and the quality of outcomes speaks for itself."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWereLookingFor;
