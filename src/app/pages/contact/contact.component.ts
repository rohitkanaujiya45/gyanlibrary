import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { libraryInfo } from '../../data/library-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  info = libraryInfo;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      plan: ['Daily Pass'],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, phone, email, plan, message } = this.contactForm.value;
      const subject = encodeURIComponent(`Enquiry for ${plan} from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Interested Plan: ${plan}\n\n` +
        `Message:\n${message}`
      );
      
      // Trigger email client
      window.location.href = `mailto:${this.info.email}?subject=${subject}&body=${body}`;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
