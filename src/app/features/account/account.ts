import { TranslationService } from './../../core/services/translation.service';
import { Component, inject, OnDestroy, WritableSignal } from '@angular/core';
import { ThemeService } from '../../core/services/theme-service.service';
import { CookiesService } from '../../core/services/cookies.service';
import { TranslateModule } from '@ngx-translate/core';
import { AuthApiService } from '@elevate-super-fitness/auth-api';
import { Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-account',
  imports: [TranslateModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account implements OnDestroy {
  private destroy$ = new Subject<void>();
  themeService = inject(ThemeService);
  languageService = inject(TranslationService);
  currentTheme: WritableSignal<string> = this.themeService.getTheme();
  private readonly cookies = inject(CookiesService);
  private readonly _authService = inject(AuthApiService);
  private readonly _router = inject(Router);
  private readonly _localStorage = inject(LocalStorageService);

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
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

    this._authService
      .logout()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this._localStorage.remove('logged-user');
          this._router.navigate(['/']);
        },
        // error: (err) => {
        //  // this.error.set(err);

        // },
      });
  }
  openChangePasswordModal() {


  }
}
