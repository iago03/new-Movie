import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  
  form:FormGroup;

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {
    this.form = this.fb.group({
      itmName: new FormControl(),
      password: new FormControl(),
    })
  }

  
  test(){
    console.log(this.form.value)
  }

}
