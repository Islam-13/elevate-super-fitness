import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './sectionTitle.html',
  styleUrl: './sectionTitle.scss',
})
export class SectionTitle {
  title: InputSignal<string> = input.required<string>();
}
