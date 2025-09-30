import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class FeaturesComponent implements AfterViewInit {
  isModalOpen = false;
  modalContent: string = '';
  features = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"/><path d="M12 8a4 4 0 1 0 4 4"/><circle cx="12" cy="12" r="1"/></svg>`,
      title: "Sémiologie Radiologique Interactive",
      description: "Posez vos questions en langage naturel et obtenez des réponses expertes sur signes radiologiques, diagnostics différentiels avec accès aux 66 000 cas cliniques.",
      image: ''
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13v-1h6v1"/><path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"/><path d="M9.5 12 9 11H4"/></svg>`,
      title: "Modèles de CR Intelligents",
      description: "500 modèles de comptes-rendus radiologiques et de consultations adaptés à votre spécialité, générés automatiquement selon votre demande.",
      image: ''
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="8" y1="16" y2="16"></line><line x1="16" x2="16" y1="16" y2="16"></line></svg>`,
      title: "Formation Continue Intégrée",
      description: "Accès direct aux 2 200 cours de professeurs français, corrélés automatiquement à vos questions pour une formation contextuelle.",
      image: ''
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>`,
      title: "Recherche Web Médicale",
      description: "L'agent trouve automatiquement les liens web spécialisés et ressources externes pertinentes pour compléter vos recherches radiologiques.",
      image: ''
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>`,
    title: "Atlas Anatomique Régional",
    description: "Navigation anatomique contextuelle avec corrélations multi-modalités intégrée directement dans vos conversations avec l'agent.",
    image: ''
  }, {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>`,
    title: "Interface Conversationnelle Unifiée",
    description: "Tout en une seule conversation : posez une question et obtenez cas cliniques, cours, modèles de CR, anatomie et liens web simultanément.",
    image: ''
  }

  ];

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  openModal(content: string): void {
    this.modalContent = content;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const elements = entry.target.querySelectorAll('.fade-in-element');
              elements.forEach((el, index) => {
                // setTimeout(() => el.classList.add('animate-fade-in'), index * 100);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(this.el.nativeElement);
    }
  }
}
