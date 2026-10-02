import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanCardComponent } from '../../components/plan-card/plan-card.component';
import { plans } from '../../data/plans-data';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, PlanCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  planList = plans;
}
