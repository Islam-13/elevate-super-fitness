import { Component } from '@angular/core';
import { HealthyNutritions } from '../../meals-categories/components/healthyNutritions';
import { AboutAs } from '../../../shared/components/ui/about-us/aboutAs';
import { WhyUs } from "../../components/why-us/why-us";


@Component({
  selector: 'app-home',
  imports: [AboutAs, HealthyNutritions, WhyUs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
