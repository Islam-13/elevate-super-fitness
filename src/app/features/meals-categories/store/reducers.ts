import { createFeature, createReducer, on } from '@ngrx/store';
import { MealsStateInterface } from '../types/mealsState.interface';
import { mealsActions } from './actions';

const initialState: MealsStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

export const MealsFeature = createFeature({
  name: 'Healthy',
  reducer: createReducer(
    initialState,
    on(mealsActions['getMealsGroups'], (state) => ({
      ...state,
      isLoading: true,
    })),
    on(mealsActions['getMealsGroupsSuccess'], (state, action) => ({
      ...state,
      isLoading: false,
      data: action.categories,
    })),
    on(mealsActions['getMealsGroupsFailure'], (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});
export const {
  name: healthyFeatureKey, // feature name
  reducer: healthyReducer, // feature reducer
  selectIsLoading, //  selector for `loading` property
  selectError, // selector for `error` property
  selectData: selectMealsCategoriesData, // feature selector
} = MealsFeature;
