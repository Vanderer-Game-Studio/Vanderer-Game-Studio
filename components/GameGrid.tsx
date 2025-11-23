import React, { useState } from 'react';
import { Game } from '../types';
import Button from './ui/Button';
import RevealSection from './ui/RevealSection';
import Modal from './ui/Modal';
import { Gamepad,Download, ChevronDown, ChevronUp } from 'lucide-react';

const games: Game[] = [
  {
    id: '1',
    title: 'Baby May Cry',
    description: `You are a nanny left alone in a quiet mansion. Your duty is to keep the babies safe, but every time a baby cries, it seems to be a signal calling out something hidden in the silence... Can you survive until dawn in a night where "silence" is your only weapon?
Key Feature
↪︎  Baby Management: You must manage and care for multiple babies simultaneously under pressure and with limited resources, such as milk and diapers, to prevent them from crying.
↪︎ Noise Detection Enemies: The enemies are invisible but hear everything... They track the player through the "sound" the player creates. The louder and longer the babies cry, the more accurately the enemies can detect your location.
↪︎  Silent is Power: Accumulate "Silence" energy when the babies are calm to activate the power of a "Mysterious Artifact" to temporarily stop the babies from crying, freeze enemy movement, or escape in emergency situations.
The game is currently in a demo version. You may encounter issues during gameplay and some content may be incomplete.`,
    imageUrl: 'https://img.itch.zone/aW1hZ2UvMzk1OTU5My8yMzk2NDg3OC5qcGc=/347x500/cfIXaX.jpg',
    tags: ['Horror', 'Action', 'Adventure'],
    status: 'In Development',
    steamUrl: 'https://store.steampowered.com/',
    itchUrl: 'https://excavate.itch.io/babymaycry'
  },
  {
    id: '2',
    title: 'NChanter',
    description: 'In this game, you grow up under the care of your grandfather, the village shaman. He once used his mystical powers to protect the village from evil forces. As you grow older, you decide to leave the village and move to the city to pursue other opportunities.',
    imageUrl: 'https://img.itch.zone/aW1nLzE4Nzc1ODI4LnBuZw==/347x500/h%2FxFfM.png',
    tags: ['Role Playing','Puzzle'],
    status: 'Released',
    steamUrl: 'https://store.steampowered.com/',
    itchUrl: 'https://excavate.itch.io/nchanter'
  },
  {
    id: '3',
    title: 'Elementaria',
    description: `Play as an Elemental Mage battling bosses. Both you and the boss spin to choose elements—strategically spin to counter the boss's element and claim victory!`,
    imageUrl: 'https://img.itch.zone/aW1nLzE5NTYzNzI4LnBuZw==/315x250%23c/t2Aiv8.png',
    tags: ['Strategy','Fantacy'],
    status: 'Released',
    steamUrl: 'https://store.steampowered.com/',
    itchUrl: 'https://excavate.itch.io/elementaria'
  },
    {
    id: '4',
    title: 'PRYSM',
    description: ``,
    imageUrl: 'https://img.itch.zone/aW1nLzIzMzQ4MjE5LnBuZw==/315x250%23c/Du%2BAsW.png',
    tags: ['Action','Platformer','Bullet Hell'],
    status: 'Released',
    steamUrl: 'https://store.steampowered.com/',
    itchUrl: 'https://excavate.itch.io/prysm'
    },
    // {
    // id: '5',
    // title: 'PRYSM',
    // description: ``,
    // imageUrl: 'https://img.itch.zone/aW1nLzIzMzQ4MjE5LnBuZw==/315x250%23c/Du%2BAsW.png',
    // tags: ['Action','Platformer','Bullet Hell'],
    // status: 'Released',
    // steamUrl: 'https://store.steampowered.com/',
    // itchUrl: 'https://excavate.itch.io/prysm'
    // },

];

const GameGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(false);
  const INITIAL_COUNT = 4;
  const visibleGames = showAll ? games : games.slice(0, INITIAL_COUNT);
  const handleLinkClick = (e: React.MouseEvent, url?: string) => {
    if (!url || url === '' || url === 'https://store.steampowered.com/' || url === 'https://itch.io/') {
      e.preventDefault();
      setModalOpen(true);
    }
  };
  return (
    <section id="games" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <RevealSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-orbitron font-black uppercase text-white mb-2">
                Mission <span className="text-brand-magenta">Log</span>
              </h2>
              <div className="h-1 w-24 bg-brand-magenta"></div>
            </div>
            <p className="text-brand-gray font-rajdhani text-lg max-w-md text-right">
              Explore our deployed projects. Each title represents a variable in our grand experiment.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleGames.map((game, index) => (
            <RevealSection key={game.id} delay={index * 100}>
              <div 
                className="group relative bg-brand-black border border-brand-gray/20 hover:border-brand-magenta transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-brand-magenta/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                  <img 
                    src={game.imageUrl} 
                    alt={game.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur px-3 py-1 border border-white/20">
                    <span className={`text-xs font-bold font-orbitron uppercase ${
                      game.status === 'Released' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative flex-grow flex flex-col">
                  {/* Decorative Lines */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-magenta to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-brand-magenta transition-colors">
                    {game.title}
                  </h3>
                  
                  <div className="flex gap-2 mb-4">
                    {game.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-rajdhani border border-white/10 px-2 py-1 text-brand-gray">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-brand-gray font-inter text-sm leading-relaxed mb-6 line-clamp-3">
                    {game.description}
                  </p>

                  <div className="flex gap-4 mt-auto">
                    <Button 
                      variant="primary" 
                      icon={Gamepad} 
                      className="flex-1 text-xs"
                      href={game.steamUrl}
                      onClick={(e) => handleLinkClick(e, game.steamUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Steam
                    </Button>
                    <Button 
                      variant="outline" 
                      icon={Download} 
                      className="flex-1 text-xs"
                      href={game.itchUrl}
                      onClick={(e) => handleLinkClick(e, game.itchUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Itch.io
                    </Button>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* See More Toggle */}
        {games.length > INITIAL_COUNT && (
          <div className="mt-16 flex justify-center">
             <Button 
                variant="outline" 
                onClick={() => setShowAll(!showAll)}
                icon={showAll ? ChevronUp : ChevronDown}
                className="w-full md:w-auto min-w-[200px]"
             >
                {showAll ? "Show Less" : "See All Games"}
             </Button>
          </div>
        )}

      </div>
        <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Access Denied"
      >
        <p>This uplink is currently offline or the artifact has not yet been deployed to this platform. Please check back later, Varderer.</p>
      </Modal>
    </section>
  );
};

export default GameGrid;