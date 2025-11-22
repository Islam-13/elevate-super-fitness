import { Component } from '@angular/core';
import { Hero } from "../../features/hero/hero";
import { AboutAs } from "../../shared/components/ui/about-us/aboutAs";
import { HealthyNutritions } from "../../features/meals-categories/components/healthyNutritions";
import { Workouts } from "../../features/workouts/workouts";

@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions, Hero, Workouts],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
