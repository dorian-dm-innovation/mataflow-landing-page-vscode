// fade-in.directive.ts
import { Directive, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate-fade-in');
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
