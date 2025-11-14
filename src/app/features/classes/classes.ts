import { Component } from '@angular/core';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { Taps } from "../../shared/components/business/taps/taps";
import { TranslateModule } from '@ngx-translate/core';
import { Muscle } from '../../shared/interfaces/all-muscles';
import { Caursoul } from "../../shared/components/business/caursoul/caursoul";

@Component({
  selector: 'app-classes',
  imports: [Taps, SectionTitle, TranslateModule, Caursoul],
  templateUrl: './classes.html',
  styleUrl: './classes.scss',
})
export class Classes {
  muscles: Muscle[] = [];
  onMusclesChanged(muscles: Muscle[]) {
    this.muscles = muscles;
    }
    }

