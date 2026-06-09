import { Component, ChangeDetectionStrategy } from '@angular/core';
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
} from '../../components';

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
