import React, { useState } from 'react';
import { TeamMember } from '../types';
import RevealSection from './ui/RevealSection';
import Tooltip from './ui/Tooltip';
import CharacterSheetModal from './CharacterSheetModal';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Passakron Presing',
    role: 'Founder & Lead Game & Technical Designer',
    class: 'Systems Innovator',
    classDescription: 'Designs the rules, flow, and feel of entire worlds turning ideas into playable reality.',
    level: 8,
    avatarUrl: '/img/phu.jpg',
    specialty: 'Creative Direction & Systems Design',
    stats: [
      { subject: 'Logic', A: 95, fullMark: 100 },
      { subject: 'Creativity', A: 90, fullMark: 100 },
      { subject: 'Tech', A: 75, fullMark: 100 },
      { subject: 'Leadership', A: 85, fullMark: 100 },
      { subject: 'Agility', A: 60, fullMark: 100 },
      { subject: 'Stamina', A: 80, fullMark: 100 },
    ],
    equipment: ['Unity', 'Unreal Engine', 'C#', 'Jira', 'Miro'],
    description: "Passakron operates at the intersection of narrative and mechanic. With a level 8 clearance in System Architecture, he ensures that every gameplay loop feeds into the core player fantasy."
  },
  { 
    id: '2', 
    name: 'Thirawoot Phuangbubpha', 
    role: 'Founder & Lead Programmer', 
    class: 'Core Engineer', 
    classDescription: 'Builds the fundamental technologies that power the experience from the inside out.',
    level: 9, 
    avatarUrl: '/img/wind.jpg',
    specialty: 'High-Performance Programming',
    stats: [
      { subject: 'Logic', A: 98, fullMark: 100 },
      { subject: 'Creativity', A: 70, fullMark: 100 },
      { subject: 'Tech', A: 99, fullMark: 100 },
      { subject: 'Leadership', A: 80, fullMark: 100 },
      { subject: 'Agility', A: 75, fullMark: 100 },
      { subject: 'Stamina', A: 90, fullMark: 100 },
    ],
    equipment: ['C++', 'Python', 'Unity DOTS', 'DirectX', 'OpenGL'],
    description: 'The architect of the matrix. Thirawoot specializes in optimization and low-level systems. If the game runs at 144fps, he is the reason why.'
  },
  {
    id: '3',
    name: 'Tanasan Maknuen',
    role: 'Founder & Network Programmer',
    class: 'Infrastructure Developer',
    classDescription: 'Constructs stable, scalable systems that keep players connected seamlessly.',
    level: 5,
    avatarUrl: '/img/dodo.jpg',
    specialty: 'Network Architecture',
    stats: [
      { subject: 'Logic', A: 90, fullMark: 100 },
      { subject: 'Creativity', A: 60, fullMark: 100 },
      { subject: 'Tech', A: 95, fullMark: 100 },
      { subject: 'Leadership', A: 65, fullMark: 100 },
      { subject: 'Agility', A: 70, fullMark: 100 },
      { subject: 'Stamina', A: 85, fullMark: 100 },
    ],
    equipment: ['C++', 'Python','C#','Html','CSS','JavaScript','TypeScript','AWS', 'Photon', 'Mirror', 'Node.js', 'Docker'],
    description: 'Tanasan maintains the digital highways. His code ensures that packets arrive on time, every time, preventing the void from consuming player data.'
  },
  { 
    id: '4', 
    name: 'Pleum Phuripat', 
    role: 'Co-Founder & Lead Artist', 
    class: 'Visual Concept Lead', 
    classDescription: 'Shapes the artistic identity of the project, defining style, tone, and atmosphere.',
    level: 7, 
    avatarUrl: '/img/prum.jpg',
    specialty: 'Illustration & Art Direction',
    stats: [
      { subject: 'Logic', A: 60, fullMark: 100 },
      { subject: 'Creativity', A: 98, fullMark: 100 },
      { subject: 'Tech', A: 70, fullMark: 100 },
      { subject: 'Leadership', A: 75, fullMark: 100 },
      { subject: 'Agility', A: 85, fullMark: 100 },
      { subject: 'Stamina', A: 80, fullMark: 100 },
    ],
    equipment: ['Photoshop', 'Procreate', 'Blender', 'PureRef'],
    description: 'The visionary who paints the world before it exists. Pleum translates raw emotion into visual data.'
  },
  { 
    id: '5', 
    name: 'Nuttapon Kaewyoung', 
    role: 'Co-Founder & Technical Artist', 
    class: 'Technical Art Specialist', 
    classDescription: 'Bridges art and technology, making visuals dynamic, optimized, and expressive.',
    level: 8, 
    avatarUrl: '/img/jame.jpg',
    specialty: 'VFX & Shader Development',
    stats: [
      { subject: 'Logic', A: 85, fullMark: 100 },
      { subject: 'Creativity', A: 85, fullMark: 100 },
      { subject: 'Tech', A: 90, fullMark: 100 },
      { subject: 'Leadership', A: 60, fullMark: 100 },
      { subject: 'Agility', A: 80, fullMark: 100 },
      { subject: 'Stamina', A: 85, fullMark: 100 },
    ],
    equipment: ['HLSL', 'Shader Graph', 'Houdini', 'Maya', 'Unity VFX'],
    description: 'A rare hybrid class unit. Nuttapon bends light and geometry to create the impossible, ensuring the art runs as smoothly as the code.'
  },
  { 
    id: '6', 
    name: 'Supalerk Pongjai', 
    role: 'Story Writer', 
    class: 'Lorekeeper', 
    classDescription: 'Chronicles the histories of worlds unborn. Guardian of the canonical timeline.',
    level: 1, 
    avatarUrl: '/img/non.jpg',
    specialty: 'Narrative Design',
    stats: [
      { subject: 'Logic', A: 70, fullMark: 100 },
      { subject: 'Creativity', A: 90, fullMark: 100 },
      { subject: 'Tech', A: 40, fullMark: 100 },
      { subject: 'Leadership', A: 50, fullMark: 100 },
      { subject: 'Agility', A: 60, fullMark: 100 },
      { subject: 'Stamina', A: 99, fullMark: 100 },
    ],
    equipment: ['Word', 'Scrivener', 'Twine', 'Coffee'],
    description: 'The pen is mightier than the polygon. Supalerk breathes soul into the static meshes.'
  },
  { 
    id: '7', 
    name: 'Thanaphat Athithanaphokin', 
    role: 'Founder & UI/UX Designer', 
    class: 'Experience Designer', 
    classDescription: 'Creates intuitive, elegant interfaces that guide players effortlessly through the game.',
    level: 6, 
    avatarUrl: '/img/cake.jpg',
    specialty: 'Interaction & Interface Design',
    stats: [
      { subject: 'Logic', A: 80, fullMark: 100 },
      { subject: 'Creativity', A: 85, fullMark: 100 },
      { subject: 'Tech', A: 70, fullMark: 100 },
      { subject: 'Leadership', A: 60, fullMark: 100 },
      { subject: 'Agility', A: 75, fullMark: 100 },
      { subject: 'Stamina', A: 80, fullMark: 100 },
    ],
    equipment: ['Figma', 'Adobe XD', 'Illustrator', 'Unity UI'],
    description: 'Ensures that the interface is an extension of the player\'s will. No button press goes unrewarded.'
  },
  { 
    id: '8', 
    name: 'Ittiwat Kambanlue', 
    role: 'Founder & Gameplay Designer', 
    class: 'Glitch Hunter', 
    classDescription: 'Transforms concepts into engaging player experiences through clear mechanics and creative design thinking.',
    level: 7, 
    avatarUrl: '/img/oom.jpg',
    specialty: 'Gameplay Flow & Feature Design',
    stats: [
      { subject: 'Logic', A: 85, fullMark: 100 },
      { subject: 'Creativity', A: 80, fullMark: 100 },
      { subject: 'Tech', A: 75, fullMark: 100 },
      { subject: 'Leadership', A: 70, fullMark: 100 },
      { subject: 'Agility', A: 85, fullMark: 100 },
      { subject: 'Stamina', A: 90, fullMark: 100 },
    ],
    equipment: ['Unity', 'Unreal', 'Excel', 'Notion'],
    description: 'The mechanic of fun. Ittiwat dissects gameplay loops to find the perfect balance between challenge and reward.'
  },
  { 
    id: '9', 
    name: 'Thanakrit Siriniraphada', 
    role: 'Founder & Artist', 
    class: 'Illustrator', 
    classDescription: 'Creates visual assets that support and expand the project’s artistic vision under the direction of the art lead.',
    level: 8, 
    avatarUrl: '/img/stung.jpg',
    specialty: 'Illustration & Creative Support',
    stats: [
      { subject: 'Logic', A: 65, fullMark: 100 },
      { subject: 'Creativity', A: 95, fullMark: 100 },
      { subject: 'Tech', A: 70, fullMark: 100 },
      { subject: 'Leadership', A: 60, fullMark: 100 },
      { subject: 'Agility', A: 80, fullMark: 100 },
      { subject: 'Stamina', A: 85, fullMark: 100 },
    ],
    equipment: ['Photoshop', 'Clip Studio Paint', 'Wacom'],
    description: 'Master of the brush and the pixel. Thanakrit brings vibrant life to static concepts.'
  },
];

const TeamGrid: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 500);
  };

  return (
    <section id="team" className="py-24 bg-brand-black relative">
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
                onClick={() => handleMemberClick(member)}
                className="bg-brand-dark border border-white/10 p-1 group hover:border-brand-magenta transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-brand-black h-full p-4 flex gap-4 items-center relative group/card overflow-hidden">
                  
                  <div className="absolute inset-0 bg-brand-magenta/5 transform translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 skew-x-12 pointer-events-none"></div>
                  
                  <div className="w-20 h-20 flex-shrink-0 relative z-10">
                    <img 
                      src={member.avatarUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover border-2 border-brand-gray group-hover/card:border-brand-magenta transition-colors"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Agent';
                      }}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-brand-black text-white text-[10px] font-orbitron px-1 border border-white/20 group-hover/card:text-brand-magenta group-hover/card:border-brand-magenta transition-colors">
                      LVL {member.level}
                    </div>
                  </div>

                  <div className="flex-grow relative z-10 overflow-hidden">
                    <h3 className="font-orbitron font-bold text-white text-lg leading-none mb-1 glitch-hover-text group-hover/card:text-brand-magenta transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-orbitron text-brand-gray uppercase tracking-wider mb-2">
                      {member.role}
                    </p>
                    
                    <div className="mb-3 inline-block">
                      <Tooltip content={member.classDescription || "Unknown Class Data"}>
                        <div className="text-brand-magenta font-rajdhani font-bold text-sm uppercase tracking-wider cursor-help border-b border-dashed border-brand-magenta/30 hover:border-brand-magenta transition-colors">
                          {member.class}
                        </div>
                      </Tooltip>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-brand-gray font-mono uppercase">
                        <span>Spec</span>
                        <span className="text-white">{member.specialty}</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 mt-1 relative overflow-hidden">
                        <div 
                          className="h-full bg-brand-magenta transition-all duration-1000 ease-out group-hover/card:shadow-[0_0_10px_#ff2e63]" 
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

      <CharacterSheetModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TeamGrid;