import { Component, EventEmitter,  Input,  Output, signal,  } from '@angular/core';
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

  selectGroup(groupId: string) {
    this.selectedGroupId.set(groupId);
    this.groupSelected.emit(groupId);
  }

}