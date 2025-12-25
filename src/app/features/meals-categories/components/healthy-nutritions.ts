import { Component } from '@angular/core';
import { MealsCategories } from './business/meals-categiories-carousel/meals-categories';
import { SectionTitle } from '../../../shared/components/ui/section-title/sectionTitle';
import { Banner } from "../../../shared/components/ui/banner/banner";

@Component({
  selector: 'app-healthy-nutritions',
  imports: [SectionTitle, MealsCategories, Banner],
  templateUrl: './healthy-nutritions.html',
  styleUrl: './healthy-nutritions.scss',
})
export class HealthyNutritions {}
