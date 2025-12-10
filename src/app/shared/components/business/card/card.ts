import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalData } from '../../../interfaces/global-data/global-data';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Output() cardClick = new EventEmitter<{id: string; label: string }>();
  @Input()data: GlobalData;

  handleClick() {
    this.cardClick.emit(this.data);
  }
}