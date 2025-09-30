import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ExpertCommitteeComponent } from '../../components/expert-committee/expert-committee.component';
import { TrustDatabaseComponent } from '../../components/trust-database/trust-database.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { DetailsSectionComponent } from '../../components/details-section/details-section.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { LinkedinSectionComponent } from '../../components/linkedin-section/linkedin-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent,
    ExpertCommitteeComponent,
    TrustDatabaseComponent,
    TestimonialsComponent,
    DetailsSectionComponent,
    NewsletterComponent,
    LinkedinSectionComponent
  ],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Optionnel: init scroll animations ou autres logiques
  }

}
