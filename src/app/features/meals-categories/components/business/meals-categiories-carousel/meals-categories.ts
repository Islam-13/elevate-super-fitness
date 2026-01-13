import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MealsCategory } from '../../ui/meals-category/meals-category';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import {
  selectIsLoading,
  selectMealsCategoriesData,
} from '../../../store/reducers';
import { MealsCategoriesStateInterface } from '../../../types/mealsState.interface';
import { AsyncPipe } from '@angular/common';
import { mealsActions } from '../../../store/actions';
import { LoadingComponent } from '../../../../../shared/components/ui/loading/loading.component';
import { MealsCategoryDTO } from '../../../../../shared/types/mealCategory.interface';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-meals-categories',
  imports: [CarouselModule, MealsCategory, AsyncPipe, LoadingComponent,TranslateModule ],
  templateUrl: './meals-categories.html',
  styleUrl: './meals-categories.scss',
})
export class MealsCategories implements OnInit {
  showAll = false;
  private store = inject(Store);
  data$: Observable<MealsCategoriesStateInterface>;
  
  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.prepareDataStream();
    this.loadMealsCategories();
  }

  private prepareDataStream(): void {
    this.data$ = combineLatest({
      mealsCategories: this.store.select(selectMealsCategoriesData),
      isLoading: this.store.select(selectIsLoading),
    });
  }

  private loadMealsCategories(): void {
    this.store.dispatch(mealsActions.getMealsGroups());
  }

  getVisibleCategories(mealsCategories: MealsCategoryDTO[]) {
    return this.showAll ? mealsCategories : mealsCategories.slice(0, 3);
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
  }
}
