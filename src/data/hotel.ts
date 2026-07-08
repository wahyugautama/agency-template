export interface Room {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  size?: string;
  bed?: string;
  floor?: string;
  bestFor?: string;
  feature?: string;
}

// TODO: Replace this editorial overview with verified room names, facts and photography.
// The source project contained no Campbell House room inventory.
export const rooms: Room[] = [];

export const imagery = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
  room: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
  dining: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=85',
  heritage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  town: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1800&q=85',
} as const;

