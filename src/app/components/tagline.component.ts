import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tagline',
  standalone: true,
  template: `
    <section class="tagline-block" id="articles">
      <div class="tagline-deco"></div>
      <div class="tagline-content">
        <h2 class="tagline-title">vintage authentique<em> + belles trouvailles.</em></h2>
        <p class="tagline-text">
          Dénicher la pièce rare, c'est tout un art. Depuis plus de 35 ans, nous parcourons
          brocantes, successions et greniers pour vous rapporter ce qui a traversé le temps avec
          grâce. Chaque article est trié, nettoyé et authentifié avant d'intégrer notre boutique.
        </p>
        <a href="#contact" class="btn-outline">En savoir plus</a>
      </div>
    </section>
  `,
  styleUrls: ['./tagline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineComponent {}
