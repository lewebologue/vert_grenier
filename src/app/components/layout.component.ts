import { Component } from '@angular/core';
import {
  HeaderComponent,
  HeroComponent,
  TaglineComponent,
  AboutComponent,
  ServicesComponent,
  TestimonialsComponent,
  EstimationComponent,
  ContactComponent,
  FooterComponent,
} from './index';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TaglineComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    EstimationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-tagline></app-tagline>
    <app-about></app-about>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-estimation></app-estimation>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class LayoutComponent {}
