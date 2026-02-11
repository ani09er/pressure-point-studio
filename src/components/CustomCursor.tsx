import { useEffect, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });
  const dotX = useSpring(0, { damping: 35, stiffness: 400 });
  const dotY = useSpring(0, { damping: 35, stiffness: 400 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    dotX.set(e.clientX);
    dotY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  useEffect(() => {
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .tension-hover, .cursor-interact");
      setIsHovering(!!interactive);
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [onMouseMove]);

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering
              ? "hsl(0, 75%, 45%)"
              : "hsla(0, 0%, 12%, 0.4)",
            borderWidth: isPressed ? 2 : 1,
            scale: isPressed ? 0.85 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            width: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            borderColor: { duration: 0.3 },
            scale: { duration: 0.15 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 6 : 4,
            height: isHovering ? 6 : 4,
            backgroundColor: isHovering
              ? "hsl(0, 75%, 45%)"
              : "hsl(0, 0%, 12%)",
            scale: isPressed ? 2.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            scale: { duration: 0.15 },
            opacity: { duration: 0.2 },
            default: { duration: 0.3 },
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
