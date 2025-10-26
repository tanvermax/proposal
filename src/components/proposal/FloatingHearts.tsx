import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-24 text-pink-400"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1.2}rem`,
          }}
          animate={{
            y: [-20, -window.innerHeight],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
