import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private auth:AngularFireAuth, private router:Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  
  test(){
    const {email, password} = this.form.value;
    this.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['home']);
    });
  }

}
