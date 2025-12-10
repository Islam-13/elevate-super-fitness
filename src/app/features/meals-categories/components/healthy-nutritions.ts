import { Component } from '@angular/core';
 import { MealsCategories } from './business/meals-categiories-carousel/meals-categories';
import { SectionTitle } from '../../../shared/components/ui/section-title/sectionTitle';

@Component({
  selector: 'app-healthy-nutritions',
  imports: [SectionTitle, MealsCategories],
  templateUrl: './healthy-nutritions.html',
  styleUrl: './healthy-nutritions.scss',
})
export class HealthyNutritions {}
