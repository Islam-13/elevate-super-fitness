import { Component, inject, WritableSignal } from '@angular/core';
import { ThemeService } from '../../core/services/theme-service.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  themeService = inject(ThemeService);
  currentTheme: WritableSignal<string> = this.themeService.getTheme();
  changePassword() {}
  changeLanguage() {}
  toggleMood() {
    this.themeService.toggleTheme();
  }
  logout() {
    console.log('logout');
  }
}
