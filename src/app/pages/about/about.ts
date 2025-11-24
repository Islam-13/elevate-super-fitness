import { Component } from '@angular/core';
import { AboutAs } from '../../shared/components/ui/about-us/about-as';

@Component({
  selector: 'app-about',
  imports: [AboutAs],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
