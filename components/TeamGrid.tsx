import React, { useState } from 'react';
import { TeamMember } from '../types';
import RevealSection from './ui/RevealSection';
import Tooltip from './ui/Tooltip';
import CharacterSheetModal from './CharacterSheetModal';

// Enhanced Data with Stats
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Passakron Presing',
    role: 'Founder & Lead Game & Technical Designer',
    class: 'Systems Innovator',
    classDescription: 'Designs the rules, flow, and feel of entire worlds turning ideas into playable reality.',
    level: 8,
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/362264749_1245065982870267_7975081265329506715_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cz-RijUKXM4Q7kNvwEQ_XtG&_nc_oc=AdlHS9uvmWHqSMfCT9HWuQ473ZLubfFgkMOWdncGyj4XV9-wxqusfdCLaRJaxx99aqZ9lW8Xhcjz4LumIOHhuRos&_nc_zt=23&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=qFCsIUgVIsTdyhj3ftlzOQ&oh=00_AfkOgH5H3ZDjqDmcro7Eqb8McTuFzyoj_tJxJqJqS6ADPA&oe=6937AF4C',
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/500221780_1676086833016407_57719856168391397_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=9vCGd-zpIWYQ7kNvwFiAxo8&_nc_oc=AdlERZ5u_v9EP2RR_kEHVjt3vI2w8rhCzaW-lJnvItHZyCOG2oMBYqp3GL33wqFy-AdmS6P0h4IJpt_Gf6vU8CWv&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=Y0GFSWh7bNsB27pcYvSY8w&oh=00_AfkZLmnyHDJKml1aGRhuT9N8ilUnfvENtZaKQ0M7VO2a9A&oe=6937A317', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/418799580_3582927655358155_4959526995083791051_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=DVhZsQLHkqUQ7kNvwF-ZUJh&_nc_oc=AdmiGkim3wIFeXbSuhMtdkRgyOxvrs_9LOuca_C8codK_CbgZ62SejkZvKu1CN1QLYV7dIoS-8tjMqUuSWilxwNz&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=m9s0XByxxVFRDwz2Z_JUEw&oh=00_AflnbdK3skTs6x5f-4pVsalaTSuU0wRYLf8ijrVFZvZBug&oe=6937A0C7',
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/352291406_793669329003050_5018448335506948922_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=aQPyJwqY71sQ7kNvwGfPPYu&_nc_oc=AdkDq8joaNSwQsDCEIRe7AJ3_IhddLJTufZAUrWOg_cp1NkYVvce5D3yIbiqZZpgXiGj5c_lntlE8I__y9OMcP-2&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=V6mr6aCw1QXQ5TpW5a0U8g&oh=00_AfncEFphm9myJuK8JzH3uF3ThweLTVxI7EOVbS7f0MA-Bg&oe=6937A594', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/471538385_1825900391282670_1016770303027181498_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=g1eqD7qcut8Q7kNvwHhhogC&_nc_oc=AdlTu2pbHXSh0ShsgdVFtdkfqCK5SrWsY2nxXBXEBxCatynxSHfLzksFG_mBFu-vr9zavjTjwQHZkvw6HWKZxQbK&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=G2AlpzaHsAu3xZtJd7vayQ&oh=00_AfmMlIkz7Cu2zXxQfZHYrs1erIwpozlVAmUQeejmUoo6aw&oe=6937AD2C', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/449527759_1567045697175839_8917440463219888663_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=g4ZzZoj-jNIQ7kNvwHu4O6J&_nc_oc=Adnb1X0ANVVZ6jbKRfgxxT5Vzc2M1sWvoJ4v7u_uDTQujL8fHL65zOylCLyeYiL8X-VTi7Ixy0khg5Ey1sVsJa56&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=P689M_JB665QKVx8GMyFfA&oh=00_Afk4PHHuoZU0td_W5eoV1QEKlG9Z8wr5p8rWXrpPysHbyw&oe=69378CD7', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t1.6435-1/52377599_403256183764114_6972718021659852800_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hgRyI9ubkxIQ7kNvwEAisMW&_nc_oc=Adk3qse__Oyl6MbR_AQgGuC9gco-q6k8xto4lGYWGgr9POHzFiIFau7L7hHMqULJH4y1IG1r6850tLQ5yhDYvs1c&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=KlqQGGPl7PXKMeSrfyGHug&oh=00_Afj0Kxek5bZg5qlgyS4PEgeQSKTuRzdt2Esbr_T8yKG0pg&oe=6945A16E', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/463457106_8998183463546246_2063082739234119977_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=clmhQ86RJoIQ7kNvwEYj9cw&_nc_oc=AdmU6z-g8J8p1jCDCv0MBVMqQziYy01Qh1iv_Te9DqoWFAYfZ79DkChbYg4DCv13ke30wV9QnaTfIPeuFK9kRdVL&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=FReWk98zF3A0OcTzqbNBhw&oh=00_AfmIslJVDqGhT2-1Q5H61-6UqWvc9J4jT5EE3dQZZqcVXQ&oe=69379F01', 
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
    avatarUrl: 'https://scontent.fbkk25-1.fna.fbcdn.net/v/t1.6435-9/213402632_2957656891188363_8596176716749622038_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=liBDemMcNPQQ7kNvwEvm1Za&_nc_oc=AdmJL7ly5oG4IX4c7pdYvM2xVBegFR1B8g_wJDPfojNqtC8KqzpWxaUiSUXvJZNzuuo0vuvKlazWg_oJjduyKiwe&_nc_zt=23&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=FlFg76YQ6b-Zju7Pog_5jw&oh=00_AfjyP8lvz_-V6brH5OoPSWawzI3PZnCvzdzS5yrPftAf8g&oe=69458ECF', 
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
    // Small timeout to clear data after animation finishes
    setTimeout(() => setSelectedMember(null), 500);
  };

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
                onClick={() => handleMemberClick(member)}
                className="bg-brand-dark border border-white/10 p-1 group hover:border-brand-magenta transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-brand-black h-full p-4 flex gap-4 items-center relative group/card overflow-hidden">
                  
                  {/* Background Hover Fill */}
                  <div className="absolute inset-0 bg-brand-magenta/5 transform translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 skew-x-12 pointer-events-none"></div>
                  
                  {/* Avatar */}
                  <div className="w-20 h-20 flex-shrink-0 relative z-10">
                    <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover border-2 border-brand-gray group-hover/card:border-brand-magenta transition-colors" />
                    <div className="absolute -bottom-2 -right-2 bg-brand-black text-white text-[10px] font-orbitron px-1 border border-white/20 group-hover/card:text-brand-magenta group-hover/card:border-brand-magenta transition-colors">
                      LVL {member.level}
                    </div>
                  </div>

                  {/* Stats Info */}
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
                    
                    {/* Stat Bar Visualization */}
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

      {/* Modal Component */}
      <CharacterSheetModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TeamGrid;