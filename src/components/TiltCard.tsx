import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(x, [0, 1], [0, 100]);
  const glareY = useTransform(y, [0, 1], [0, 100]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, hsl(12 55% 50% / 0.08), transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
};

export default TiltCard;
