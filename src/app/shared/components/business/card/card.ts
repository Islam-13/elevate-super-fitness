import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() id!: string;
  @Input() title!: string;
  @Input() image!: string;
  @Output() cardClick = new EventEmitter<string>();
  
  handleClick() {
    this.cardClick.emit(this.id);
  }
}