import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-taps',
  standalone: true,
  templateUrl: './taps.html',
  styleUrls: ['./taps.scss'],
  imports: [CarouselModule],
})
export class Taps implements OnInit {
  @Input() mealsCategories: MealsCategoryDTO[];
  @Input() selectedGroupId: string;
  @Output() groupSelected = new EventEmitter<string>();
  responsiveOptions: any[] | undefined;

  selectGroup(groupId: string) {
    this.selectedGroupId = groupId;
    this.groupSelected.emit(groupId);
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 3,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '767px',
        numVisible: 4,
        numScroll: 3,
      },
      {
        breakpoint: '575px',
        numVisible: 4,
        numScroll: 3,
      },
    ];
  }
}
