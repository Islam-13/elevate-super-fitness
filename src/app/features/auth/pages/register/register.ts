import {
  Component,
  inject,
  OnInit,
  TemplateRef,
  viewChild,
} from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { Info } from './step-0-info/info';
import { Store } from '@ngrx/store';
import { Gender } from './step-1-gender/gender';
import { Age } from './step-2-age/age';
import { Weight } from './step-3-weight/weight';
import { Height } from './step-4-height/height';
import { Goal } from './step-5-goal/goal';
import { Level } from './step-6-level/level';

@Component({
  selector: 'app-register',
  imports: [NgTemplateOutlet, Info, Gender, Age, Weight, Height, Goal, Level],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  currentStep!: TemplateRef<any>;

  info = viewChild.required<TemplateRef<any>>('info');
  gender = viewChild.required<TemplateRef<any>>('gender');
  age = viewChild.required<TemplateRef<any>>('age');
  weight = viewChild.required<TemplateRef<any>>('weight');
  height = viewChild.required<TemplateRef<any>>('height');
  goal = viewChild.required<TemplateRef<any>>('goal');
  level = viewChild.required<TemplateRef<any>>('level');

  private _store = inject(Store);

  ngOnInit(): void {
    this.currentStep = this.info();

    this._store.select('register').subscribe({
      next: (state) => {
        console.log(state);
      },
    });
  }

  onInfo() {
    this.currentStep = this.gender();
  }

  onGender() {
    this.currentStep = this.age();
  }

  onAge() {
    this.currentStep = this.weight();
  }

  onWeight() {
    this.currentStep = this.height();
  }

  onHeight() {
    this.currentStep = this.goal();
  }

  onGoal() {
    this.currentStep = this.level();
  }

  onLevel() {
    this.currentStep = this.gender();
  }
}
