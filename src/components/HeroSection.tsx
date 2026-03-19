import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Users } from "lucide-react";
import FloatingParticles from "./FloatingParticles";


const HeroSection = () => {
  const textReveal = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <FloatingParticles count={25} />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <motion.div custom={0} initial="hidden" animate="visible" variants={textReveal}>
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase">
              <motion.span
                className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Private Engineering Network
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="mb-6 font-display text-5xl font-bold leading-tight text-foreground md:text-7xl"
          >
            Your Engineering Career,{" "}
            <motion.span
              className="gradient-text inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Multiplied.
            </motion.span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Redwood Engineering Labs is a private network that helps senior
            software engineers land multiple high-paying remote roles — with a
            dedicated team working alongside you every step of the way.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#process"
              className="btn-primary-glow flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-primary-foreground"
              whileHover={{ scale: 1.05, gap: "12px" }}
              whileTap={{ scale: 0.97 }}
            >
              See How It Works <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#book"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary/80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Meeting
            </motion.a>
          </motion.div>

          {/* Trust indicators - horizontal marquee feel */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { icon: Globe, label: "US · Canada · Australia" },
              { icon: Shield, label: "Zero Upfront Fees" },
              { icon: Users, label: "10+ Years Avg. Experience" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  <item.icon size={16} className="text-primary" />
                </motion.div>
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-muted-foreground/30 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
