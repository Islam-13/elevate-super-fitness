import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  bannerItems = [
    'live classes',
    'outdoor & online',
    'personal training',
    'live classes',
    'personal trainers',
    'personal trainers',
    'live classes',
    'outdoor & online',
    'personal trainers',
    'live classes',
    'personal trainers',
  ];

  settings = {
    '--numItems': this.bannerItems.length,
    '--width': '180px',
    '--height': '40px',
    '--speed': '25s',
    '--gap': '15px',
    '--single-slide-speed': 'calc(var(--speed) / var(--numItems))',
    '--track-width':
      'calc((var(--width) + var(--gap)) * (var(--numItems) - 1))',
  };
}
