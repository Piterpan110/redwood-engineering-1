import { motion } from "framer-motion";
import { Users, CalendarCheck, Wallet, Settings } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Team-Powered Delivery",
    desc: "The technical work and all written communications are handled entirely by Redwood's support team.",
  },
  {
    icon: CalendarCheck,
    title: "You Show Up, We Handle the Rest",
    desc: "You simply attend mandatory team meetings and maintain the client relationship.",
  },
  {
    icon: Wallet,
    title: "50% Per Additional Role",
    desc: "For each additional role, you receive 50% of the full salary — without carrying the full technical workload.",
  },
  {
    icon: Settings,
    title: "Zero Stress, Well-Oiled System",
    desc: "Our support team is incredibly experienced. We provide the most optimized and convenient work setup for every member.",
  },
];

const MultipleRolesSection = () => {
  return (
    <section className="section-darker py-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Multiple Roles
          </span>
          <h2 className="mb-6 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">
            How Members Handle Multiple Roles
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            No engineer can genuinely handle multiple senior roles alone — and our members don't have to.
          </p>
        </motion.div>

        {/* Icon rows */}
        <div className="space-y-0">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex items-start gap-6 border-b border-border/30 py-8 md:items-center md:gap-10 md:py-10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                <point.icon size={22} className="text-accent" />
              </div>
              <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-10">
                <h3 className="min-w-[260px] font-display text-lg font-semibold text-foreground md:text-xl">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bold two-column statement */}
        <motion.div
          className="mt-20 grid items-center gap-8 md:grid-cols-2 md:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-display text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-6xl">
            2 Roles.<br />
            One Workload.
          </h3>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This is team policy — not a suggestion. Our support infrastructure handles the heavy lifting so you can scale your income without scaling your stress. Members who were most anxious about this at the start consistently find it the most manageable once the system kicks in.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultipleRolesSection;
