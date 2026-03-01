import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth out the movement using springs
  const springConfig = { damping: 25, stiffness: 150 };
  const scrollX = useSpring(cursorX, springConfig);
  const scrollY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The Main Glow Blob */}
      <motion.div
        className="fixed top-0 left-0 w-100 h-100 bg-orange-500/10 rounded-full pointer-events-none z-30 blur-[100px] hidden md:block"
        style={{
          x: scrollX,
          y: scrollY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* The Focused Dot (Optional - for precision feel) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CursorGlow;