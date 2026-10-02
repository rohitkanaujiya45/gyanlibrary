import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    'assets/gallery_01.jpg',
    'assets/gallery_02.jpg',
    'assets/gallery_03.jpg',
    'assets/gallery_05.jpg',
    'assets/gallery_06.jpg',
    'assets/gallery_07.jpg',
    'assets/gallery_09.jpg',
    'assets/gallery_10.jpg',
    'assets/gallery_11.jpg'
  ];
}
