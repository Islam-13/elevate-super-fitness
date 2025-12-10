import { Component, input, InputSignal } from '@angular/core';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-meals-category',
  imports: [NgOptimizedImage],
  templateUrl: './meals-category.html',
  styleUrl: './meals-category.scss',
})
export class MealsCategory {
  mealsCategory: InputSignal<MealsCategoryDTO> =
    input.required<MealsCategoryDTO>();

  goToHealthyPage() {
    console.log('see more');
    
  }
}
