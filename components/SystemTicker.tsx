import React from 'react';
import { Cpu, Wifi, Battery, ShieldCheck } from 'lucide-react';

const SystemTicker: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-brand-black border-t border-brand-dark h-8 flex items-center overflow-hidden font-mono text-xs text-brand-gray">
      <div className="flex items-center px-4 bg-brand-dark h-full border-r border-brand-gray/20 z-10 relative">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
        <span className="font-bold text-white">SYS.ONLINE</span>
      </div>
      
      <div className="flex whitespace-nowrap animate-[glitch_10s_linear_infinite]">
        <div className="flex items-center gap-12 animate-marquee px-4">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2">
                <Cpu size={12} className="text-brand-magenta" /> 
                CORE_TEMP: 42°C // OPTIMAL
              </span>
              <span className="flex items-center gap-2">
                <Wifi size={12} className="text-blue-400" /> 
                UPLINK_ESTABLISHED: SECTOR_7
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-green-400" /> 
                FIREWALL: ACTIVE (0 THREATS)
              </span>
              <span className="flex items-center gap-2 text-white">
                 /// CURRENT_OBJECTIVE: DEPLOY_PROJECT_NEON ///
              </span>
              <span className="flex items-center gap-2">
                <Battery size={12} className="text-yellow-400" /> 
                POWER: 98%
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* CSS Animation for Marquee embedded for simplicity in this component if global isn't enough, 
          but actually standard translate works best. Let's use a simpler transform approach. */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SystemTicker;