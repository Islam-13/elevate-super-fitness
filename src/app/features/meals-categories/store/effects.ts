import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MealsCategories } from '../services/meals-categories';
import { catchError, map, of, switchMap } from 'rxjs';
import { mealsActions } from './actions';
import { MealsCategoriesDTO } from '../../../shared/types/mealCategoriesRes.interface';

export const getMealsCategoriesEffect = createEffect(
  (actions$ = inject(Actions), mealsCategories = inject(MealsCategories)) => {
    return actions$.pipe(
      ofType(mealsActions['getMealsGroups']),
      switchMap(() => {
        return mealsCategories.getAllCategories().pipe(
          map((mealsGroupEsponse: MealsCategoriesDTO) => {
            return mealsActions['getMealsGroupsSuccess'](mealsGroupEsponse);
          }),
          catchError(() => {
            return of(mealsActions['getMealsGroupsFailure']());
          })
        );
      })
    );
  },
  { functional: true }
);
