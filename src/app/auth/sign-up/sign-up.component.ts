import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }


  signUp() {
    if (this.form.valid) {
      // const {email, password} = this.form.value;
      // this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      //   this.router.navigate(['/home']);
      //   console.log(user);
      // })
    }else{
      this.form.markAllAsTouched()
    }
  }

}
