import { Component } from '@angular/core';
import { Hero } from '../../features/hero/hero';
import { Aboutus } from '../../shared/components/ui/about-us/about-us';
import { HealthyNutritions } from '../../features/meals-categories/components/healthy-nutritions';
import { Workouts } from '../../features/workouts/workouts';

@Component({
  selector: 'app-home',
  imports: [Aboutus, HealthyNutritions, Hero, Workouts],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
