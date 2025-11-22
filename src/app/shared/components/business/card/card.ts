import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Muscle } from '../../../interfaces/all-muscles';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
    @Input() muscle: Muscle; 

}
