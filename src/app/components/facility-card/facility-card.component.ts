import { Component, Input } from '@angular/core';
import { Facility } from '../../data/facilities-data';

@Component({
  selector: 'app-facility-card',
  standalone: true,
  imports: [],
  templateUrl: './facility-card.component.html',
  styleUrl: './facility-card.component.scss'
})
export class FacilityCardComponent {
  @Input() facility!: Facility;
}
