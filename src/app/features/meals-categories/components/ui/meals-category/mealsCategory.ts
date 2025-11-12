import { Component, input, InputSignal } from '@angular/core';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';

@Component({
  selector: 'app-meals-category',
  imports: [],
  templateUrl: './mealsCategory.html',
  styleUrl: './mealsCategory.scss',
})
export class MealsCategory {
  mealsCategory: InputSignal<MealsCategoryDTO> =
    input.required<MealsCategoryDTO>();
}
