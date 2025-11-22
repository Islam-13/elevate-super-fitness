import { Component } from '@angular/core';
<<<<<<< HEAD
import { Workouts } from "../../features/workouts/workouts";
import { Classes } from "../../features/classes/classes";

@Component({
  selector: 'app-app-layout',
  imports: [Workouts, Classes],
=======
import { Home } from "../../pages/home/home";

@Component({
  selector: 'app-app-layout',
  imports: [Home],
>>>>>>> 6ac2fc41c99b8371458967a0bc50743e270359e2
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
