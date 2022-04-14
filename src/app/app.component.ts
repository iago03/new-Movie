import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form:FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      itmName: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  
  test(){
    console.log(this.form.value)
  }
}
