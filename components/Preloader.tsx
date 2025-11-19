import React, { useEffect, useState } from 'react';
import { Gamepad2, Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('INITIALIZING KERNEL...');

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15;
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Cycle through "tech" messages
    const textInterval = setInterval(() => {
      const messages = [
        'LOADING ASSETS...',
        'DECRYPTING FILES...',
        'ESTABLISHING UPLINK...',
        'SYNCING DATABASE...',
        'RENDERING VOID...'
      ];
      setBootText(messages[Math.floor(Math.random() * messages.length)]);
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  // Trigger completion when progress hits 100
  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 800); // Short delay at 100% before unmounting
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center h-[100dvh] w-screen overflow-hidden touch-none">
      {/* Glitchy Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Logo */}
        <div className="mb-12 relative">
          <div className="w-20 h-20 bg-brand-magenta flex items-center justify-center animate-pulse transform hover:scale-105 transition-transform">
             <Gamepad2 size={40} className="text-white" />
          </div>
          <div className="absolute top-0 left-0 w-20 h-20 bg-brand-magenta/50 blur-xl animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-orbitron font-black text-white tracking-tighter mb-8 glitch-text text-center" data-text="VARDERER">
          VARDERER
        </h1>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-brand-dark border border-brand-gray/30 relative overflow-hidden mb-4">
          <div 
            className="h-full bg-brand-magenta shadow-[0_0_10px_#FF2E63] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status Text */}
        <div className="w-full flex justify-between font-mono text-xs text-brand-magenta">
          <span className="flex items-center gap-2">
            <Terminal size={12} />
            {bootText}
          </span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;