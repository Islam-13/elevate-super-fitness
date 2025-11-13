import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealsCategoriesDTO } from '../../../shared/types/mealCategoriesRes.interface';

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
}
