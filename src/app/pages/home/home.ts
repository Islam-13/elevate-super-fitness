import { Component } from '@angular/core';
import { AboutAs } from "../../shared/components/ui/about-us/aboutAs";

@Component({
  selector: 'app-home',
  imports: [AboutAs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
