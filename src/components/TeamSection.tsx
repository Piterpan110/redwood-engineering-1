import { motion } from "framer-motion";
import { Settings, Target, ClipboardList, Mail, Handshake, Briefcase, Star, TrendingUp } from "lucide-react";

const supportItems = [
  { icon: Settings, label: "Technical Delivery" },
  { icon: Target, label: "Interview Support" },
  { icon: ClipboardList, label: "Application Management" },
  { icon: Mail, label: "Written Communications" },
];

const frontfacingItems = [
  { icon: Handshake, label: "Client Relations" },
  { icon: Briefcase, label: "Interview & Hiring" },
  { icon: Star, label: "Professional Presence" },
  { icon: TrendingUp, label: "Career Growth" },
];

interface TeamHalfProps {
  video: string;
  poster: string;
  overlayOpacity: string;
  label: string;
  headline: string;
  body: string;
  items: { icon: React.ElementType; label: string }[];
  direction: "left" | "right";
  delay?: number;
}

const TeamHalf = ({ video, poster, overlayOpacity, label, headline, body, items, direction, delay = 0 }: TeamHalfProps) => {
  const xInit = direction === "left" ? -80 : 80;

  return (
    <motion.div
      className="relative min-h-[600px] overflow-hidden md:min-h-[700px]"
      initial={{ opacity: 0, x: xInit }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Mobile fallback image */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />

      {/* Dark overlay */}
      <div className={`absolute inset-0 bg-[hsl(220_30%_8%)] ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[600px] flex-col justify-center p-8 md:min-h-[700px] md:p-12 lg:p-16">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
        <h3 className="mb-5 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {headline}
        </h3>
        <p className="mb-10 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
          {body}
        </p>

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0"
              initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.3 + i * 0.15 }}
            >
              <item.icon size={18} className="shrink-0 text-accent" />
              <span className="text-sm font-medium text-white md:text-base">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-[hsl(220_30%_6%)]">
      {/* Two halves */}
      <div className="relative grid md:grid-cols-2">
        {/* Left — Support Team */}
        <TeamHalf
          video="/support-team.mp4"
          poster="/support-team.png"
          overlayOpacity="opacity-[0.55]"
          label="Behind the Scenes"
          headline="The Engine Room"
          body="Experienced senior engineers, hiring managers, and virtual assistants based in Ukraine and India — all with 10+ years of industry experience. A seasoned, well-oiled team handling everything invisible behind every engagement."
          items={supportItems}
          direction="left"
        />

        {/* Right — Front-Facing Team */}
        <TeamHalf
          video="/frontfacing-team.mp4"
          poster="/frontfacing-team.png"
          overlayOpacity="opacity-45"
          label="Front Facing"
          headline="The Face of Every Engagement"
          body="Software engineers based in the US, Canada, and Australia. They go through the hiring process, build the client relationship, and represent every engagement with professional excellence. The presence, the profile, and the voice these companies are hiring for."
          items={frontfacingItems}
          direction="right"
          delay={0.25}
        />

        {/* Center gold divider — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden -translate-x-1/2 md:flex md:flex-col md:items-center">
          {/* Gold line */}
          <div className="h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />

          {/* Pulsing node */}
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
              <div className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-40" />
              <div className="absolute h-6 w-6 animate-pulse rounded-full bg-accent/20" />
            </div>
            <p className="mt-3 w-48 text-center text-[10px] italic leading-tight text-accent/80">
              Two sides. One system.<br />Every engineer wins.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom closer */}
      <motion.div
        className="bg-[hsl(220_30%_6%)] py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="mx-auto max-w-3xl px-6 text-center font-display text-xl font-bold leading-relaxed text-white md:text-2xl lg:text-3xl">
          A global team built for one purpose — making sure every engineer in our network succeeds.
        </p>
      </motion.div>
    </section>
  );
};

export default TeamSection;
