import { MealsCategoryDTO } from '../../../shared/types/mealCategory.interface';

export interface MealsStateInterface {
  isLoading: boolean;
  data: MealsCategoryDTO[]  ;
  error: null;
}

export interface MealsCategoriesStateInterface {
  isLoading: boolean;
  mealsCategories: MealsCategoryDTO[] | null;
}
