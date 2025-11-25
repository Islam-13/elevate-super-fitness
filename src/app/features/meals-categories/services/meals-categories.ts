import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MealsCategoriesDTO } from '../../../shared/types/mealCategoriesRes.interface';
import { Meal, MealsByCategories } from '../../../shared/types/meals-by-categories';
import { env } from '../../../core/env/env';

@Injectable({
  providedIn: 'root',
})
export class MealsCategories {
  baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  http = inject(HttpClient);
  getAllCategories(): Observable<MealsCategoriesDTO> {
    const url = `${this.baseUrl}/categories.php`;
    return this.http.get<MealsCategoriesDTO>(url);
  }

  getAllMealsInCard(category: string): Observable<Meal[]> {
    return this.http.get<MealsByCategories>(`${env.baseURL}/filter.php?c=${category}`)
    .pipe(map(res => res.meals));
}
}
