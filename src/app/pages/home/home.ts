import { Component } from '@angular/core';
import { AboutAs } from "../../shared/components/ui/about-us/aboutAs";
import { HealthyNutritions } from "../../features/meals-categories/components/healthyNutritions";

@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
