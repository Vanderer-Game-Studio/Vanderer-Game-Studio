export interface Stat {
  subject: string;
  A: number;
  fullMark: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  class: string;
  classDescription: string;
  level: number;
  avatarUrl: string;
  specialty: string;
  // New fields for Character Sheet
  stats: Stat[];
  description?: string;
  equipment: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: 'In Development' | 'Released' | 'Prototype';
  steamUrl?: string;
  itchUrl?: string;
}
export interface NavLink {
  label: string;
  href: string;
}