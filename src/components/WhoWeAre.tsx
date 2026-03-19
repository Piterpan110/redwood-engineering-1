import { motion } from "framer-motion";
import { Target, Ban, Handshake } from "lucide-react";
import TiltCard from "./TiltCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const WhoWeAre = () => {
  const points = [
    { icon: Target, title: "What We Are", desc: "A private, structured remote engineering network. We bring interviews, support, and technical teams to exceptional developers — helping them land and manage multiple senior roles simultaneously." },
    { icon: Ban, title: "What We Are Not", desc: "We are not a recruiter, not a staffing agency, and not a job board. We are an engineering team that operates entirely behind the scenes under your identity." },
    { icon: Handshake, title: "How We Operate", desc: "Every application, every communication, and every interview is conducted under your real name and real profile. We work alongside you — never in front of you." },
  ];

  return (
    <section id="who-we-are" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            A Different Kind of Engineering Network
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Redwood Engineering Labs was built on a simple premise: senior engineers deserve better than grinding through hiring alone, limited to a single income stream.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {points.map((point) => (
            <motion.div key={point.title} variants={item}>
              <TiltCard className="group h-full">
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.2)]">
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <point.icon size={24} className="text-primary" />
                  </motion.div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="highlight-quote max-w-3xl">
            "We exist so that exceptional engineers never have to navigate the hiring process alone — and never have to settle for just one opportunity."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
