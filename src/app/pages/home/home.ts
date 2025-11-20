import { Component } from '@angular/core';
import { AboutAs } from '../../shared/components/ui/about-us/about-as';
import { HealthyNutritions } from '../../features/meals-categories/components/healthy-nutritions';

@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
