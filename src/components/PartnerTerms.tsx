import { motion } from "framer-motion";
import { CheckCircle2, Lock, DollarSign, LogOut } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const terms = [
  {
    icon: CheckCircle2,
    title: "Eligibility & Conduct",
    items: [
      "Based in the US, Canada, or Australia",
      "Solid technical background with real engineering experience",
      "Professional conduct and reliability in all engagements",
      "Commitment to the team system and communication standards",
    ],
  },
  {
    icon: Lock,
    title: "Confidentiality",
    items: [
      "All operations, tools, and team structures are strictly confidential",
      "Members sign an NDA before onboarding",
      "No disclosure of Redwood's involvement to client companies",
      "Mutual respect for proprietary systems and processes",
    ],
  },
  {
    icon: DollarSign,
    title: "Compensation Terms",
    items: [
      "First role: 100% retained by the member",
      "Additional roles: 50/50 revenue split",
      "No upfront fees or hidden costs",
      "All terms documented in written agreement",
    ],
  },
  {
    icon: LogOut,
    title: "Leaving the Network",
    items: [
      "Members may leave at any time with reasonable notice",
      "Active role obligations must be properly transitioned",
      "Confidentiality obligations remain in effect after departure",
      "Clean, professional exit process for all parties",
    ],
  },
];

const PartnerTerms = () => {
  return (
    <section className="section-dark py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Partner Terms
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Clear Terms. No Surprises.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything is documented, transparent, and designed to protect everyone involved.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {terms.map((term) => (
            <motion.div key={term.title} variants={item}>
              <div className="group glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_-10px_hsl(12_55%_50%/0.1)]">
                <div className="mb-4 flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }}>
                    <term.icon size={22} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{term.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {term.items.map((termItem, i) => (
                    <motion.li
                      key={termItem}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <motion.span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                      />
                      {termItem}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerTerms;
