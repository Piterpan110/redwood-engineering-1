import { motion } from "framer-motion";
import { Bot, Users, FileText, Target, MessageSquare, BarChart3 } from "lucide-react";

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const SupportSection = () => {
  const aiItems = [
    { icon: FileText, label: "Resume & profile optimization tailored to each target role" },
    { icon: Target, label: "Intelligent job matching and application targeting" },
    { icon: MessageSquare, label: "Interview preparation and real-time technical support" },
    { icon: BarChart3, label: "Performance analytics and role management tooling" },
  ];

  const humanItems = [
    { icon: Users, label: "A senior software engineer assigned personally to you" },
    { icon: Target, label: "An expert hiring manager guiding every application and interview" },
    { icon: MessageSquare, label: "Real-time support across every interview stage — HR to final round" },
    { icon: BarChart3, label: "Ongoing technical delivery and role management after you're hired" },
  ];

  return (
    <section id="support" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            How We Support You
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Two Pillars. One Unstoppable System.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our support system was built and refined over more than a year of research and real-world testing. It combines cutting-edge AI with deeply experienced humans — working together to give you every possible advantage.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* AI Pillar */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group"
          >
            <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_50px_-15px_hsl(12_55%_50%/0.2)]">
              <motion.div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Bot size={28} className="text-primary" />
              </motion.div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
                Proprietary AI Tools
              </h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Purpose-built in-house, not off-the-shelf. Every tool is designed specifically for the engineering hiring process.
              </p>
              <div className="space-y-4">
                {aiItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listItem}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring" }}>
                      <item.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                    </motion.div>
                    <span className="text-sm text-secondary-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Human Pillar */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="group"
          >
            <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_-15px_hsl(35_80%_55%/0.2)]">
              <motion.div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10"
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Users size={28} className="text-accent" />
              </motion.div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
                Dedicated Human Support
              </h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Every member gets their own team — real people who know your background, your goals, and your roles inside and out.
              </p>
              <div className="space-y-4">
                {humanItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listItem}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: -15 }} transition={{ type: "spring" }}>
                      <item.icon size={18} className="mt-0.5 shrink-0 text-accent" />
                    </motion.div>
                    <span className="text-sm text-secondary-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
