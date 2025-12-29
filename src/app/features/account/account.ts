import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { AuthApiService } from '@elevate-super-fitness/auth-api';
import { CookiesService } from '../../core/services/cookies.service';
import { ThemeService } from '../../core/services/theme-service.service';
import { TranslationService } from './../../core/services/translation.service';
import { SubmitBtn } from '../auth/components/submit-btn/submit-btn';
import { OptionPicker } from '../auth/components/option-picker/option-picker';
import { RegisterHeader } from '../auth/components/register-header/register-header';
import { NumberPicker } from '../auth/components/number-picker/number-picker';
import { goalOptions, levelOptions } from '@shared/constants/constansts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [
    TranslateModule,
    DialogModule,
    SubmitBtn,
    OptionPicker,
    RegisterHeader,
    NumberPicker,
    FormsModule,
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account implements OnInit {
  goal = signal<string>('');
  level = signal<string>('');
  weight = signal<number>(0);

  updatedGoal = signal<string>('');
  updatedLevel = signal<string>('');
  updatedWeight = signal<number>(0);

  goalVisible = false;
  levelVisible = false;
  weightVisible = false;

  levelOptions = levelOptions;
  goalOptions = goalOptions;
  numbersRange = Array.from({ length: 90 }, (_, i) => i + 40);

  isSubmitting = signal<boolean>(false);
  error = signal<string>('');

  themeService = inject(ThemeService);
  languageService = inject(TranslationService);
  currentTheme: WritableSignal<string> = this.themeService.getTheme();

  private readonly cookies = inject(CookiesService);
  private readonly _authService = inject(AuthApiService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const subscription = this._authService.loggedUserData().subscribe({
      next: (res) => {
        this.goal.set(res.goal);
        this.level.set(res.activityLevel);
        this.weight.set(res.weight);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('comp');
      },
    });

    this._destroyRef.onDestroy(() => subscription.unsubscribe());
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
  }

  openChangePasswordModal() {
    console.log('change password');
  } 

  openChangePasswordModal() {
    console.log('Change PasswordModal');
  }

  showGoalDialog() {
    this.goalVisible = true;
  }

  showLevelDialog() {
    this.levelVisible = true;
  }

  showWeightDialog() {
    this.weightVisible = true;
  }

  onGoalSelect(val: string) {
    this.updatedGoal.set(val);
  }

  onLevelSelect(val: string) {
    this.updatedLevel.set(val);
  }

  onWeightSelect(val: number) {
    this.updatedWeight.set(val);
  }

  onSubmitGoal() {
    if (!this.updatedGoal()) return;

    const data = { goal: this.updatedGoal() };

    this.editProfile(data);
  }

  onSubmitLevel() {
    if (!this.updatedLevel()) return;

    const data = { activityLevel: this.updatedLevel() };

    this.editProfile(data);
  }

  onSubmitWeight() {
    if (!this.updatedWeight()) return;

    const data = { weight: this.updatedWeight() };

    this.editProfile(data);
  }

  editProfile(data) {
    this.isSubmitting.set(true);
    this.error.set('');

    const subscription = this._authService.editProfile(data).subscribe({
      next: (res) => {
        this.goal.set(res.goal);
        this.level.set(res.activityLevel);
        this.weight.set(res.weight);
      },
      error: (err) => {
        this.error.set(err);
        this.isSubmitting.set(false);
      },
      complete: () => {
        this.goalVisible = false;
        this.levelVisible = false;
        this.weightVisible = false;
        this.isSubmitting.set(false);
      },
    });

    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
