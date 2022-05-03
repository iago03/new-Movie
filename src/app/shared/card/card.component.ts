import { Component, Input, OnInit } from '@angular/core';
import { MoviListInfo } from '../inteface/shared-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() cardItem:MoviListInfo

  constructor() { }
}
