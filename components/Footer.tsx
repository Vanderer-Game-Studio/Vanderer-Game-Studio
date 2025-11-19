import React from 'react';
import { Github, Youtube, Mail, Facebook } from 'lucide-react';

// Custom Icon for X (formerly Twitter)
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// Custom Icon for TikTok
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: XIcon, href: "https://x.com", label: "X" },
    { Icon: Github, href: "https://github.com/Vanderer-Game-Studio", label: "GitHub" },
    { Icon: Youtube, href: "https://www.youtube.com/channel/UCNd2Gp4cHGh0F75MpW-kbnA", label: "YouTube" },
    { Icon: Mail, href: "mailto:vardererstudio@gmail.com", label: "Email" },
    { Icon: Facebook, href: "https://www.facebook.com/VardererGameStudio", label: "Facebook" },
    { Icon: TikTokIcon, href: "https://tiktok.com/@varderer", label: "TikTok" },
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-12 border-t-4 border-brand-magenta relative overflow-hidden">
      {/* Geometric Shape for Footer Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-brand-magenta clip-path-trapezoid"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-orbitron font-black text-3xl mb-4 uppercase">VARDERER</h3>
            <p className="text-brand-gray font-inter max-w-sm leading-relaxed mb-6">
              Forging worlds from code and chaos. Join us as we explore the boundaries of interactive storytelling.
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-magenta hover:border-brand-magenta transition-all duration-300 group"
                >
                  <Icon size={18} className="text-brand-gray group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-rajdhani font-bold text-xl mb-6 uppercase tracking-wider text-brand-magenta">Studio</h4>
            <ul className="space-y-3 font-inter text-sm text-brand-gray">
              <li><a href="#games" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">The Team</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-rajdhani font-bold text-xl mb-6 uppercase tracking-wider text-brand-magenta">Legal</h4>
            <ul className="space-y-3 font-inter text-sm text-brand-gray">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-xs font-mono">
            © {new Date().getFullYear()} VARDERER STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-brand-gray text-xs font-mono uppercase">Servers Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;