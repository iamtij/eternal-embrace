// Import React to resolve the "Cannot find namespace 'React'" error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}