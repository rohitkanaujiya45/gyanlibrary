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
    id: 'half-day',
    name: 'Half Day Plan',
    price: '₹ 400',
    duration: '1 Month',
    timing: 'Half Day Shift',
    features: [
      'Reserved study seat',
      'High-speed Wi-Fi access',
      'Peaceful environment',
      'Drinking water facility'
    ]
  },
  {
    id: 'full-day',
    name: 'Full Day Plan',
    price: '₹ 700',
    duration: '1 Month',
    timing: '6:00 AM - 11:00 PM',
    features: [
      'Reserved study seat',
      'High-speed Wi-Fi access',
      'Locker facility (subject to availability)',
      'Discussion room access'
    ]
  },
  {
    id: 'quarterly',
    name: '3 Months Plan',
    price: '₹ 1800',
    duration: '3 Months',
    timing: '6:00 AM - 11:00 PM',
    features: [
      'Premium reserved seat',
      'Dedicated locker',
      'Unlimited high-speed Wi-Fi',
      'Priority support',
      'Cost-effective savings'
    ]
  }
];
