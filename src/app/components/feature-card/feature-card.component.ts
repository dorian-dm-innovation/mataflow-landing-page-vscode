import { Component, Input, ElementRef, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FeatureCardComponent implements OnInit, AfterViewInit {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() index!: number;

  safeIcon!: SafeHtml;

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              // target.classList.add('animate-fade-in');
              // target.classList.remove('opacity-0'); // 👈 rendre visible
              observer.unobserve(target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(this.el.nativeElement);
    }
  }
}
