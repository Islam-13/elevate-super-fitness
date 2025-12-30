import { Component } from '@angular/core';
import { AboutAs } from '@shared/components/ui/about-us/about-as';
import { Banner } from "@shared/components/ui/banner/banner";

@Component({
  selector: 'app-about',
  imports: [AboutAs, Banner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
