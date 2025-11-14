import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Muscle } from '../../../interfaces/all-muscles';
import { CarouselModule } from 'primeng/carousel';
import { Card } from "../card/card";

@Component({
  selector: 'app-caursoul',
  standalone: true,
  imports: [CarouselModule, Card],
  templateUrl: './caursoul.html',
  styleUrl: './caursoul.scss',
})
export class Caursoul implements OnChanges {
  @Input() muscles: Muscle[] = [];

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 3 },
    { breakpoint: '767px', numVisible: 2, numScroll: 2 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];


  ngOnChanges(changes: SimpleChanges) {
    if (changes['muscles'] && (!this.muscles || this.muscles.length === 0)) {
      this.muscles = [{
        _id: 'placeholder',
        name: '',
        image: null
      }];
    }
  }
}


