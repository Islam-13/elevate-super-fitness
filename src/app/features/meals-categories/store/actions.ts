import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MealsCategoriesDTO } from '../../../shared/types/mealCategoriesRes.interface';

export const mealsActions = createActionGroup({
  source: 'healthy meals',
  events: {
    //Get
    'Get Meals Groups': emptyProps(),
    'Get Meals Groups success': props<MealsCategoriesDTO>(),
    'Get Meals Groups failure': emptyProps(),
  },
});
