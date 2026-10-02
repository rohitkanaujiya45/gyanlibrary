import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatCardComponent } from '../../components/seat-card/seat-card.component';
import { Seat, seats } from '../../data/seat-data';

@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [CommonModule, SeatCardComponent],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.scss'
})
export class SeatsComponent implements OnInit {
  leftSeats: Seat[] = [];
  rightSeats: Seat[] = [];
  
  availableCount = 0;
  occupiedCount = 0;
  totalCount = 0;

  ngOnInit(): void {
    this.leftSeats = seats.filter(s => s.side === 'left');
    this.rightSeats = seats.filter(s => s.side === 'right');
    
    this.totalCount = seats.length;
    this.availableCount = seats.filter(s => s.status === 'available').length;
    this.occupiedCount = seats.filter(s => s.status === 'occupied').length;
  }
}
