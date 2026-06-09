import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="testimonials">
      <div class="testimonials-header">
        <div class="t-eyebrow">Ils nous font confiance</div>
        <h2 class="t-title">ce qu'ils <em>en disent</em></h2>
      </div>
      <div class="testimonials-grid">
        @for (testimonial of testimonials; track $index) {
          <div class="t-card">
            <div class="t-quote-mark">"</div>
            <div class="t-stars">
              @for (_ of getStars(testimonial.rating); track $index) {
                <div class="t-star"></div>
              }
            </div>
            <p class="t-text">{{ testimonial.text }}</p>
            <div class="t-author">— {{ testimonial.author }}</div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: "J'ai trouvé un fauteuil Steiner en parfait état. Des connaissances pointues, une passion communicative et une honnêteté rare. Vert Grenier, c'est tout ça à la fois.",
      author: 'Marie T., Toulouse',
      rating: 5,
    },
    {
      text: "L'estimation à domicile m'a permis de découvrir que ma lampe des années 70 valait bien plus que je ne pensais. Service rapide, professionnel et bienveillant.",
      author: 'Jean-Paul M., Montauban',
      rating: 5,
    },
    {
      text: 'Une adresse incontournable pour tout amateur de vintage. Le conseil est précis, la sélection toujours renouvelée. Je reviens à chaque nouvelle livraison !',
      author: 'Sylvie R., Albi',
      rating: 5,
    },
  ];

  getStars(rating: number): number[] {
    return new Array(rating).fill(0);
  }
}
