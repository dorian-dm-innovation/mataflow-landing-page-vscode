import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class PartnersSectionComponent {
  subscribeForm: FormGroup;
  contactForm: FormGroup;
  modalContent: string = '';
  isModalOpen = false;
  isContactModalOpen = false;
  isSubmitting = false;

  partners: Partner[] = [
    { name: "Partenaire 1", logo: "/partners/partner-1-logo.png", alt: "Logo Partenaire 1" },
    { name: "Partenaire 2", logo: "/partners/partner-2-logo.png", alt: "Logo Partenaire 2" },
    { name: "Partenaire 3", logo: "/partners/partner-3-logo.png", alt: "Logo Partenaire 3" },
    { name: "Partenaire 4", logo: "/partners/partner-4-logo.png", alt: "Logo Partenaire 4" },
    { name: "Partenaire 5", logo: "/partners/partner-5-logo.png", alt: "Logo Partenaire 5" }
  ];

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['']
    });
  }

  openContactModal(): void {
    this.isContactModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeContactModal(): void {
    this.isContactModalOpen = false;
    document.body.style.overflow = '';
  }

  onContactSubmit(): void {
    if (this.contactForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      alert('Message envoyé avec succès ! Nous vous contactons sous 24h.');
      this.contactForm.reset();
      this.isSubmitting = false;
      this.closeContactModal();
    }, 2000);
  }
}
