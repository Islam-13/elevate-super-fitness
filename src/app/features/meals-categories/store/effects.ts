import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MealsCategories } from '../services/meals-categories';
import { catchError, map, of, switchMap } from 'rxjs';
import { mealsActions } from './actions';
import { MealsCategoriesDTO } from '../../../shared/types/mealCategoriesRes.interface';
import { MealsByCategoryDTO } from '../types/meal-response.interface';
import { MealDetailsDTO } from '../types/meal-details-response.interface';
 
export const getMealsCategoriesEffect = createEffect(
  (actions$ = inject(Actions), mealsCategories = inject(MealsCategories)) => {
    return actions$.pipe(
      ofType(mealsActions.getMealsGroups),
      switchMap(() => {
        return mealsCategories.getAllCategories().pipe(
          map((mealsGroupEsponse: MealsCategoriesDTO) => {
            return mealsActions.getMealsGroupsSuccess(mealsGroupEsponse);
          }),
          catchError((err) => {
            console.log(err)
            return of(mealsActions.getMealsGroupsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
export const getMealsEffect = createEffect(
  (actions$ = inject(Actions), mealsCategories = inject(MealsCategories)) => {
    return actions$.pipe(
      ofType(mealsActions.getMealsByGroupsName),
      switchMap(({ groupName }) => {
        return mealsCategories.getMealsByCategory(groupName).pipe(
          map((mealsResponse: MealsByCategoryDTO) => {
            return mealsActions.getMealsByGroupsNameSuccess(mealsResponse);
          }),
          catchError(() => {
            return of(mealsActions.getMealsByGroupsNameFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
export const getMealDetailsEffect = createEffect(
  (actions$ = inject(Actions), mealsCategories = inject(MealsCategories)) => {
    return actions$.pipe(
      ofType(mealsActions.getMealDetail,mealsActions.selectMeal),
      switchMap(({ mealID }) => {
        return mealsCategories.getMealDetails(mealID).pipe(
          map((mealDetailsResponse: MealDetailsDTO) => {
            return mealsActions.getMealDetailSuccess(mealDetailsResponse);
          }),
          catchError(() => {
            return of(mealsActions.getMealDetailFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
