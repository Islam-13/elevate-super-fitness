import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectMealDetail,
  selectSelectedMeal,
} from '../../../store/reducers';
import { combineLatest, take } from 'rxjs';
import { mealsActions } from '../../../store/actions';
import { LoadingComponent } from '../../../../../shared/components/ui/loading/loading.component';
@Component({
  selector: 'app-meal-details',
  imports: [NgOptimizedImage, AsyncPipe, LoadingComponent],
  templateUrl: './meal-details.html',
  styleUrl: './meal-details.scss',
})
export class MealDetails implements OnInit {
  _store = inject(Store);
  mealDetails$ = combineLatest({
    mealDetails: this._store.select(selectMealDetail),
    isLoading: this._store.select(selectIsLoading),
  });
  ngOnInit(): void {
    this._store
      .select(selectSelectedMeal)
      .pipe(take(1))
      .subscribe((mealID) => {
        console.log(mealID);
        this._store.dispatch(mealsActions.getMealDetail({ mealID: mealID }));
      });
  }
}
