export interface Seat {
  id: number;
  side: 'left' | 'right';
  status: 'available' | 'occupied';
}

export const seats: Seat[] = [
  // Left Side Seats
  { id: 1, side: 'left', status: 'available' },
  { id: 2, side: 'left', status: 'occupied' },
  { id: 3, side: 'left', status: 'available' },
  { id: 4, side: 'left', status: 'available' },
  { id: 5, side: 'left', status: 'occupied' },
  { id: 6, side: 'left', status: 'occupied' },
  { id: 7, side: 'left', status: 'available' },
  { id: 8, side: 'left', status: 'available' },
  { id: 9, side: 'left', status: 'available' },
  { id: 10, side: 'left', status: 'occupied' },
  { id: 11, side: 'left', status: 'available' },
  { id: 12, side: 'left', status: 'available' },
  { id: 13, side: 'left', status: 'available' },
  { id: 14, side: 'left', status: 'occupied' },
  { id: 15, side: 'left', status: 'available' },
  
  // Right Side Seats
  { id: 16, side: 'right', status: 'available' },
  { id: 17, side: 'right', status: 'available' },
  { id: 18, side: 'right', status: 'occupied' },
  { id: 19, side: 'right', status: 'available' },
  { id: 20, side: 'right', status: 'available' },
  { id: 21, side: 'right', status: 'occupied' },
  { id: 22, side: 'right', status: 'available' },
  { id: 23, side: 'right', status: 'occupied' },
  { id: 24, side: 'right', status: 'available' },
  { id: 25, side: 'right', status: 'available' },
  { id: 26, side: 'right', status: 'available' },
  { id: 27, side: 'right', status: 'occupied' },
  { id: 28, side: 'right', status: 'available' },
  { id: 29, side: 'right', status: 'available' },
  { id: 30, side: 'right', status: 'available' }
];
