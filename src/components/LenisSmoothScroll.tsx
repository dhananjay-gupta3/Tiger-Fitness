import React, { useEffect } from 'react';
import Lenis from 'lenis';

interface LenisSmoothScrollProps {
  children: React.ReactNode;
}

export const LenisSmoothScroll: React.FC<LenisSmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Avoid running smooth scroll on reduced motion or very low-spec devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
