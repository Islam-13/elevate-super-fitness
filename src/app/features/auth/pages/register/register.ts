import {
  Component,
  OnInit,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { MessageModule } from 'primeng/message';

import { Info } from './step-0-info/info';
import { Gender } from './step-1-gender/gender';
import { Age } from './step-2-age/age';
import { Weight } from './step-3-weight/weight';
import { Height } from './step-4-height/height';
import { Goal } from './step-5-goal/goal';
import { Level } from './step-6-level/level';

@Component({
  selector: 'app-register',
  imports: [
    NgTemplateOutlet,
    MessageModule,
    Info,
    Gender,
    Age,
    Weight,
    Height,
    Goal,
    Level,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  error = signal<string>('');
  currentStep!: TemplateRef<any>;

  info = viewChild.required<TemplateRef<any>>('info');
  gender = viewChild.required<TemplateRef<any>>('gender');
  age = viewChild.required<TemplateRef<any>>('age');
  weight = viewChild.required<TemplateRef<any>>('weight');
  height = viewChild.required<TemplateRef<any>>('height');
  goal = viewChild.required<TemplateRef<any>>('goal');
  level = viewChild.required<TemplateRef<any>>('level');

  ngOnInit(): void {
    this.currentStep = this.info();
  }

  onInfo() {
    this.currentStep = this.gender();
    this.error.set('');
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

  onLevel(err: string) {
    this.currentStep = this.info();

    this.error.set(err);
  }
}
