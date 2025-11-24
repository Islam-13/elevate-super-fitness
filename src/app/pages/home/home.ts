import { Component } from '@angular/core';
import { Hero } from "../../features/hero/hero";
import { Workouts } from "../../features/workouts/workouts";

@Component({
  selector: 'app-home',
  imports: [Hero, Workouts],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
