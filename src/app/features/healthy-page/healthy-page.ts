import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MealsCategories } from '../meals-categories/services/meals-categories';
import { Meal } from '../../shared/types/meals-by-categories';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { Taps } from "../../shared/components/business/taps/taps";
import { TranslateModule } from '@ngx-translate/core';
import { Card } from "../../shared/components/business/card/card";

@Component({
  selector: 'app-healthy-page',
  imports: [SectionTitle, Taps, TranslateModule, Card],
  templateUrl: './healthy-page.html',
  styleUrl: './healthy-page.scss',
})
export class HealthyPage implements OnInit {
  private _mealsCategories = inject(MealsCategories);
  private _destroyRef = inject(DestroyRef);
  meals: Meal[] = [];
  mealsGroupsSignal = signal<{ id: string; label: string; raw?: any }[]>([]);
  selectedGroupIdSignal = signal<string | null>(null);

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    const subscription = this._mealsCategories.getAllCategories().subscribe(res => {
    const categories = res.categories ?? [];
    const mapped = categories.map((c: any) => ({
        id: String(c.strCategory ?? ''),    
        label: String(c.strCategory ?? ''),
        raw: c
      }));

      this.mealsGroupsSignal.set(mapped);
      if (mapped.length > 0) {
        const firstId = mapped[0].id;
        this.selectedGroupIdSignal.set(firstId);
        this.getAllMealsInCard(firstId);
      }
    });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  getAllMealsInCard(categoryName: string) {
    this.selectedGroupIdSignal.set(categoryName);
    const subscription = this._mealsCategories.getAllMealsInCard(categoryName)
      .subscribe(meals => {
        this.meals = meals ?? [];
        console.log('dataaaaa', categoryName, this.meals )

      });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}