import { Component } from '@angular/core';
import { Home } from "../../pages/home/home";

@Component({
  selector: 'app-app-layout',
  imports: [Home],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
