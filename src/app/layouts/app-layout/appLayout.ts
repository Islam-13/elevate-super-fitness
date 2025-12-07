import { Component } from '@angular/core';
import { Home } from "../../pages/home/home";
import { Navbar } from "../../shared/components/ui/navbar/navbar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-app-layout',
  imports: [Home, Navbar, RouterModule],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
