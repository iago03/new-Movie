import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value:string;
  @Input() fontSize:string = "16px";
  @Input() margin:string = "30px 0px";
  @Input() padding:string = "16px";

  constructor() { }


}
