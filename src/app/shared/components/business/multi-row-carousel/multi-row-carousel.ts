import { Component, Input,} from '@angular/core';
import { Muscle } from '../../../interfaces/all-muscles';

@Component({
  selector: 'app-multi-row-carousel',
  templateUrl: './multi-row-carousel.html',
  styleUrls: ['./multi-row-carousel.scss'],
  imports: [],
})
export class MultiRowCarousel  {
  @Input() muscles: Muscle[] = [];
}