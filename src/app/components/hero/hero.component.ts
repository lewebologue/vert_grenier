import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="accueil">
      <div class="hero-photos">
        <div class="photo-cell large photo-bg-1">
          <svg viewBox="0 0 300 480" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="480" fill="#C8B090" />
            <rect x="60" y="180" width="180" height="110" rx="12" fill="#8B5E3C" />
            <rect x="40" y="160" width="220" height="45" rx="22" fill="#A07048" />
            <rect x="55" y="290" width="25" height="80" rx="6" fill="#7A4E30" />
            <rect x="220" y="290" width="25" height="80" rx="6" fill="#7A4E30" />
            <rect x="80" y="290" width="140" height="18" rx="4" fill="#906840" />
            <ellipse cx="150" cy="220" rx="70" ry="45" fill="#C4904A" opacity="0.3" />
            <rect x="240" y="300" width="8" height="80" rx="4" fill="#5A3820" />
            <ellipse cx="244" cy="290" rx="28" ry="35" fill="#3A6E4E" opacity="0.85" />
            <ellipse cx="260" cy="305" rx="18" ry="22" fill="#2D5A3D" opacity="0.8" />
            <rect x="0" y="370" width="300" height="110" fill="#B89870" opacity="0.4" />
            <text
              x="150"
              y="430"
              text-anchor="middle"
              font-family="Georgia,serif"
              font-size="11"
              fill="rgba(60,30,10,0.25)"
              letter-spacing="3"
            >
              MOBILIER VINTAGE
            </text>
          </svg>
        </div>
        <div class="photo-cell photo-bg-2">
          <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="220" fill="#B8A882" />
            <rect x="93" y="30" width="14" height="80" rx="5" fill="#8A6848" />
            <ellipse cx="100" cy="30" rx="12" ry="6" fill="#C49A38" />
            <path d="M60 110 Q100 130 140 110 L130 170 Q100 185 70 170 Z" fill="#D4A840" />
            <ellipse cx="100" cy="170" rx="30" ry="8" fill="#B88C2A" />
            <rect x="85" y="170" width="30" height="12" rx="4" fill="#8A6030" />
            <rect x="80" y="182" width="40" height="6" rx="3" fill="#7A5020" />
            <circle cx="100" cy="95" r="8" fill="rgba(255,220,100,0.6)" />
            <text
              x="100"
              y="210"
              text-anchor="middle"
              font-family="Georgia,serif"
              font-size="8"
              fill="rgba(60,30,10,0.3)"
              letter-spacing="2"
            >
              LUMINAIRES
            </text>
          </svg>
        </div>
        <div class="photo-cell photo-bg-3">
          <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="220" fill="#C0A870" />
            <ellipse cx="70" cy="150" rx="32" ry="42" fill="#9B6040" />
            <ellipse cx="70" cy="108" rx="22" ry="8" fill="#B07050" />
            <rect x="62" y="108" width="16" height="20" rx="3" fill="#9B6040" />
            <ellipse cx="140" cy="160" rx="24" ry="32" fill="#7A4830" />
            <ellipse cx="140" cy="128" rx="16" ry="6" fill="#8A5840" />
            <ellipse cx="105" cy="168" rx="18" ry="24" fill="#B07848" />
            <ellipse cx="105" cy="144" rx="12" ry="5" fill="#C08858" />
            <rect x="30" y="180" width="150" height="8" rx="3" fill="#8A6840" />
            <rect x="35" y="188" width="4" height="22" fill="#7A5830" />
            <rect x="171" y="188" width="4" height="22" fill="#7A5830" />
            <text
              x="100"
              y="215"
              text-anchor="middle"
              font-family="Georgia,serif"
              font-size="8"
              fill="rgba(60,30,10,0.3)"
              letter-spacing="2"
            >
              CÉRAMIQUES
            </text>
          </svg>
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-eyebrow">Brocante &amp; Vintage — depuis 1988</div>
        <h1 class="hero-title">
          <span class="line-caps">Votre maison mérite</span>
          <span class="line-big">un peu de</span>
          <span class="line-italic">charme d'époque ?</span>
        </h1>
        <p class="hero-desc">
          Du mobilier aux céramiques, des luminaires aux textiles — Vert Grenier chine et
          sélectionne les plus belles pièces des décennies 60 et 70 pour votre intérieur.
        </p>
        <a href="#articles" class="btn-outline">Voir la collection</a>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
