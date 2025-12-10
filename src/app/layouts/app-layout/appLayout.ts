import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/ui/navbar/navbar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-app-layout',

  imports: [ Navbar, RouterModule],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
