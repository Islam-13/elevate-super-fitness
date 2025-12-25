import { Component,EventEmitter, Input,Output,  } from '@angular/core';

@Component({
  selector: 'app-taps',
  standalone: true,
  templateUrl: './taps.html',
  styleUrls: ['./taps.scss'],
  imports: [ ],
})
export class Taps {
  @Input() carouselType: 'muscles' | 'healthy';
  @Output() tabClicked = new EventEmitter<string>();
  selectedItemId: string | null = null;
  private _selected: string | null = null;
  @Input() set selected(value: string | null) {
    this._selected = value;
    this.selectedItemId = value;
  }
  get selected() {
    return this._selected;
  }
  @Input() _data: { id: string; label: string }[] = [];
  @Input() set data(value: any[]) {
    if (!value) {
      this._data = [];
      return;
    }
    this._data = value.map((item: any, index: number) => ({
      id:
        item.id ||
        item._id ||
        item.code ||
        item.key ||
        item.idCategory ||              
        (index + 1).toString(),        

      label:
        item.label ||
        item.title ||
        item.name ||
        item.group ||
        item.strCategory ||             
        ''
    }));
  }
  get data() {
    return this._data;
  }

  selectTab(id: string) {
    this.selectedItemId = id;
    this.tabClicked.emit(id);
  }
}