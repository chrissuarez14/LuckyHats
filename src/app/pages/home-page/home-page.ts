import { Component } from '@angular/core';
import { HeaderComponent } from './components/header-component/header-component';
import { ButtonModule } from 'primeng/button';
import { HeroComponent } from './components/hero-component/hero-component';
import { FeatureCollectionsComponent } from './components/feature-collections-component/feature-collections-component';
import { OurStoryComponent } from './components/our-story-component/our-story-component';
import { TestimonialComponent } from './components/testimonial-component/testimonial-component';
import { NewletterSingupComponent } from './components/newletter-singup-component/newletter-singup-component';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    ButtonModule,
    HeroComponent,
    FeatureCollectionsComponent,
    OurStoryComponent,
    TestimonialComponent,
    NewletterSingupComponent,
    FooterComponent
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
