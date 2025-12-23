import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '@elevate-super-fitness/auth-api';
import { env } from '@env/env';
import { Message } from "primeng/message";
 import { BaseInput } from "src/app/features/auth/components/base-input/base-input";
import { CtrlError } from "src/app/features/auth/components/ctrl-error/ctrl-error";
import { SubmitBtn } from "src/app/features/auth/components/submit-btn/submit-btn";

@Component({
  selector: 'app-change-password',
  imports: [Message, BaseInput, CtrlError, SubmitBtn,ReactiveFormsModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword implements OnInit{
   form: FormGroup;

  isSubmitting = signal<boolean>(false);
  error = signal<string>('');

  private readonly _destroyRef = inject(DestroyRef);
  private readonly _authService = inject(AuthApiService);
 
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(env.passwordREG),
      ]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      this.isSubmitting.set(true);
      this.error.set('');
      const subscription = this._authService.login(this.form.value).subscribe({
        next: (res) => {
    console.log(res);
    
        },
        error: (err) => {
          this.error.set(err);
          this.isSubmitting.set(false);
        },
        complete: () => {
          this.isSubmitting.set(false);
          this.form.reset();
        },
      });
      this._destroyRef.onDestroy(() => subscription.unsubscribe());
    }
  }
}
