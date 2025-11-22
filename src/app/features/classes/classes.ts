import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SectionTitle } from "../../shared/components/ui/section-title/sectionTitle";
import { Taps } from "../../shared/components/business/taps/taps";
import { TranslateModule } from '@ngx-translate/core';
import { Muscle } from '../../shared/interfaces/all-muscles';
import { Caursoul } from "../../shared/components/business/caursoul/caursoul";
import { MusclesServices } from '../../shared/services/muscles/muscles-services';

@Component({
  selector: 'app-classes',
  imports: [Taps, SectionTitle, TranslateModule, Caursoul],
  templateUrl: './classes.html',
  styleUrl: './classes.scss',
})
export class Classes implements OnInit {
 private _musclesServices = inject(MusclesServices);
  private _destroyRef = inject(DestroyRef);
  muscles: Muscle[] = [];
  muscleGroupsSignal = signal([]);
  selectedGroupIdSignal = signal<string | null>(null);

  ngOnInit() {
    this.loadMuscleGroups();
  }
  loadMuscleGroups() {
    const subscription = this._musclesServices.getAllMsclesByGroups().subscribe(groups => {
      this.muscleGroupsSignal.set(groups.slice(0, 7));
      if (groups.length > 0) {
        const firstId = groups[0]._id;
        this.selectedGroupIdSignal.set(firstId);
        this.onGroupSelected(firstId);
      }
    });

    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onGroupSelected(groupId: string) {
    this.selectedGroupIdSignal.set(groupId);

    const subscription = this._musclesServices.getAllMuscles(groupId).subscribe(data => {
      this.muscles = data;
    });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}


