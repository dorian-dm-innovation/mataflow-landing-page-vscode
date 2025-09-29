import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class DemoComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  this.titleService.setTitle("Demander une démo | Atlas");

  this.metaService.updateTag({ 
    name: 'description', 
    content: "Planifiez une démo personnalisée d'Atlas pour votre équipe." 
  });

  if (isPlatformBrowser(this.platformId)) {
    // Seul endroit où window est sûr
    this.metaService.updateTag({ 
      rel: 'canonical', 
      href: window.location.href 
    });
  }
}


  handleDemo(): void {
    alert("Merci ! Nous vous contacterons rapidement pour planifier une démo.");
  }

}
