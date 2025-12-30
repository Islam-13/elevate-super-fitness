import { Component } from '@angular/core';
import { AboutAs } from '@shared/components/ui/about-us/about-as';
import { HealthyNutritions } from '../../meals-categories/components/healthy-nutritions';
import { WhyUs } from '../../components/why-us/why-us';
import { Workouts } from '../../workouts/workouts';
import { Hero } from '../../hero/hero';



@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions, WhyUs, Workouts, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
