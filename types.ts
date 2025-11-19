export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  steamUrl?: string;
  itchUrl?: string;
  status: 'Released' | 'Early Access' | 'In Development';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  class: string; // RPG Style Class (e.g., "Code Sorcerer")
  classDescription?: string; // Description for the tooltip
  level: number; // Years of experience
  avatarUrl: string;
  specialty: string;
}

export interface NavLink {
  label: string;
  href: string;
}