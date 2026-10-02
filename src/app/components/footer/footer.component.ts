import { Component } from '@angular/core';
import { libraryInfo } from '../../data/library-info';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  info = libraryInfo;
  year = new Date().getFullYear();
}
