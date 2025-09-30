import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // <-- Important !

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- pour [formGroup]
    MatIconModule        // <-- pour <mat-icon>
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscribeForm: FormGroup;
  contactForm: FormGroup;
  modalContent: string = '';
  isModalOpen = false;
  isContactModalOpen = false;
  isSubmitting = false;

  currentYear: number = new Date().getFullYear();

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

  openModal(content: string): void {
    this.modalContent = content;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
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

  handleSubscribe(): void {
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.get('email')?.value.trim();
      console.log('Newsletter subscribe:', email);
      this.subscribeForm.reset();
    }
  }

  linkClass = "text-gray-200 hover:text-white transition-colors hover:underline";
}

