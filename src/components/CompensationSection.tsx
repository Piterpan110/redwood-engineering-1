import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { Briefcase, TrendingUp, Rocket, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const roles = [
  { roles: 1, salary: 150, kept: 75, label: "1 Role", badge: "Starting Point", highlight: false },
  { roles: 2, salary: 150, kept: 150, label: "2 Roles", badge: "Double Up", highlight: false },
  { roles: 3, salary: 150, kept: 225, label: "3 Roles", badge: "Most Common", highlight: true },
  { roles: 4, salary: 150, kept: 300, label: "4 Roles", badge: "Top Earners", highlight: false },
];

const CompensationSection = () => {
  return (
    <section id="compensation" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Compensation
          </span>
          <h2 className="mb-6 mx-auto max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">
            More Roles. More Income.<br />
            <span className="gradient-text">No Limits.</span>
          </h2>
          <p className="mb-6 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your income scales with every role you take on. Our developers consistently hold <span className="text-foreground font-semibold">3+ positions</span> simultaneously — and so can you.
          </p>
        </motion.div>

        {/* How it works - simple visual */}
        <motion.div
          className="mx-auto mb-12 max-w-xl rounded-2xl border border-primary/20 bg-primary/5 px-8 py-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">How It Works</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">Every role → 50/50 split</span>
            <span className="text-muted-foreground">×</span>
            <span className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">More roles = more income</span>
          </div>
        </motion.div>

        {/* Income progression cards */}
        <motion.div
          className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {roles.map((role) => (
            <motion.div key={role.roles} variants={item}>
              <TiltCard className="group h-full">
                <div
                  className={`relative rounded-2xl p-7 h-full text-center transition-all duration-500 overflow-hidden ${
                    role.highlight
                      ? "border-2 border-primary/40 bg-primary/10 shadow-[0_0_50px_-12px_hsl(12_55%_50%/0.3)]"
                      : "glass-card hover:border-primary/20 hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.15)]"
                  }`}
                >
                  {role.highlight && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-primary px-4 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                        Most Common
                      </span>
                    </div>
                  )}

                  <div className="mb-4 mt-2 flex items-center justify-center gap-1.5">
                    {Array.from({ length: role.roles }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          role.highlight ? "bg-primary/25" : "bg-primary/15"
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                      >
                        <Briefcase size={14} className="text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="mb-1 font-display text-lg font-semibold text-foreground">{role.label}</p>
                  <p className="mb-4 text-xs text-muted-foreground">
                    {`${role.roles} × $${role.salary}K salary · 50/50 split`}
                  </p>

                  <div className="mb-1">
                    <AnimatedCounter
                      value={role.kept}
                      prefix="$"
                      suffix="K"
                      className={`font-display text-4xl font-bold ${
                        role.highlight ? "gradient-text" : "text-foreground"
                      }`}
                      duration={1.5}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">/year take-home</p>

                  {!role.highlight && (
                    <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {role.badge}
                    </span>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom confidence message + key points */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">
            Our engineers consistently hold <span className="text-foreground font-semibold">3 or more roles</span> at once.
            We're confident you can do the same — and we'll help you get there.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            { icon: Rocket, title: "Zero Upfront Fees", desc: "Nothing to pay. Ever. We invest in your success first." },
            { icon: TrendingUp, title: "Unlimited Potential", desc: "No cap on roles or earnings. The more you grow, the more you earn." },
            { icon: Users, title: "Proven by Our Team", desc: "Our developers already hold 3+ roles. You'll join a system built for it." },
          ].map((card) => (
            <motion.div key={card.title} variants={item}>
              <div className="group glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(12_55%_50%/0.15)]">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }}>
                  <card.icon size={22} className="mb-3 text-primary" />
                </motion.div>
                <h4 className="mb-2 font-display text-base font-semibold text-foreground">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompensationSection;
