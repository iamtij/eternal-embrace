
import React from 'react';
import { Calendar, MapPin, Sun } from 'lucide-react';
import { NavItem, Step, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Our Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'The Plan', href: '#plan' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Schedule a Visit',
    description: 'Schedule a private visit or call us to discuss your needs.',
    icon: <Calendar className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: 2,
    title: 'Choose the Space',
    description: 'Choose the space and arrangement that fits your family.',
    icon: <MapPin className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: 3,
    title: 'Honor Your Loved One',
    description: 'Honor your loved one in a peaceful and beautiful setting.',
    icon: <Sun className="w-8 h-8 text-emerald-600" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Santos',
    location: 'Quezon City',
    content: 'Hindi matatawaran ang kapanatagan ng loob na naramdaman namin nang maayos ang lahat para sa aking ama. Napakabait ng mga staff.',
    rating: 5,
  },
  {
    name: 'Roberto Garcia',
    location: 'Pasig City',
    content: 'Malinis at napakatahimik ng paligid. Hindi ito pakiramdam na malamig o nakakatakot; ramdam mo talaga na ito ay lugar ng pagmamahal.',
    rating: 5,
  },
  {
    name: 'Liza Mercado',
    location: 'Manila',
    content: 'Napakalaki ng tulong ng staff na gumabay sa amin sa bawat hakbang. Pinagaan nila ang isang mahirap na yugto para sa aming pamilya.',
    rating: 5,
  },
];
