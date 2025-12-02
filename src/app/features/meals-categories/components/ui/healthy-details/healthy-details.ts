import { Meal } from './../meal/meal';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Taps } from '../meals-group-taps/taps';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectMeals,
  selectMealsCategoriesData,
  selectSelectedCategoryOfMeals,
} from '../../../store/reducers';
import { combineLatest, Observable, take } from 'rxjs';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';
import { mealsActions } from '../../../store/actions';
import { MealDetails } from '../meal-details/meal-details';
import { LoadingComponent } from "../../../../../shared/components/ui/loading/loading.component";

@Component({
  selector: 'app-healthy-details',
  imports: [Taps, AsyncPipe, Meal, MealDetails, LoadingComponent],
  templateUrl: './healthy-details.html',
  styleUrl: './healthy-details.scss',
})
export class HealthyDetails implements OnInit {
  private _store = inject(Store);
  selectedGroupId:string;
  mealsData$ = combineLatest({
    meals: this._store.select(selectMeals),
    isLoading: this._store.select(selectIsLoading),
  });
  mealsCategories: Observable<MealsCategoryDTO[]>;
  ngOnInit(): void {
    this._store.dispatch(mealsActions.getMealsGroups());
    this.mealsCategories = this._store.select(selectMealsCategoriesData);
    this._store
      .select(selectSelectedCategoryOfMeals)
      .pipe(take(1))
      .subscribe((groupName) => {
        this.selectedGroupId = groupName;
        this._store.dispatch(mealsActions.getMealsByGroupsName({ groupName }));
      });
  }

  onGroupSelected(groupName: string) {
    this._store.dispatch(mealsActions.getMealsByGroupsName({ groupName }));
  }
}
