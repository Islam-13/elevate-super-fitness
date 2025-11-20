import { Component } from '@angular/core';
import { Workouts } from "../../features/workouts/workouts";

@Component({
  selector: 'app-app-layout',
  imports: [Workouts,],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
