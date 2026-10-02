export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  timing: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 'daily',
    name: 'Daily Pass',
    price: '₹ 100',
    duration: '1 Day',
    timing: '6:00 AM - 11:00 PM',
    features: [
      'Access to a comfortable study seat',
      'High-speed Wi-Fi',
      'Charging points at desk',
      'Drinking water facility'
    ]
  },
  {
    id: 'weekly',
    name: 'Weekly Pass',
    price: '₹ 500',
    duration: '7 Days',
    timing: '6:00 AM - 11:00 PM',
    features: [
      'Reserved study seat',
      'High-speed Wi-Fi access',
      'Locker facility (subject to availability)',
      'Discussion room access (1 hour/day)'
    ]
  },
  {
    id: 'monthly-standard',
    name: 'Monthly Standard',
    price: '₹ 1500',
    duration: '30 Days',
    timing: '6:00 AM - 11:00 PM',
    features: [
      'Premium reserved seat',
      'Dedicated locker',
      'Unlimited high-speed Wi-Fi',
      'Priority support',
      'Flexible timings'
    ]
  }
];
