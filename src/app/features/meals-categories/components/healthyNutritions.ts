import { Component } from '@angular/core';
import { SectionTitle } from "../../../shared/components/ui/section-title/sectionTitle";
import { MealsCategories } from "./business/meals-categiories-carousel/mealsCategories";

@Component({
  selector: 'app-healthy-nutritions',
  imports: [SectionTitle, MealsCategories],
  templateUrl: './healthyNutritions.html',
  styleUrl: './healthyNutritions.scss',
})
export class HealthyNutritions {}
