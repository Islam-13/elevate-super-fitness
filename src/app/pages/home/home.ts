import { Component } from '@angular/core';
import { Hero } from "../../features/hero/hero";
import { AboutAs } from "../../shared/components/ui/about-us/aboutAs";
import { HealthyNutritions } from "../../features/meals-categories/components/healthyNutritions";

@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions,Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
