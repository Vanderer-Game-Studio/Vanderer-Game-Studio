import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <div 
        className={`absolute left-1/2 -translate-x-1/2 w-48 px-3 py-2 bg-brand-black border border-brand-magenta text-center z-50 pointer-events-none transition-all duration-300 ease-out transform ${
          position === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
        } ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2'
        }`}
      >
        {/* Decorative corners */}
        <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-white/50"></div>
        <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-white/50"></div>
        
        {/* Content */}
        <p className="font-mono text-[10px] text-brand-gray leading-tight">
          <span className="text-brand-magenta font-bold block mb-1">/// CLASSIFICATION</span>
          {content}
        </p>

        {/* Arrow Connector */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-black border-r border-b border-brand-magenta transform rotate-45 ${
          position === 'top' ? '-bottom-1.5' : '-top-1.5 border-r-0 border-b-0 border-l border-t'
        }`}></div>
      </div>
    </div>
  );
};

export default Tooltip;