import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  lang = 'fr'; // Langue par défaut

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
    this.scrollToTop();
  }

  closeMobileMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  ChangeLang(event: any): void {
    const selectedLang = event.target.value;
    this.lang = selectedLang;
    // Ici vous pouvez ajouter la logique pour changer la langue
    // Par exemple avec ngx-translate ou votre service de traduction
    console.log('Langue sélectionnée:', selectedLang);
  }
}
