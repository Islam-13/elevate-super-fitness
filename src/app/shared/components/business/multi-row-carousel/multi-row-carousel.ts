import {
  Component,
  EventEmitter,
  HostListener,
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
  @HostListener('window:resize')
  onResize() {
    this.buildGroups();
  }

  ngOnChanges() {
    this.buildGroups();
  }
  buildGroups() {
    if (this.data?.length) {
      this.groupedItems = [];
      //  const size = 6;
      // const isSmall = window.innerWidth < 768; // sm breakpoint
      // const size = isSmall ? 2 : 6; // 1×2 vs 3×2
      let cols;
      const w = window.innerWidth;

      if (w >= 1024) {
        cols = 3; // desktop
      } else if (w >= 768) {
        cols = 2; // tablet
      } else {
        cols = 1; // phone
      }

      const rows = this.data?.length>3?2:1;
      const size = cols * rows;
      for (let i = 0; i < this.data.length; i += size) {
        this.groupedItems.push(this.data.slice(i, i + size));
        // console.log('grouped in for:', this.groupedItems);
      }
      //  console.log('grouped:', this.groupedItems);
    }  
  }
  goToDetails(data: GlobalData) {
    this.itemClicked.emit(data);
  }
}
