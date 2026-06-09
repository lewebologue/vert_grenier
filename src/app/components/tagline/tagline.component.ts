import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tagline',
  templateUrl: './tagline.component.html',
  styleUrls: ['./tagline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaglineComponent {}
