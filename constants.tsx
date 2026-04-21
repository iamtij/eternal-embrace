
import React from 'react';
import { Calendar, HeartHandshake, Layers } from 'lucide-react';
import { NavItem, Step, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Services', href: '#services' },
  { label: 'Gallery', href: '/gallery' },
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
    title: 'Choose What Fits Your Family',
    description:
      'Whether you’re considering cremation, chapel services, columbarium, or another path—we help you select the options that honor your loved one and reflect what matters to you.',
    icon: <Layers className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: 3,
    title: 'Care Through Every Step',
    description:
      'We coordinate the details with compassion so arrangements feel calm and clear—you can focus on remembrance while we help make it all happen with ease.',
    icon: <HeartHandshake className="w-8 h-8 text-emerald-600" />,
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
