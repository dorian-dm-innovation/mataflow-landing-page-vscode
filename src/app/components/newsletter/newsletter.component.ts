import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  form: FormGroup;
  isSubmitting = false;

  // Chemin vers l'image dans assets
  backgroundImage = 'assets/background-section2.png';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Veuillez entrer votre adresse e-mail');
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      alert('Merci pour votre inscription !\nVous recevrez bientôt des nouvelles de Mata.');
      this.form.reset();
      this.isSubmitting = false;
    }, 1000);
  }
}
