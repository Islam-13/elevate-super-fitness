import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MealsCategories } from '../meals-categories/services/meals-categories';
import { Meal } from '../../shared/types/meals-by-categories';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { Taps } from "../../shared/components/business/taps/taps";
import { TranslateModule } from '@ngx-translate/core';
import { Banner } from "../../shared/components/ui/banner/banner";
import { Caursoul } from "../../shared/components/business/caursoul/caursoul";
import { GlobalData } from '../../shared/interfaces/global-data/global-data';
import { MealsCategoryDTO } from '../../shared/types/mealCategory.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthy-page',
  imports: [SectionTitle, Taps, TranslateModule, Banner, Caursoul],
  templateUrl: './healthy-page.html',
  styleUrl: './healthy-page.scss',
})
export class HealthyPage implements OnInit {
  private _mealsCategories = inject(MealsCategories);
  private _destroyRef = inject(DestroyRef);
  private _router = inject(Router);
  data: GlobalData[] = [];
  meals: Meal[] = [];
  mealsGroupsSignal = signal<MealsCategoryDTO[]>([]);
  selectedGroupIdSignal = signal<string | null>(null);
  categories: MealsCategoryDTO[] = [];
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
  const subscription = this._mealsCategories.getAllCategories().subscribe({
    next: (res) => {
      const categories = res.categories ?? [];
      this.categories = categories;
      this.mealsGroupsSignal.set(categories);
      if (categories.length > 0) {
        const firstId = categories[0].idCategory;
        this.selectedGroupIdSignal.set(firstId);
        this.getAllMealsInCard(firstId);
      }
    },
    error: (err) => {
      console.log(err);
    }
  });
  this._destroyRef.onDestroy(() => subscription.unsubscribe());
}

  getAllMealsInCard(categoryId: string) {
  this.selectedGroupIdSignal.set(categoryId);
  const category = this.categories.find(
    c => c.idCategory === categoryId
  );
  if (!category) return;
  const subscription = this._mealsCategories
    .getMealsByCategory(category.strCategory)
    .subscribe({
      next: (res) => {
        this.meals = res.meals ?? [];
        this.data = this.meals.map(meal => ({
          id: meal.idMeal,
          label: meal.strMeal,
          image: meal.strMealThumb,
        }));
      },
      error: (err) => {
        console.log(err);
      }
    });
  this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  goToDetails(cardData: GlobalData) {
    console.log(cardData)
  this._router.navigate(['/details', cardData.id], {
    state: { data: cardData },
  });
}
}