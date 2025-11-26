import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';

@Component({
  selector: 'app-taps',
  standalone: true,
  templateUrl: './taps.html',
  styleUrls: ['./taps.scss'],
  imports: [],
})
export class Taps {
  @Input() mealsCategories: MealsCategoryDTO[];
  @Input() selectedGroupId :string;
  @Output() groupSelected = new EventEmitter<string>();
  selectGroup(groupId: string) {
    this.selectedGroupId=groupId;
    this.groupSelected.emit(groupId);
  }
}
