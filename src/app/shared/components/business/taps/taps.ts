import { Component, DestroyRef, EventEmitter, inject, OnInit, Output,  } from '@angular/core';
import { MusclesGroup } from '../../../interfaces/muscles-groups';
import { Muscle } from '../../../interfaces/all-muscles';
import { MusclesServices } from '../../../services/muscles/muscles-services';

@Component({
  selector: 'app-taps',
  standalone: true,
  templateUrl: './taps.html',
  styleUrls: ['./taps.scss'],
  imports: [ ],
})
export class Taps implements OnInit {
  private readonly _musclesServices = inject(MusclesServices);
  private readonly _destroyRef = inject(DestroyRef);

  muscleGroups: MusclesGroup[] = [];
  selectedGroupId: string | null = null;
  muscles: Muscle[] = [];
  @Output() musclesChanged = new EventEmitter<Muscle[]>(); 



  getAllMsclesByGroups() {
  const subscription = this._musclesServices.getAllMsclesByGroups().subscribe({
    next: (data) => {
      console.log(data);
      this.muscleGroups = data.slice(0, 7);
      if (this.muscleGroups.length > 0) {
        this.selectedGroupId = this.muscleGroups[0]._id;
        this.selectGroup(this.selectedGroupId);
      }
    },
    error: (err) => {
      console.log(err);
    },
  });
  this._destroyRef.onDestroy(() => subscription.unsubscribe());
}

  selectGroup(groupId: string) {
    this.selectedGroupId = groupId;
    const subscription = this._musclesServices.getAllMuscles(groupId).subscribe({
      next: (data) => {
        console.log(data);
        this.musclesChanged.emit(data); 
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  
  ngOnInit(): void {
    this.getAllMsclesByGroups();
  }
}