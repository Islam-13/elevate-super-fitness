import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './sectionTitle.html',
  styleUrl: './sectionTitle.scss',
})
export class SectionTitle {
  title: InputSignal<string> = input.required<string>();
<<<<<<< HEAD
  subtitle: InputSignal<string> = input.required<string>();

=======
  subTitle: InputSignal<string> = input.required<string>();
  subTitlePositionStart: InputSignal<boolean> = input.required<boolean>();
>>>>>>> 6ac2fc41c99b8371458967a0bc50743e270359e2
}
