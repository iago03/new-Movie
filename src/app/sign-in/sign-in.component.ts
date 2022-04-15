import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
