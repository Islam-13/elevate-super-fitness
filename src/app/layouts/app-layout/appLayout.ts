import { Component } from '@angular/core';
import { Workouts } from "../../features/workouts/workouts";
import { Classes } from "../../features/classes/classes";

@Component({
  selector: 'app-app-layout',
  imports: [Workouts, Classes],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
