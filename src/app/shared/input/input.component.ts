import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true,
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  value:string;
  @Input() label:string;
  @Input() inputType:string;
  @Input() inputId:string;
  @Input() inputClass:string;
  onChange: (value:any) => void;
  
  constructor() { }

  writeValue(obj: any): void {
    this.value = obj;
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    
  }
  registerOnTouched(fn: any): void {
    
  }

  ngOnInit(): void {
  }


  onKey(){
    this.onChange(this.value)
  }
}
