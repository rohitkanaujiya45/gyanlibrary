import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';
import { PlanCardComponent } from '../../components/plan-card/plan-card.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { facilities } from '../../data/facilities-data';
import { plans } from '../../data/plans-data';
import { seats } from '../../data/seat-data';
import { libraryInfo } from '../../data/library-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FacilityCardComponent, PlanCardComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  libraryInfo = libraryInfo;

  facilitiesPreview = facilities.slice(0, 3);
  plansPreview = plans.slice(0, 3);

  // Seat Stats
  availableSeats = 0;
  occupiedSeats = 0;

  // Secret egg variables
  secretClickCount = 0;
  showNewDesign = false;

  ngOnInit(): void {
    this.availableSeats = seats.filter(s => s.status === 'available').length;
    this.occupiedSeats = seats.filter(s => s.status === 'occupied').length;
  }

  onSecretClick() {
    this.secretClickCount++;
    if (this.secretClickCount >= 4) {
      this.showNewDesign = true;
    }
  }
}
