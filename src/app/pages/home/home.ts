import { Component } from '@angular/core';
import { Hero } from "../../features/hero/hero";
<<<<<<< HEAD
import { AboutAs } from "../../shared/components/ui/about-us/aboutAs";
import { HealthyNutritions } from "../../features/meals-categories/components/healthyNutritions";
=======
import { AboutAs } from '../../shared/components/ui/about-us/about-as';
import { HealthyNutritions } from '../../features/meals-categories/components/healthy-nutritions';
>>>>>>> 66931d89b1c8456af7af1c029a2bb0df122bd7e6
import { Workouts } from "../../features/workouts/workouts";

@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions, Hero, Workouts],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
