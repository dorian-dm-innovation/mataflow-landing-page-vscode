import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DemoComponent } from './pages/demo/demo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ExpertCommitteeComponent } from './components/expert-committee/expert-committee.component';
import { TrustDatabaseComponent } from './components/trust-database/trust-database.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    NotFoundComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    ExpertCommitteeComponent,
    TrustDatabaseComponent,
    TestimonialsComponent,
    DetailsSectionComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
