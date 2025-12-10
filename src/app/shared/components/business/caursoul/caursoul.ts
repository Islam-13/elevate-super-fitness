import { Component, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Card } from "../card/card";
import { GlobalData } from '../../../interfaces/global-data/global-data';

@Component({
  selector: 'app-caursoul',
  standalone: true,
  imports: [CarouselModule, Card],
  templateUrl: './caursoul.html',
  styleUrl: './caursoul.scss',
})
export class Caursoul implements OnChanges  {
  @Input() data: GlobalData[] = [];
  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 3 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 3 },
    { breakpoint: '767px', numVisible: 2, numScroll: 2 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];


  goToDetails(data) {
  console.log("Muscle clicked => ", data);
}
ngOnChanges(changes: SimpleChanges) {
    if (changes['muscles'] && (!this.data || this.data.length === 0)) {
      this.data = [{
        id: 'placeholder',
        name: '',
        image: null,
        label: ''
      }];
    }
  }

}