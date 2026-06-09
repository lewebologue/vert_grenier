import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="nav">
      <div class="nav-left">
        <a href="#accueil">Accueil</a>
        <a href="#articles">Articles</a>
        <a href="#about">Notre histoire</a>
      </div>

      <div class="nav-logo-block">
        <div class="nav-logo-circle">
          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16" fill="#2D5A3D" />
            <text
              x="17"
              y="14.5"
              text-anchor="middle"
              font-family="Georgia,serif"
              font-size="7"
              font-weight="bold"
              fill="white"
            >
              Vert
            </text>
            <text
              x="17"
              y="23"
              text-anchor="middle"
              font-family="Georgia,serif"
              font-size="7"
              font-weight="bold"
              fill="white"
            >
              Grenier
            </text>
          </svg>
        </div>
        <div class="nav-logo-text">Vert Grenier</div>
        <div class="nav-logo-sub">Brocante Vintage</div>
      </div>

      <div class="nav-right">
        <a href="#estimation">Estimations</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
