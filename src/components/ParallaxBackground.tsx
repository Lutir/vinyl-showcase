'use client';

import { useEffect, useState } from 'react';
import styles from './ParallaxBackground.module.css';

interface VinylRecord {
  id: number;
  size: number;
  left: number;
  top: number;
  speed: number;
  rotation: number;
  opacity: number;
}

/**
 * ParallaxBackground component
 * Creates floating vinyl records that move at different speeds on scroll
 */
export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [vinyls, setVinyls] = useState<VinylRecord[]>([]);

  // Generate random vinyl records on mount
  useEffect(() => {
    const generateVinyls = () => {
      const records: VinylRecord[] = [];
      const count = 8; // Number of floating vinyls

      for (let i = 0; i < count; i++) {
        records.push({
          id: i,
          size: Math.random() * 100 + 50, // 50-150px
          left: Math.random() * 100, // 0-100%
          top: Math.random() * 100, // 0-100%
          speed: Math.random() * 0.5 + 0.2, // 0.2-0.7
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
        });
      }
      setVinyls(records);
    };

    generateVinyls();
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      {vinyls.map((vinyl) => (
        <div
          key={vinyl.id}
          className={styles.vinyl}
          style={{
            width: `${vinyl.size}px`,
            height: `${vinyl.size}px`,
            left: `${vinyl.left}%`,
            top: `${vinyl.top}%`,
            opacity: vinyl.opacity,
            transform: `translateY(${scrollY * vinyl.speed}px) rotate(${
              vinyl.rotation + scrollY * vinyl.speed * 0.1
            }deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Outer ring */}
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="currentColor"
              opacity="0.3"
            />
            {/* Grooves */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            {/* Label */}
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="currentColor"
              opacity="0.5"
            />
            {/* Center hole */}
            <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
