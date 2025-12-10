import { AbstractControl, ValidationErrors } from '@angular/forms';

export function equalValues(control: AbstractControl): ValidationErrors | null {
  const password = control.parent?.get('password')?.value;
  const confirmPassword = control.value;

  if (!password) return null;

  return password === confirmPassword ? null : { misMatch: true };
}
