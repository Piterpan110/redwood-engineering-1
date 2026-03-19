import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);

    const watchInteractives = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    watchInteractives();
    const observer = new MutationObserver(watchInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-primary/40 mix-blend-difference"
        style={{
          x,
          y,
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary mix-blend-difference"
        style={{
          x,
          y,
          width: hovered ? 8 : 5,
          height: hovered ? 8 : 5,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
