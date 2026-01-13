import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Card } from '../card/card';
import { GlobalData } from '../../../interfaces/global-data/global-data';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-multi-row-carousel',
  imports: [CarouselModule, Card, TranslateModule],
  templateUrl: './multi-row-carousel.html',
  styleUrl: './multi-row-carousel.scss',
})
export class MultiRowCarousel implements OnChanges {
  @Input() data: GlobalData[] = [];
  @Output() itemClicked = new EventEmitter<GlobalData>();
  groupedItems = [];

  // ngOnInit(): void {
  //   // const size = 6; // 3 columns × 2 rows
  //   // for (let i = 0; i < this.data.length; i += size) {
  //   //   this.groupedItems.push(this.data.slice(i, i + size));
  //   // }
  //   // console.log(this.data);
  // }
  ngOnChanges() {
    if (this.data?.length) {
      this.groupedItems = [];
      const size = 6;
      for (let i = 0; i < this.data.length; i += size) {
        this.groupedItems.push(this.data.slice(i, i + size));
      }
      console.log('grouped:', this.groupedItems);
    }
  }

  goToDetails(data: GlobalData) {
    this.itemClicked.emit(data);
  }
}
