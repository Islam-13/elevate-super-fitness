import { Component, input } from '@angular/core';

@Component({
  selector: 'app-register-header',
  imports: [],
  templateUrl: './register-header.html',
  styleUrl: './register-header.scss',
})
export class RegisterHeader {
  stepNum = input.required<number>();
  heading = input.required<string>();
  description = input.required<string>();
}
