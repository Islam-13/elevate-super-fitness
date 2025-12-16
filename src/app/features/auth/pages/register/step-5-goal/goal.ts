import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { onGoal } from '@store/register/register.actions';
import { RegisterHeader } from '../../../components/register-header/register-header';
import { SubmitBtn } from '../../../components/submit-btn/submit-btn';
import { OptionPicker } from '../../../components/option-picker/option-picker';

@Component({
  selector: 'app-goal',
  imports: [RegisterHeader, SubmitBtn, FormsModule, OptionPicker],
  templateUrl: './goal.html',
  styleUrl: './goal.scss',
})
export class Goal {
  options = [
    { label: 'Gain Weight', value: 'Gain weight' },
    { label: 'Lose Weight', value: 'Lose weight' },
    { label: 'Get Fitter', value: 'Get fitter' },
    { label: 'Gain more flexible', value: 'Gain more flexible' },
    { label: 'Learn The Basic', value: 'Learn the basic' },
  ];

  steps = output();

  goal = signal<string>('');

  private _store = inject(Store);

  onSelect(val: string) {
    this.goal.set(val);
  }

  onSubmit() {
    if (!this.goal()) return;

    this._store.dispatch(onGoal({ goal: this.goal() }));

    this.steps.emit();
  }
}
