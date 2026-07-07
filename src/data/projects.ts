export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  year: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: ProjectImage;
  galleryImages: ProjectImage[];
  services: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'After Hours', slug: 'after-hours', client: 'Nocturne Records', year: '2025', category: 'Identity & Campaign', featured: true,
    shortDescription: 'A nocturnal identity for an independent label built around sound after dark.',
    fullDescription: 'Nocturne asked us to build a world that could hold everything from intimate listening sessions to global releases. We developed a flexible identity rooted in analogue imperfection, midnight color, and typographic rhythm—then carried it across packaging, motion, editorial, and a new digital home.',
    coverImage: { src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1800&q=85', alt: 'Musician performing beneath saturated stage lights' },
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=85', alt: 'Singer performing on a dark stage' },
      { src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85', alt: 'Crowd at an outdoor music performance' },
      { src: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1600&q=85', alt: 'Vinyl record player in warm light' },
    ], services: ['Brand strategy', 'Visual identity', 'Campaign', 'Digital']
  },
  {
    title: 'Common Ground', slug: 'common-ground', client: 'Morrow House', year: '2025', category: 'Hospitality', featured: true,
    shortDescription: 'A warm, modern identity for a neighborhood hotel made for gathering.',
    fullDescription: 'Morrow House is part hotel, part living room, and part cultural noticeboard. Our identity celebrates the rituals of hospitality through a grounded palette, characterful typography, candid art direction, and a digital experience that feels as personal as the welcome.',
    coverImage: { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85', alt: 'Minimal modern hotel lounge with warm timber furniture' },
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85', alt: 'Sunlit modern interior with neutral furniture' },
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85', alt: 'Contemporary living room with art and plants' },
      { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85', alt: 'Guests sharing coffee at a table' },
    ], services: ['Positioning', 'Naming', 'Identity', 'Web design']
  },
  {
    title: 'Material Memory', slug: 'material-memory', client: 'Atelier Noma', year: '2024', category: 'Editorial & Digital', featured: true,
    shortDescription: 'An editorial platform documenting the people and processes behind enduring objects.',
    fullDescription: 'Atelier Noma needed a quieter way to tell richer stories. We created an editorial identity and modular publishing platform where materials, makers, and process take center stage. The system balances rigorous grids with tactile image-making and generous pacing.',
    coverImage: { src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=85', alt: 'Designer workspace with material samples and tools' },
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85', alt: 'Bright creative studio interior' },
      { src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85', alt: 'Open studio workspace in daylight' },
      { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85', alt: 'Creative team working around a table' },
    ], services: ['Editorial strategy', 'Art direction', 'UX/UI', 'Development']
  },
  {
    title: 'Open Water', slug: 'open-water', client: 'Tide Foundation', year: '2024', category: 'Campaign', featured: true,
    shortDescription: 'A hopeful global campaign turning marine research into collective action.',
    fullDescription: 'For its tenth anniversary, Tide Foundation wanted to make ocean research feel immediate and actionable. We translated complex science into a lucid visual language, an interactive story, and an open campaign toolkit used by partners in twelve coastal cities.',
    coverImage: { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85', alt: 'Person overlooking a vast mountain lake' },
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=1600&q=85', alt: 'Aerial view of waves reaching a shoreline' },
      { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85', alt: 'Remote landscape at golden hour' },
      { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85', alt: 'Rocky coastline beside blue water' },
    ], services: ['Campaign strategy', 'Art direction', 'Digital experience', 'Toolkit']
  },
  {
    title: 'Form / Function', slug: 'form-function', client: 'Nara Objects', year: '2023', category: 'E-commerce',
    shortDescription: 'A precise digital flagship for objects designed to last a lifetime.',
    fullDescription: 'Nara Objects makes furniture with uncommon restraint. We built a commerce experience that mirrors that philosophy: direct, material-led, and quietly detailed. A flexible content system gives each collection room to breathe while making specification and purchase effortless.',
    coverImage: { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85', alt: 'Green sofa in a minimal interior' },
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=85', alt: 'Wooden chair in a neutral room' },
      { src: 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1600&q=85', alt: 'Sculptural chair beside a window' },
      { src: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1600&q=85', alt: 'Modern lounge chair against a pale wall' },
    ], services: ['Digital strategy', 'UX/UI', 'E-commerce', 'Content direction']
  },
];
