import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Games', href: '#games' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-brand-black/95 backdrop-blur-md border-brand-dark py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-magenta flex items-center justify-center transform -skew-x-12 group-hover:rotate-180 transition-transform duration-500">
            <Gamepad2 className="text-white transform skew-x-12" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-black text-2xl tracking-tighter leading-none">
              VARDERER
            </span>
            <span className="text-[10px] font-rajdhani tracking-[0.3em] text-brand-magenta uppercase">
              Variable Wanderers
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="font-rajdhani font-bold text-lg text-brand-gray hover:text-white hover:tracking-widest transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
          <a href="#contact" className="bg-white text-brand-black px-5 py-2 font-orbitron font-bold text-xs uppercase tracking-wide hover:bg-brand-magenta hover:text-white transition-colors duration-300 skew-x-[-12deg]">
            <span className="block skew-x-[12deg]">Status: Online</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-8 relative z-10">
          {navLinks.map((link, idx) => (
            <a 
              key={link.label} 
              href={link.href}
              className="font-orbitron text-3xl font-bold text-white hover:text-brand-magenta transition-colors"
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="w-16 h-1 bg-brand-magenta rounded-full mt-4"></div>
          <p className="font-mono text-brand-gray text-sm mt-4">EST. 2024</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;