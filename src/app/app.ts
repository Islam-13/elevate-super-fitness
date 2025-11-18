import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "./shared/components/ui/navbar/navbar";
import { AppLayout } from "./layouts/app-layout/appLayout";

@Component({
  imports: [RouterModule, Navbar, AppLayout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Super Fitness';
}
