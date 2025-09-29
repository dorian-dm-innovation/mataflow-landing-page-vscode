import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import lottie from 'lottie-web';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lottie-animation',
  templateUrl: './lottie-animation.component.html',
  styleUrls: ['./lottie-animation.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LottieAnimationComponent implements AfterViewInit {
  @Input() animationPath = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.animationPath) {
      lottie.loadAnimation({
        container: this.el.nativeElement.querySelector('.lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: this.animationPath
      });
    }
  }
}
