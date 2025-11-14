import { Component } from '@angular/core';
import { Taps } from '../../shared/components/business/taps/taps';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { TranslateModule, } from '@ngx-translate/core';
import { Caursoul } from "../../shared/components/business/caursoul/caursoul";
import { Muscle } from '../../shared/interfaces/all-muscles';


@Component({
  selector: 'app-workouts',
  imports: [Taps, SectionTitle, TranslateModule, Caursoul],
  templateUrl: './workouts.html',
  styleUrl: './workouts.scss',
})
export class Workouts {
  muscles: Muscle[] = [];
  onMusclesChanged(muscles: Muscle[]) {
    this.muscles = muscles;
  }
  }
