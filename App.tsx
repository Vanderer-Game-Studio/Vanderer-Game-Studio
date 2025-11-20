import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import TeamGrid from './components/TeamGrid';
import Footer from './components/Footer';

// Optional Preloader Component
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(onComplete, 800);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-brand-black z-[100] flex flex-col items-center justify-center">
       <div className="text-brand-magenta font-orbitron text-4xl font-black mb-4 glitch-text" data-text="VARDERER">VARDERER</div>
       <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
         <div className="h-full bg-brand-magenta transition-all duration-200" style={{width: `${Math.min(progress, 100)}%`}}></div>
       </div>
       <div className="mt-2 font-mono text-xs text-brand-cyan">INITIALIZING_SYSTEM... {Math.floor(progress)}%</div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-magenta selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GameGrid />
        <TeamGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;