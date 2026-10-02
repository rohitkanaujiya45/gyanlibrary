import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seat } from '../../data/seat-data';

@Component({
  selector: 'app-seat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-card.component.html',
  styleUrl: './seat-card.component.scss'
})
export class SeatCardComponent {
  @Input() seat!: Seat;
}
