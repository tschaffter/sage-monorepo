import { Component, input } from '@angular/core';

@Component({
  selector: 'explorers-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = input('');
  backgroundImagePath = input('');
}
