<<<<<<< HEAD
import { Component, EventEmitter,  Input,  Output, signal,  } from '@angular/core';
=======
import { Component, EventEmitter, inject, Input, OnInit, Output, signal,  } from '@angular/core';
>>>>>>> 66931d89b1c8456af7af1c029a2bb0df122bd7e6
import { MusclesGroup } from '../../../interfaces/muscles-groups';

@Component({
  selector: 'app-taps',
  standalone: true,
  templateUrl: './taps.html',
  styleUrls: ['./taps.scss'],
  imports: [ ],
})
export class Taps {
  @Input() muscleGroups = signal<MusclesGroup[]>([]);
  @Input() selectedGroupId = signal<string | null>(null);
  @Output() groupSelected = new EventEmitter<string>();
<<<<<<< HEAD

=======
>>>>>>> 66931d89b1c8456af7af1c029a2bb0df122bd7e6
  selectGroup(groupId: string) {
    this.selectedGroupId.set(groupId);
    this.groupSelected.emit(groupId);
  }
<<<<<<< HEAD

=======
>>>>>>> 66931d89b1c8456af7af1c029a2bb0df122bd7e6
}