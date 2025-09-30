import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linkedin-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-section.component.html',
  styleUrls: ['./linkedin-section.component.scss']
})
export class LinkedinSectionComponent {
  linkedinUrl = 'https://www.linkedin.com/company/mata-medical-data';

  openLinkedin(): void {
    window.open(this.linkedinUrl, '_blank', 'noopener,noreferrer');
  }
}