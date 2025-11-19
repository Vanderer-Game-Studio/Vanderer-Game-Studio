import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "relative group px-6 py-3 font-orbitron font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 clip-path-slant focus:outline-none inline-flex text-decoration-none cursor-pointer";
  
  const variants = {
    primary: "bg-brand-magenta text-white hover:bg-brand-magentaHover hover:shadow-[0_0_20px_rgba(255,46,99,0.5)] border border-brand-magenta",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-brand-black",
    ghost: "bg-transparent text-brand-gray hover:text-brand-magenta"
  };

  // Slanted effect utilizing skew transform instead of clip-path for better border rendering
  const skewStyle = "transform -skew-x-12";
  const unskewStyle = "transform skew-x-12";

  const Content = () => (
    <>
      <span className={unskewStyle + " flex items-center gap-2"}>
        {Icon && <Icon size={18} />}
        {children}
      </span>
      
      {/* Decorative corner accent for outline variant */}
      {variant === 'outline' && (
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-magenta" />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${skewStyle} ${className}`}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <Content />
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${skewStyle} ${className}`}
      {...props}
    >
      <Content />
    </button>
  );
};

export default Button;