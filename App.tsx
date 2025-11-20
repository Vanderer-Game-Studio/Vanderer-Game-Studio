import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import TeamGrid from './components/TeamGrid';
import Footer from './components/Footer';
import SystemTicker from './components/SystemTicker';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Custom Smooth Scroll Logic with Cubic Easing
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Only intercept hash links on the same page
      if (!anchor || !anchor.hash || !anchor.hash.startsWith('#') || anchor.origin !== window.location.origin) return;

      const targetElement = document.querySelector(anchor.hash);
      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration in ms
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutCubic(progress);

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            // Update URL without scroll jump
            history.pushState(null, "", anchor.hash);
          }
        };

        requestAnimationFrame(animation);
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative transition-opacity duration-1000 ease-in-out ${
        isLoading 
          ? 'opacity-0 h-0 overflow-hidden min-h-0 pointer-events-none' 
          : 'opacity-100 min-h-[100dvh]'
      }`}>
        <Navbar />
        <main>
          <Hero />
          <GameGrid />
          <TeamGrid />
        </main>
        <Footer />
        <SystemTicker />
      </div>
    </>
  );
};

export default App;