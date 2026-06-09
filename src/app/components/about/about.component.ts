import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about" id="about">
      <div class="about-visual">
        <div class="about-arch-container">
          <div class="about-arch">
            <div class="about-arch-icon">
              <svg viewBox="0 0 34 34">
                <circle cx="17" cy="17" r="15" stroke-width="1.2" />
                <text
                  x="17"
                  y="14"
                  text-anchor="middle"
                  font-family="Georgia,serif"
                  font-size="7"
                  font-weight="bold"
                  fill="white"
                  stroke="none"
                >
                  Vert
                </text>
                <text
                  x="17"
                  y="22"
                  text-anchor="middle"
                  font-family="Georgia,serif"
                  font-size="7"
                  font-weight="bold"
                  fill="white"
                  stroke="none"
                >
                  Grenier
                </text>
              </svg>
            </div>
            <div class="about-arch-label">Vert Grenier</div>
            <div class="about-arch-sub">Passionnés depuis 1988</div>
            <div class="about-arch-categories">
              Mobilier<br />Luminaires<br />Céramiques<br />Textiles<br />Art déco
            </div>
          </div>
          <div class="about-arch-bottom"></div>
        </div>
        <div class="about-badge">
          <div class="b-num">35+</div>
          <div class="b-text">ans<br />d'expertise</div>
        </div>
      </div>

      <div class="about-content">
        <div class="section-eyebrow">Notre histoire</div>
        <h2 class="section-title">Bonjour,<br />nous sommes <em>Vert Grenier.</em></h2>
        <p class="about-text">
          Vert Grenier, c'est une équipe de passionnés prête à vous accompagner dans vos projets
          déco. Que vous cherchiez une pièce maîtresse pour votre salon ou souhaitiez faire estimer
          vos trésors familiaux, nous sommes là pour vous aider.
        </p>
        <p class="about-text">
          Notre approche éclectique du vintage signifie qu'il n'y a pas de règle figée. En mêlant
          couleurs, textures, époques et styles, nous créons ensemble des intérieurs uniques,
          chargés de caractère et de personnalité.
        </p>
        <a href="#contact" class="btn-amber-outline">En savoir plus sur nous</a>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
