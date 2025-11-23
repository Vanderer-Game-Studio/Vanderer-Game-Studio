import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Play, UserPlus, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Code is our Compass. Chaos is our Map.";
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Abstract Background Grid & Shapes */}
      <div className="absolute inset-0 bg-brand-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        {/* Centered background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-2/3 w-96 h-96 bg-brand-magenta rounded-full blur-[150px] opacity-20 animate-pulse-fast"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center relative mt-16 md:mt-0">
        {/* Terminal Decor */}
        <div className="mb-6 flex items-center gap-2 text-brand-magenta/80 font-mono text-xs md:text-sm bg-brand-dark/50 px-4 py-1 rounded-full border border-brand-magenta/30 backdrop-blur-sm">
          <Terminal size={14} />
          <span>SYSTEM.INIT(VARDERER_PROTOCOL)</span>
        </div>

        {/* Main Headline with Glitch Effect */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tighter mb-4 uppercase text-white glitch-text break-all md:break-normal select-none" data-text="VARDERER">
          VARDERER
        </h1>

        {/* Typing Subheadline */}
        <div className="h-12 md:h-16 mb-4 md:mb-8 flex items-center justify-center">
          <p className="text-lg md:text-3xl font-rajdhani font-medium text-brand-gray tracking-widest max-w-[90vw]">
            <span className="text-brand-magenta mr-2">&gt;</span>
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-brand-magenta`}>_</span>
          </p>
        </div>

        <p className="max-w-2xl text-brand-gray mb-10 font-inter leading-relaxed text-base md:text-lg px-4">
          We forge digital frontiers where variable mechanics meet wandering narratives. 
          Experience games that adapt to your journey, not the other way around.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-6 md:px-0">
          <Button 
            href="#games" 
            icon={Play} 
            className="w-full md:w-auto justify-center btn-glitch-hover"
          >
            Play Our Games
          </Button>
          <Button 
            href="#team" 
            variant="outline" 
            icon={UserPlus} 
            className="w-full md:w-auto justify-center btn-glitch-hover"
          >
            Join The Wanderers
          </Button>
        </div>

        {}
        <a 
          href="#games" 
          className="mt-12 md:mt-16 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 animate-bounce cursor-pointer group"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-orbitron group-hover:text-brand-magenta transition-colors">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-magenta to-transparent group-hover:h-16 transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;