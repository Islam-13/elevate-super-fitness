import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RegisterData } from '@shared/types/auth-register';

export const registerState = createFeatureSelector<RegisterData>('register');

export const data = createSelector(registerState, (state) => state);
