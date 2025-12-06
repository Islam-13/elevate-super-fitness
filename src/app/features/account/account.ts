import { TranslationService } from './../../core/services/translation.service';
import { Component, inject, WritableSignal } from '@angular/core';
import { ThemeService } from '../../core/services/theme-service.service';
import { CookiesService } from '../../core/services/cookies.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-account',
  imports: [TranslateModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  themeService = inject(ThemeService);
  languageService = inject(TranslationService);
  currentTheme: WritableSignal<string> = this.themeService.getTheme();
  private readonly cookies = inject(CookiesService);
  // change lang
  changeLanguage() {
    const currentLang = this.cookies.getCookie('lang');
    const useLanguage = currentLang === 'en' ? 'ar' : 'en';
    this.languageService.changeLang(useLanguage);
  }
  // light or dark theme
  toggleMood() {
    this.themeService.toggleTheme();
  }
  logout() {
    console.log('logout');
  }
  openChangePasswordModal() {}
}
