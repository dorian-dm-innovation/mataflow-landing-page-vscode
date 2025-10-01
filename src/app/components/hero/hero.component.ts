import { Component, ElementRef, HostListener, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('imageRef', { static: true }) imageRef!: ElementRef<HTMLImageElement>;

  isMobile = false;
  isVideoModalOpen = false;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Ne s’exécute que côté navigateur
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      window.addEventListener('resize', () => this.checkMobile());
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) this.checkMobile();
  }

  @HostListener('document:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId) || this.isMobile) return;
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.parallax');
    elements.forEach(el => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.dataset['speed'] || '0.1');
      const yPos = -scrollY * speed;
      element.style.setProperty('--parallax-y', `${yPos}px`);
    });
  }

  private checkMobile() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId) || this.isMobile || !this.containerRef || !this.imageRef) return;
    const rect = this.containerRef.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.imageRef.nativeElement.style.transform =
      `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!isPlatformBrowser(this.platformId) || !this.imageRef) return;
    this.imageRef.nativeElement.style.transform =
      `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  }

  openVideoModal(): void {
    this.isVideoModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false;
    document.body.style.overflow = '';
  }
}
