import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PartnersSectionComponent {
  isContactModalOpen = false;
  partners: Partner[] = [
    { name: "Partenaire 1", logo: "/partners/partner-1-logo.png", alt: "Logo Partenaire 1" },
    { name: "Partenaire 2", logo: "/partners/partner-2-logo.png", alt: "Logo Partenaire 2" },
    { name: "Partenaire 3", logo: "/partners/partner-3-logo.png", alt: "Logo Partenaire 3" },
    { name: "Partenaire 4", logo: "/partners/partner-4-logo.png", alt: "Logo Partenaire 4" },
    { name: "Partenaire 5", logo: "/partners/partner-5-logo.png", alt: "Logo Partenaire 5" }
  ];
}
