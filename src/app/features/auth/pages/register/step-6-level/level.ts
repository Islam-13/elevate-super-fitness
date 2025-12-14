import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterHeader } from '../../../components/register-header/register-header';
import { SubmitBtn } from '../../../components/submit-btn/submit-btn';
import { OptionPicker } from '../../../components/option-picker/option-picker';
import { Store } from '@ngrx/store';
import { onLevel } from '@store/register/register.actions';
import { RegisterData } from '@shared/types/auth-register';
import { AuthApiService } from 'libs/auth-api/src/lib/auth-api/auth-api.service';
import { Router } from '@angular/router';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-level',
  imports: [
    RegisterHeader,
    SubmitBtn,
    FormsModule,
    OptionPicker,
    MessageModule,
  ],
  templateUrl: './level.html',
  styleUrl: './level.scss',
})
export class Level implements OnInit {
  options = ['Rookie', 'Beginner', 'Intermediate', 'Advance', 'True Beast'];

  level = signal<string>('');
  isSubmitting = signal<boolean>(false);
  error = signal<string>('');

  data = signal<RegisterData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    gender: '',
    height: 0,
    weight: 0,
    age: 0,
    goal: '',
    activityLevel: '',
  });

  private _store = inject(Store);
  private readonly _authService = inject(AuthApiService);
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this._store.select('register').subscribe({
      next: (state) => this.data.set(state),
    });
  }

  onSelect(val: string) {
    this.level.set(val);
    this._store.dispatch(onLevel({ activityLevel: val }));
  }

  onSubmit() {
    if (!this.level()) {
      return;
    } else {
      this.isSubmitting.set(true);
      this.error.set('');
console.log(this.data())
      const subscription = this._authService.register(this.data()).subscribe({
        next: () => this._router.navigate(['/']),
        error: (err) => {
          this.error.set(err);
          this.isSubmitting.set(false);
        },
        complete: () => {
          this.isSubmitting.set(false);
        },
      });

      this._destroyRef.onDestroy(() => subscription.unsubscribe());
    }
  }
}
