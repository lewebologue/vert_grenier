import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="services" id="nos-services">
      <div class="services-header">
        <div class="services-eyebrow">Ce que nous proposons</div>
        <h2 class="services-title">nos <em>services</em></h2>
      </div>

      <div class="services-grid">
        <div class="service-card illus-chair">
          <div class="card-visual">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">
              <rect width="400" height="300" fill="#C4A87C" />
              <rect x="100" y="100" width="200" height="110" rx="14" fill="#7A4830" />
              <rect x="80" y="80" width="240" height="50" rx="25" fill="#8B5A3C" />
              <rect x="110" y="210" width="28" height="60" rx="7" fill="#6A3828" />
              <rect x="262" y="210" width="28" height="60" rx="7" fill="#6A3828" />
            </svg>
          </div>
          <div class="card-overlay"></div>
          <p class="card-desc">
            Mobilier, luminaires, céramiques et objets déco des années 60 &amp; 70, triés et
            authentifiés.
          </p>
          <div class="card-label">
            <svg viewBox="0 0 16 16"><path d="M2 8h12M8 2l6 6-6 6" /></svg>
            Articles Vintages
          </div>
        </div>

        <div class="service-card illus-visit">
          <div class="card-visual">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">
              <rect width="400" height="300" fill="#D0B888" />
              <polygon points="200,50 90,150 310,150" fill="#8B5A3C" />
              <rect x="110" y="150" width="180" height="120" fill="#A07048" />
              <rect x="165" y="195" width="70" height="75" rx="3" fill="#7A4830" />
            </svg>
          </div>
          <div class="card-overlay"></div>
          <p class="card-desc">
            Notre expert se déplace chez vous pour estimer vos pièces, meubles ou collections sans
            engagement.
          </p>
          <div class="card-label">
            <svg viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v3l2 2" />
            </svg>
            Estimations à Domicile
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
