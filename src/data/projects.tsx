import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  links: {
    discord?: string;
    demo?: string;
    github?: string;
    server?: string;
  };
  launchDate?: string;
}

export const projects: Project[] = [
  {
    title: 'Royal Kingdoms',
    description: 'Ultimate Factions Experience on Minecraft PE running on Nukkit',
    technologies: ['Java', 'Nukkit', 'Minecraft PE', 'Server Development'],
    features: [
      'Custom Factions Core', 
      'Rideable Dragons', 
      'Dynamic AI Dungeons',
      'Player Marketplace',
      'Exclusive Custom Plugins'
    ],
    image: '/projects/royal-kingdoms.jpg',
    links: {
      discord: 'https://discord.gg/kMS63eGWmF',
      server: 'roki.minecraft.pe:25620',
      demo: '/projects/royal-kingdoms'
    },
    launchDate: 'Summer 2025'
  },
  {
    title: 'School Supplies Management System',
    description: 'Java application for managing school supplies using model-based programming',
    technologies: ['Java', 'JavaFX', 'Model-Based Programming'],
    features: ['Order tracking', 'Inventory management', 'User interface'],
    image: '/projects/school-supplies.jpg',
    links: {
      demo: '/projects/school-supplies',
      github: 'https://github.com/YoussGm3o8/school-supplies',
    }
  },
  {
    title: 'Drone GPS Navigation System',
    description: 'GPS module integration with Teensy 4.1 microcontroller for precise drone positioning',
    technologies: ['C', 'Arduino IDE', 'Teensy 4.1', 'GPS Module'],
    features: ['Real-time positioning', 'Data filtering', 'Navigation algorithms'],
    image: '/projects/drone-gps.jpg',
    links: {
      github: 'https://github.com/YoussGm3o8/drone-gps',
    }
  }
]; 