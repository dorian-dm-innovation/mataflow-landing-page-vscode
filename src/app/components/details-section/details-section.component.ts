import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent {
  form: FormGroup;

  // Chemin relatif vers l'image dans assets
  networkBanner2 = 'assets/network-banner-2.jpg';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['']
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    alert('Demande envoyée avec succès ! Nous vous contactons sous 24h.');
    this.form.reset();
  }
}
