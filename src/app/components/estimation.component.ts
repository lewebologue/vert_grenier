import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-estimation',
  standalone: true,
  template: `
    <section class="estimation" id="estimation">
      <div class="estimation-content">
        <div class="estimation-eyebrow">Service à domicile</div>
        <h2 class="estimation-title">
          Faites estimer<br />vos <em>trésors</em><br />sans vous déplacer
        </h2>
        <p class="estimation-text">
          Déménagement, succession ou simple curiosité ? Notre expert se déplace chez vous, dans un
          rayon de 80 km, pour évaluer vos objets, meubles ou collections en toute confidentialité.
        </p>
        <a href="#contact" class="btn-amber-outline" [style.align-self]="'flex-start'">Prendre rendez-vous</a>

        <div class="estimation-steps">
          <div class="estep">
            <div class="estep-num">1</div>
            <div class="estep-body">
              <div class="estep-title">Prise de contact</div>
              <div class="estep-desc">
                Appelez-nous ou remplissez le formulaire. Confirmation sous 24h.
              </div>
            </div>
          </div>
          <div class="estep">
            <div class="estep-num">2</div>
            <div class="estep-body">
              <div class="estep-title">Visite à domicile</div>
              <div class="estep-desc">
                Notre expert examine vos pièces dans les meilleures conditions.
              </div>
            </div>
          </div>
          <div class="estep">
            <div class="estep-num">3</div>
            <div class="estep-body">
              <div class="estep-title">Rapport d'estimation</div>
              <div class="estep-desc">
                Vous recevez une estimation écrite et détaillée sous 48h.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="estimation-visual">
        <div class="big-circle-stat">
          <div class="num">48h</div>
          <div class="label">Délai de<br />réponse garanti</div>
        </div>
        <div class="mini-stats">
          <div class="mini-stat">
            <div class="mn">80 km</div>
            <div class="ml">Rayon<br />d'intervention</div>
          </div>
          <div class="mini-stat">
            <div class="mn">100%</div>
            <div class="ml">Gratuit &amp;<br />sans engagement</div>
          </div>
          <div class="mini-stat">
            <div class="mn">1 200+</div>
            <div class="ml">Estimations<br />réalisées</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./estimation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstimationComponent {}
