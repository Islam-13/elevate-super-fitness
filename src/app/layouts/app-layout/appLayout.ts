import { Component } from '@angular/core';
import { Home } from "../../pages/home/home";
import { About } from "../../pages/about/about";

@Component({
  selector: 'app-app-layout',
  imports: [Home, About],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
