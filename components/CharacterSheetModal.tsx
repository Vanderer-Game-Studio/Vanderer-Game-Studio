import React, { useEffect, useState } from 'react';
import { TeamMember } from '../types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { X, Hexagon, Cpu, ChevronRight } from 'lucide-react';

interface CharacterSheetModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterSheetModal: React.FC<CharacterSheetModalProps> = ({
  member,
  isOpen,
  onClose,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 50);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      setAnimate(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-6xl bg-brand-dark border border-brand-gray/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 transform flex flex-col md:flex-row ${
          animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0% 15%, 2% 0)',
        }}
      >
        {/* Top Decor Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta via-brand-cyan to-brand-magenta opacity-50 z-20"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-brand-gray hover:text-white hover:rotate-90 transition-all duration-300"
        >
          <X size={32} />
        </button>

        {/* LEFT COLUMN: VISUAL IDENTITY */}
        <div className="w-full md:w-1/3 bg-black/60 p-6 md:p-10 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/5 relative">
            {/* Background scanlines specific to this panel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

            <div className="absolute top-4 left-4 text-xs font-mono text-brand-magenta opacity-70 z-10">
              ID: {member.id.padStart(4, '0')} // REF_UNIT
            </div>
            
            {/* Hexagon Avatar Container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 mt-8 group z-10">
              <div className="absolute inset-0 bg-brand-magenta/20 animate-pulse rounded-full filter blur-xl"></div>
              
              {/* Spinning border effect */}
              <div className="absolute inset-[-4px] rounded-full border border-brand-cyan/30 border-dashed animate-[spin_10s_linear_infinite]"></div>

              <div className="w-full h-full relative overflow-hidden border-4 border-brand-gray group-hover:border-brand-magenta transition-colors duration-300 bg-black clip-hexagon">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-black border border-brand-magenta px-4 py-1 shadow-[0_0_15px_rgba(255,46,99,0.4)]">
                 <span className="text-brand-magenta font-orbitron font-bold text-xl whitespace-nowrap">LVL {member.level}</span>
              </div>
            </div>

            <div className="text-center space-y-1 w-full z-10">
               <h2 className="text-2xl md:text-4xl font-black font-orbitron text-white uppercase tracking-wider leading-none">
                {member.name.split(' ')[0]}
               </h2>
               {member.name.split(' ')[1] && (
                 <span className="text-brand-gray font-rajdhani uppercase text-lg block tracking-widest">
                   {member.name.split(' ').slice(1).join(' ')}
                 </span>
               )}
               
               <div className="mt-4 inline-block border border-brand-cyan/30 bg-brand-cyan/5 px-3 py-1">
                 <h3 className="text-sm md:text-base font-rajdhani text-brand-cyan uppercase tracking-[0.2em] font-bold">
                   {member.class}
                 </h3>
               </div>
            </div>

            <div className="mt-8 w-full bg-white/5 p-4 border border-white/10 z-10 relative overflow-hidden group-hover:border-brand-magenta/50 transition-colors">
              <div className="absolute top-0 right-0 p-1">
                <Cpu size={16} className="text-brand-gray opacity-50" />
              </div>
              <h4 className="text-[10px] font-orbitron text-brand-gray mb-3 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-magenta inline-block"></span>
                Equipment / Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.equipment.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-black border border-brand-gray/30 text-[10px] md:text-xs font-mono text-gray-300 hover:border-brand-cyan hover:text-brand-cyan transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>

        {/* RIGHT COLUMN: STATS & DATA */}
        <div className="w-full md:w-2/3 p-6 md:p-10 bg-brand-black relative overflow-y-auto max-h-[60vh] md:max-h-[800px]">
             {/* Texture Background */}
             <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-dark via-brand-black to-brand-black opacity-50 pointer-events-none"></div>
            
             {/* Content Container */}
             <div className="relative z-10 flex flex-col h-full">
                
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  {/* Radar Chart */}
                  <div className="h-64 w-full lg:w-1/2 relative bg-brand-dark/30 border border-white/5 rounded p-2">
                     <div className="absolute top-2 left-2 text-[10px] font-mono text-brand-gray flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       /// ANALYTICS_MODULE_V1.2
                     </div>
                     <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={member.stats}>
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#8892b0', fontSize: 10, fontFamily: 'Orbitron' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                          name="Stats"
                          dataKey="A"
                          stroke="#ff2e63"
                          strokeWidth={2}
                          fill="#ff2e63"
                          fillOpacity={0.4}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Attributes List */}
                  <div className="flex-1 space-y-3 font-rajdhani">
                     <h3 className="text-lg font-bold text-white border-b border-brand-magenta/50 pb-2 mb-4 flex justify-between items-end">
                       <span>CORE ATTRIBUTES</span>
                       <span className="text-xs font-mono text-brand-gray">MAX_CAP_100</span>
                     </h3>
                     {member.stats.map((stat, idx) => (
                       <div key={stat.subject} className="flex items-center justify-between group" style={{ animationDelay: `${idx * 100}ms` }}>
                         <span className="text-brand-gray font-semibold text-sm group-hover:text-white transition-colors">{stat.subject}</span>
                         <div className="flex items-center gap-3 w-2/3">
                           <div className="h-1.5 w-full bg-brand-dark border border-white/10 relative overflow-hidden">
                             <div 
                               className="h-full bg-brand-cyan shadow-[0_0_8px_rgba(8,217,214,0.6)]" 
                               style={{ width: `${(stat.A / stat.fullMark) * 100}%` }}
                             ></div>
                           </div>
                           <span className="text-brand-cyan text-sm font-mono w-8 text-right font-bold">{stat.A}</span>
                         </div>
                       </div>
                     ))}
                  </div>
                </div>

                <div className="mt-4 flex-grow">
                  <h3 className="text-lg font-bold font-orbitron text-white border-b border-brand-magenta/50 pb-2 mb-4">
                     DATA LOGS
                  </h3>
                  <div className="bg-brand-dark/50 border border-white/10 p-6 font-mono text-sm text-brand-gray leading-relaxed relative overflow-hidden min-h-[200px]">
                     <div className="absolute top-0 right-0 p-2 opacity-20">
                        <Hexagon size={64} className="text-brand-magenta" />
                     </div>
                     
                     <p className="mb-4 flex gap-2">
                       <span className="text-brand-magenta">>></span> 
                       <span className="text-white">SUBJECT ROLE:</span> {member.role}
                     </p>
                     
                     <p className="mb-6 text-gray-400">
                       {member.description || "No additional data logs found for this unit. Creating generic profile based on class type assignment..."}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        <div>
                          <h4 className="text-[10px] text-brand-cyan uppercase mb-1 tracking-wider">Special Ability</h4>
                          <p className="text-white font-bold font-rajdhani text-lg">{member.specialty}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] text-brand-cyan uppercase mb-1 tracking-wider">Class Definition</h4>
                          <p className="text-white font-bold font-rajdhani text-lg">{member.classDescription}</p>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-end">
                  <button className="px-8 py-3 border border-brand-cyan text-brand-cyan font-orbitron font-bold text-sm uppercase tracking-widest hover:bg-brand-cyan hover:text-black transition-all clip-button flex items-center gap-2 group">
                    <span>View Portfolio</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-3 bg-brand-magenta text-white font-orbitron font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-magenta transition-all clip-button shadow-[0_0_20px_rgba(255,46,99,0.4)]">
                    Contact Unit
                  </button>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheetModal;