import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from './core/services/theme-service.service';

@Component({
  imports: [RouterModule, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'elevate-super-fitness';
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
