import { Component } from '@angular/core';
import { Home } from '../../features/pages/home/home';
import { Footer } from "../../shared/components/ui/footer/footer";

@Component({
  selector: 'app-app-layout',
  imports: [Home, Footer],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
