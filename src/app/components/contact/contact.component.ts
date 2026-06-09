import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="contact-inner">
        <div class="contact-eyebrow">Contactez-nous</div>
        <h2 class="contact-title">Parlons de<br /><em>votre projet vintage</em></h2>
        <p class="contact-sub">
          Une question sur une pièce, une demande d'estimation ou simplement l'envie de passer nous
          voir ? Écrivez-nous, nous répondons toujours avec plaisir.
        </p>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-row">
            <div class="form-field">
              <label for="nom">Nom</label>
              <input type="text" id="nom" placeholder="Votre nom complet" formControlName="nom" />
            </div>
            <div class="form-field">
              <label for="tel">Téléphone</label>
              <input type="tel" id="tel" placeholder="06 xx xx xx xx" formControlName="tel" />
            </div>
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="votre@email.fr" formControlName="email" />
          </div>
          <div class="form-field">
            <label for="service">Service souhaité</label>
            <select id="service" formControlName="service">
              <option value="">— Choisissez un service —</option>
              <option>Articles vintages — renseignement</option>
              <option>Estimation à domicile</option>
              <option>Vente ou dépôt d'articles</option>
              <option>Autre demande</option>
            </select>
          </div>
          <div class="form-field">
            <label for="message">Votre message</label>
            <textarea
              id="message"
              placeholder="Décrivez vos pièces, votre projet ou votre question..."
              formControlName="message"
            ></textarea>
          </div>
          <button type="submit" class="form-submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis:', this.contactForm.value);
      // Ici vous pouvez ajouter la logique pour envoyer le formulaire à un serveur
    }
  }
}
