import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("À propos | Atlas");

    this.metaService.updateTag({ 
      name: 'description', 
      content: "Découvrez la mission, la vision et l'équipe derrière Atlas." 
    });

    if (isPlatformBrowser(this.platformId)) {
      this.metaService.updateTag({ 
        rel: 'canonical', 
        href: window.location.href 
      });
    }
  }
}
