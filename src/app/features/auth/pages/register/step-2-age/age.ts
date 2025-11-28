import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { onAge } from '@store/register/register.actions';
import { SubmitBtn } from '../../../components/submit-btn/submit-btn';
import { RegisterHeader } from '../../../components/register-header/register-header';
import { NumberPicker } from '../../../components/number-picker/number-picker';

@Component({
  selector: 'app-age',
  imports: [RegisterHeader, FormsModule, SubmitBtn, NumberPicker],
  templateUrl: './age.html',
  styleUrl: './age.scss',
})
export class Age {
  steps = output();

  numbersRange = Array.from({ length: 80 }, (_, i) => i + 16);

  age = signal<number>(0);

  private _store = inject(Store);

  onSelect(val: number) {
    this.age.set(val);
  }

  onSubmit() {
    if (!this.age()) return;

    this._store.dispatch(onAge({ age: this.age() }));

    this.steps.emit();
  }
}
