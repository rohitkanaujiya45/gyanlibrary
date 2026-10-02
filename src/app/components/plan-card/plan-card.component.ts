import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../../data/plans-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss'
})
export class PlanCardComponent {
  @Input() plan!: Plan;
}
