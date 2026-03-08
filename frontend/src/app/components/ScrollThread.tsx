import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export function ScrollThread() {
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastScrollPosition = useRef(0);

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      audioContextRef.current = new AudioContext();
    }
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Play soft weaving sound on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const currentScroll = latest;
      const delta = Math.abs(currentScroll - lastScrollPosition.current);

      // Only play sound if there's significant scroll movement
      if (delta > 0.005 && !isScrollingToTop) {
        playWeavingSound();
      }

      lastScrollPosition.current = currentScroll;
    });

    return unsubscribe;
  }, [scrollYProgress, isScrollingToTop]);

  const playWeavingSound = () => {
    if (!audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Soft, high-pitched sound
    oscillator.frequency.value = 800 + Math.random() * 200;
    oscillator.type = 'sine';

    // Very quiet
    gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  // Expose scroll to top function globally
  useEffect(() => {
    (window as any).scrollToTopWithThread = () => {
      setIsScrollingToTop(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setIsScrollingToTop(false);
      }, 1000);
    };
  }, []);

  // Create a wavy thread path that follows the page
  const svgHeight = typeof window !== 'undefined' ? document.documentElement.scrollHeight : 3000;
  const segments = 20;
  const waveAmplitude = 30;
  
  let pathData = `M 50 0`;
  for (let i = 1; i <= segments; i++) {
    const y = (svgHeight / segments) * i;
    const x = 50 + Math.sin(i * 0.5) * waveAmplitude;
    pathData += ` L ${x} ${y}`;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
      <svg
        width="100"
        height={svgHeight}
        viewBox={`0 0 100 ${svgHeight}`}
        className="absolute top-0 left-0"
        style={{ width: '100px', height: '100%' }}
      >
        {/* Thread path */}
        <motion.path
          d={pathData}
          stroke="url(#threadGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="0 1"
          style={{
            pathLength: isScrollingToTop ? 0 : pathLength,
            opacity: useTransform(smoothProgress, [0, 0.05], [0, 1]),
          }}
          transition={{
            pathLength: { duration: isScrollingToTop ? 0.8 : 0, ease: 'easeOut' },
          }}
        />

        {/* Heart knot at the end */}
        <motion.g
          style={{
            opacity: useTransform(smoothProgress, [0.95, 1], [0, 1]),
            scale: useTransform(smoothProgress, [0.95, 1], [0.5, 1]),
          }}
        >
          <motion.path
            d={`M 50 ${svgHeight - 60} 
                C 35 ${svgHeight - 70}, 25 ${svgHeight - 55}, 25 ${svgHeight - 45} 
                C 25 ${svgHeight - 35}, 35 ${svgHeight - 30}, 50 ${svgHeight - 20} 
                C 65 ${svgHeight - 30}, 75 ${svgHeight - 35}, 75 ${svgHeight - 45} 
                C 75 ${svgHeight - 55}, 65 ${svgHeight - 70}, 50 ${svgHeight - 60} Z`}
            fill="#f472b6"
            stroke="#ec4899"
            strokeWidth="2"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.g>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>

        {/* Sparkles along the thread */}
        {[0.2, 0.4, 0.6, 0.8].map((position, index) => (
          <motion.circle
            key={index}
            cx={50 + Math.sin(position * segments * 0.5) * waveAmplitude}
            cy={svgHeight * position}
            r="3"
            fill="#fbbf24"
            style={{
              opacity: useTransform(
                smoothProgress,
                [position - 0.05, position, position + 0.05],
                [0, 1, 0]
              ),
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
