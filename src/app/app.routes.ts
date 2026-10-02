import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { PlansComponent } from './pages/plans/plans.component';
import { SeatsComponent } from './pages/seats/seats.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'seats', component: SeatsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
