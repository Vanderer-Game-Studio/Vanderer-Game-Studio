import React, { useEffect, useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-brand-dark border border-brand-magenta w-full max-w-md p-6 shadow-[0_0_30px_rgba(255,46,99,0.3)] transform transition-transform duration-300 scale-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-magenta to-transparent"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-gray hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-brand-magenta">
            <AlertTriangle size={48} />
          </div>
          
          <h3 className="text-2xl font-orbitron font-bold text-white mb-2 uppercase">
            {title || 'System Alert'}
          </h3>
          
          <div className="text-brand-gray font-inter mb-6">
            {children}
          </div>

          <button 
            onClick={onClose}
            className="px-6 py-2 bg-brand-magenta text-white font-orbitron font-bold uppercase hover:bg-white hover:text-brand-black transition-colors skew-x-[-10deg]"
          >
            <span className="block skew-x-[10deg]">Acknowledge</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;