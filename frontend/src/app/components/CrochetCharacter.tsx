import { motion } from 'motion/react';

export function CrochetCharacter({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer md:bottom-12 md:right-12"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="relative group">
        {/* Tooltip */}
        <motion.div
          className="absolute -top-14 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Scroll to top! ✨
          {/* Arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-500 rotate-45" />
        </motion.div>

        {/* Character SVG with glow effect */}
        <div className="relative bg-white rounded-full p-3 shadow-xl">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ball of yarn */}
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              fill="#f472b6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 30 40 Q 50 30 70 40"
              stroke="#ec4899"
              strokeWidth="2"
              fill="none"
              animate={{ d: ['M 30 40 Q 50 30 70 40', 'M 30 40 Q 50 50 70 40', 'M 30 40 Q 50 30 70 40'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M 30 50 Q 50 60 70 50"
              stroke="#ec4899"
              strokeWidth="2"
              fill="none"
              animate={{ d: ['M 30 50 Q 50 60 70 50', 'M 30 50 Q 50 40 70 50', 'M 30 50 Q 50 60 70 50'] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M 30 60 Q 50 50 70 60"
              stroke="#ec4899"
              strokeWidth="2"
              fill="none"
              animate={{ d: ['M 30 60 Q 50 50 70 60', 'M 30 60 Q 50 70 70 60', 'M 30 60 Q 50 50 70 60'] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            {/* Thread tail */}
            <motion.path
              d="M 80 50 Q 90 40 95 30"
              stroke="#f472b6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              animate={{ d: ['M 80 50 Q 90 40 95 30', 'M 80 50 Q 85 35 90 25', 'M 80 50 Q 90 40 95 30'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Sparkle effect */}
            <motion.circle
              cx="35"
              cy="35"
              r="3"
              fill="#fbbf24"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="65"
              cy="65"
              r="2"
              fill="#fbbf24"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-rose-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
      </div>
    </motion.div>
  );
}