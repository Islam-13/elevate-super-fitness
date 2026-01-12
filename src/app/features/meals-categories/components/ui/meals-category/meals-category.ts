import { Component, inject, input, InputSignal } from '@angular/core';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meals-category',
  imports: [NgOptimizedImage , TranslateModule],
  templateUrl: './meals-category.html',
  styleUrl: './meals-category.scss',
})
export class MealsCategory {
  private router = inject(Router);
  mealsCategory: InputSignal<MealsCategoryDTO> =
    input.required<MealsCategoryDTO>();

  goToHealthyPage() {
    console.log('see more');
  }
  readMore() {
  const category = this.mealsCategory();
  this.router.navigate(['/healthy'], {
    queryParams: {
      tab: category.idCategory
    }
  });
}
}