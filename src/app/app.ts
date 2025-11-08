import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Banner } from './shared/components/ui/banner/banner';

@Component({
  imports: [RouterModule, Banner],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'elevate-super-fitness';
  // themeService = inject(ThemeService);

  // toggleTheme() {
  //   this.themeService.toggleTheme();
  // }
}
