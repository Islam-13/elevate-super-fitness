import { Component } from '@angular/core';
import { Hero } from "../../features/hero/hero";
import { Workouts } from "../../features/workouts/workouts";
import { AboutAs } from "../../shared/components/ui/about-us/about-as";
import { HealthyNutritions } from "../../features/meals-categories/components/healthy-nutritions";
import { Classes } from "../../features/classes/classes";
import { HealthyPage } from "../../features/healthy-page/healthy-page";

@Component({
  selector: 'app-home',
  imports: [Hero, Workouts, AboutAs, HealthyNutritions, Classes, HealthyPage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
