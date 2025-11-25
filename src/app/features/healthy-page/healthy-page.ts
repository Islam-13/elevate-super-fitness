import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MealsCategories } from '../meals-categories/services/meals-categories';
import { Meal } from '../../shared/types/meals-by-categories';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { Taps } from "../../shared/components/business/taps/taps";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-healthy-page',
  imports: [SectionTitle, Taps, TranslateModule,],
  templateUrl: './healthy-page.html',
  styleUrl: './healthy-page.scss',
})
export class HealthyPage implements OnInit {

  private _mealsCategories = inject(MealsCategories)
  private _destroyRef = inject(DestroyRef);
  meals: Meal[] = [];
  mealsGroupsSignal = signal([]);
  selectedGroupIdSignal = signal<string | null>(null);

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    const subscription = this._mealsCategories.getAllCategories().subscribe(groups => {
      this.mealsGroupsSignal.set(groups.categories); 
    });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  getAllMealsInCard(categoryId: string) {
    this.selectedGroupIdSignal.set(categoryId);
    const subscription = this._mealsCategories.getAllMealsInCard(categoryId)
      .subscribe(meals => {
        this.meals = meals ?? [];
      });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
