
import React from 'react';
import { TeamMember } from '../types';
import RevealSection from './ui/RevealSection';
import Tooltip from './ui/Tooltip';

const teamMembers: TeamMember[] = [
  { 
    id: '1', 
    name: 'Tanasan Maknuen', 
    role: 'Founder & GameDev', 
    class: 'Code Architect', 
    classDescription: 'Constructs the logic backbone of the digital realm. Master of structural integrity.',
    level: 5, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/418799580_3582927655358155_4959526995083791051_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hyw_3hXJZckQ7kNvwFtg-E_&_nc_oc=AdkD-RHGJ9dpGBZSTPs-dDR8nO8l3_4gDBZnSbsKNn8PE_ANEfjaiorGKbVhauw1yL3ZHv75hVHUgBkT7P30jnng&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=5k-MV02HaYyPb6xL-ojGWg&oh=00_AfhlYjTvGmzGGA_6--xPKTzSPRWjk0oEWFvKsFL5zsJ5Qg&oe=6923DA47', 
    specialty: 'Systems Logic' 
  },
  { 
    id: '2', 
    name: 'Thirawoot Phuangbubpha ', 
    role: 'Lead GameDev', 
    class: 'Non Sleeper', 
    classDescription: 'Threads light and shadow into perceivable reality. Manipulates RGB values at will.',
    level: 9, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/500221780_1676086833016407_57719856168391397_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=P1Bx9urSAEcQ7kNvwFZqiRs&_nc_oc=AdlwifW9Q_KhWRNkEZIf65pTuEJN1gnHku7xuV4ofj3u_vSe8TTVqOC-v39L6gevFP9Ovoq-TCqvfF4GThD2HVT7&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=ravDOjSLf1GTpNk89eQI8Q&oh=00_Afjnta1mPoSVhJc_zTctHWGQLBc3hLLCQ_i3TBVRWPXk6w&oe=6923DC97', 
    specialty: 'Ad Kai' 
  },
  { 
    id: '3', 
    name: 'Passakron Presing', 
    role: 'Gameplay Engineer', 
    class: 'Mechanic', 
    classDescription: 'Fine-tunes the laws of physics for maximum chaos. Greases the gears of interaction.',
    level: 8, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/362264749_1245065982870267_7975081265329506715_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=36aj4_3vVA4Q7kNvwHNMDcg&_nc_oc=Admlxn81Vvte8DE6fVTZWiLGvKDDUoaXENN3qSvvvsYua3xTQrtz9MSN-R273lOTqrGZjj2y66X33CNhA1Y7h4gN&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=7enV6xw6pNsi2z4BVmg06A&oh=00_AfjzKSBRvPmcWI0xa1t0sVXOMuDQjU6rc7W754rrM95dtA&oe=6923E28A', 
    specialty: 'Da Phu' 
  },
  { 
    id: '4', 
    name: 'Pleum Phuripat', 
    role: 'Concept Artist', 
    class: 'Visionary', 
    classDescription: 'Dreams up the nightmares before they exist. Projects mental images onto canvas.',
    level: 7, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/352291406_793669329003050_5018448335506948922_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lNEwqmVQ2bIQ7kNvwE3lVWe&_nc_oc=Adm-cHLZi_ZblPT53TqyvSXLgcFGnwfKXP_RNxQf8FBwlMZnorPVfl2RJTgF_wfWcAPdPHTNf3exQjmoFEuoR_wi&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=FY7olTZCkl2y1q4qJlYZsQ&oh=00_AfhZ2lZlsSu68ui0GhDPVjkvKfotiHw0WWO9VZaoOjScrQ&oe=6923DF14', 
    specialty: 'Design' 
  },
  { 
    id: '5', 
    name: 'Nuttapon Kaewyoung', 
    role: 'Technical Artist', 
    class: 'The Mage', 
    classDescription: 'Weaves silence into soundscapes. Controls emotions through frequency modulation.',
    level: 8, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/471538385_1825900391282670_1016770303027181498_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=9WysIjQMscIQ7kNvwEsUnl_&_nc_oc=AdnySapErlsvu8ltnr3n2vuUH-p0guKOxzR1H-88UMFY7pvsseAxQ3WbZlOTF36_W2dtio6RimcxBMEaYzRcfVWS&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=rDrBniIYwVqKMKg0sDYsrw&oh=00_AfgolCSgtPDsS21lBKYcl0LOLy_M99LaVCfu1dvqFNnBGw&oe=6923E6AC', 
    specialty: 'VFX/CODE' 
  },
  { 
    id: '6', 
    name: 'Supalerk Pongjai', 
    role: 'slave', 
    class: 'slave', 
    classDescription: 'Chronicles the histories of worlds unborn. Guardian of the canonical timeline.',
    level: 1, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/449527759_1567045697175839_8917440463219888663_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Ujr44Ua7pxgQ7kNvwFakCK6&_nc_oc=AdnBN7xzqySw7ILVJJhO7ts8PwREYLwx83tfWUHaHjK0hw522v41ZDk7_pQHs0302pKvepuA87j-OJ2BAFFlPdJU&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=iHgcAenkHtckoY9EH58FiQ&oh=00_AfjbmO0F0giGVIYG1YgRdgEBWe2istZiXrlJA9VR6-rkvg&oe=6923FE97', 
    specialty: 'The slave' 
  },
  { 
    id: '7', 
    name: 'Thanaphat Athithanaphokin', 
    role: 'UI/UX Designer', 
    class: 'Interface God', 
    classDescription: 'Bridges the gap between flesh and code. Ensures the simulation feels seamless.',
    level: 6, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t1.6435-1/52377599_403256183764114_6972718021659852800_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hgRyI9ubkxIQ7kNvwEAisMW&_nc_oc=Adk3qse__Oyl6MbR_AQgGuC9gco-q6k8xto4lGYWGgr9POHzFiIFau7L7hHMqULJH4y1IG1r6850tLQ5yhDYvs1c&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=KlqQGGPl7PXKMeSrfyGHug&oh=00_Afj0Kxek5bZg5qlgyS4PEgeQSKTuRzdt2Esbr_T8yKG0pg&oe=6945A16E', 
    specialty: 'UX' 
  },
  { 
    id: '8', 
    name: 'Ittiwat Kambanlue ', 
    role: 'QA Lead', 
    class: 'Bug Hunter', 
    classDescription: 'Seeks imperfection to ensure perfection. The stress-test embodied.',
    level: 7, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/463457106_8998183463546246_2063082739234119977_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ZgbBgAfUFjcQ7kNvwEItbIY&_nc_oc=AdnsD3wQzk5HILHFXLDjlrmGbTo-mn3efLkvQ5xlSEfR5hKXrQvCuYVegvDozgcZD5ZHRt6W835KztjOwcR3AuB8&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=PPZEsQRTh3PVKkq0tiepZQ&oh=00_AfhNKgITfIUvMzrgsgXVFAAKzOzBG-p5lQf6Gi6Rb5Imwg&oe=6923D881', 
    specialty: 'Destruction' 
  },
  { 
    id: '9', 
    name: 'Thanakrit Siriniraphada', 
    role: 'Community Mgr', 
    class: 'Bard', 
    classDescription: 'Sings the songs of updates and patch notes. Boosts party morale +50%.',
    level: 8, 
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t1.6435-9/213402632_2957656891188363_8596176716749622038_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=liBDemMcNPQQ7kNvwEvm1Za&_nc_oc=AdmJL7ly5oG4IX4c7pdYvM2xVBegFR1B8g_wJDPfojNqtC8KqzpWxaUiSUXvJZNzuuo0vuvKlazWg_oJjduyKiwe&_nc_zt=23&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=FlFg76YQ6b-Zju7Pog_5jw&oh=00_AfjyP8lvz_-V6brH5OoPSWawzI3PZnCvzdzS5yrPftAf8g&oe=69458ECF', 
    specialty: 'Socials' 
  },
];

const TeamGrid: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-brand-black relative">
      {/* Background decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black uppercase text-white mb-4">
              The <span className="text-brand-magenta glitch-text" data-text="WANDERERS">WANDERERS</span>
            </h2>
            <p className="text-brand-gray font-rajdhani text-lg uppercase tracking-[0.3em]">
              Select Your Character
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <RevealSection key={member.id} delay={index * 50}>
              <div 
                className="bg-brand-dark border border-white/10 p-1 group hover:border-brand-magenta transition-all duration-300 hover:-translate-y-1"
              >
                {/* 
                  REFACTOR: Moved overflow-hidden from this container to the background-layer wrapper 
                  to allow tooltips to pop out of the card bounds. 
                */}
                <div className="bg-brand-black h-full p-4 flex gap-4 items-center relative group/card">
                  
                  {/* Background Hover Fill (Wrapped to contain overflow) */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute inset-0 bg-brand-magenta/5 transform translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                  </div>
                  
                  {/* Avatar */}
                  <div className="w-20 h-20 flex-shrink-0 relative z-10">
                    <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover border-2 border-brand-gray group-hover:border-brand-magenta transition-colors" />
                    <div className="absolute -bottom-2 -right-2 bg-brand-black text-white text-[10px] font-orbitron px-1 border border-white/20">
                      LVL {member.level}
                    </div>
                  </div>

                  {/* Stats Info */}
                  <div className="flex-grow relative z-10">
                    <h3 className="font-orbitron font-bold text-white text-lg leading-none mb-1 glitch-hover-text">
                      {member.name}
                    </h3>
                    
                    {/* Role (Moved under name) */}
                    <p className="text-xs font-orbitron text-brand-gray uppercase tracking-wider mb-2">
                      {member.role}
                    </p>
                    
                    {/* Tooltip Wrapper */}
                    <div className="mb-3 inline-block">
                      <Tooltip content={member.classDescription || "Unknown Class Data"}>
                        <div className="text-brand-magenta font-rajdhani font-bold text-sm uppercase tracking-wider cursor-help border-b border-dashed border-brand-magenta/30 hover:border-brand-magenta transition-colors">
                          {member.class}
                        </div>
                      </Tooltip>
                    </div>
                    
                    {/* Stat Bar Visualization */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-brand-gray font-mono uppercase">
                        <span>Spec</span>
                        <span className="text-white">{member.specialty}</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 mt-1 relative overflow-hidden">
                        <div 
                          className="h-full bg-brand-magenta transition-all duration-1000 ease-out" 
                          style={{ width: `${Math.min((member.level / 20) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
