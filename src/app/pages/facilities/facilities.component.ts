import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';
import { facilities } from '../../data/facilities-data';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, FacilityCardComponent],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {
  facilityList = facilities;
}
