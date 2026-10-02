export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string; // Will use some CSS classes or inline SVGs mapped to these names
}

export const facilities: Facility[] = [
  {
    id: 'seats',
    title: 'Comfortable Study Seats',
    description: 'Ergonomic chairs and spacious desks designed for long hours of focused studying.',
    icon: 'chair'
  },
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Seamless, uninterrupted internet access for online lectures, research, and browsing.',
    icon: 'wifi'
  },
  {
    id: 'power',
    title: 'Charging Points',
    description: 'Individual power sockets at every desk to keep your laptop and mobile devices charged.',
    icon: 'power'
  },
  {
    id: 'lighting',
    title: 'Proper Lighting',
    description: 'Well-lit environment with eye-friendly LED lights, ensuring no strain during extended study sessions.',
    icon: 'lightbulb'
  },
  {
    id: 'environment',
    title: 'Peaceful Environment',
    description: 'A strict noise-free zone, giving you the perfect calm atmosphere to concentrate.',
    icon: 'silence'
  },
  {
    id: 'security',
    title: 'CCTV / Security',
    description: '24/7 CCTV surveillance and secure entry to ensure a safe studying environment for everyone.',
    icon: 'security'
  },
  {
    id: 'water',
    title: 'Drinking Water',
    description: 'RO purified drinking water available at all times.',
    icon: 'water'
  },
  {
    id: 'hours',
    title: 'Long Study Hours',
    description: 'Open early morning to late night, accommodating all types of study schedules.',
    icon: 'clock'
  }
];
