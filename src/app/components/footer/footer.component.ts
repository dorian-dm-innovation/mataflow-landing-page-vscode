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
  modalContent: string = '';

  currentYear: number = new Date().getFullYear();

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openModal(content: string): void {
    this.modalContent = content;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
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

