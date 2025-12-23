import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitle } from '../section-title/sectionTitle';
import { PrimaryBtn } from "../primary-btn/primaryBtn";
@Component({
  selector: 'app-about-as',
  imports: [SectionTitle, TranslateModule, PrimaryBtn],
  templateUrl: './about-as.html',
  styleUrl: './about-as.scss',
})
export class AboutAs {
    paddingSpace = input.required<boolean>();

  features = [
    {
      title: 'Personal Trainer',
      description:
        'Achieve your fitness goals with the guidance of our certified trainers.',
    },
    {
      title: 'Cardio Programs',
      description:
        'From steady-state runs to interval sprints, our treadmill programs.',
    },
    {
      title: 'Quality Equipment',
      description:
        'Our gym is equipped with the latest cardio & strength machines.',
    },
    {
      title: 'Healthy Nutritions',
      description:
        'Fuel your fitness journey with customized meal plans for you.',
    },
  ];
}
