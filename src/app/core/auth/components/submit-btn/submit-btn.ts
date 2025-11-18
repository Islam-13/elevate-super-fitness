import { Component, input } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  imports: [],
  templateUrl: './submit-btn.html',
  styleUrl: './submit-btn.scss',
})
export class SubmitBtn {
  isSubmitting = input.required<boolean>();
  label = input.required<string>();
}
