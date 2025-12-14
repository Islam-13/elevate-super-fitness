import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Knob } from 'primeng/knob';

@Component({
  selector: 'app-register-header',
  imports: [Knob, FormsModule],
  templateUrl: './register-header.html',
  styleUrl: './register-header.scss',
})
export class RegisterHeader {
  @Input({ required: true }) stepNum!: number;
  heading = input.required<string>();
  description = input.required<string>();
}
