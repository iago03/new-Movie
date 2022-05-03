import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  requestError:boolean;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }


  signIn() {

    if (this.form.valid) {

      const {email, password} = this.form.value;
      this.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['home']);
        this.requestError = false;
      })
      .catch(() => {
        this.requestError = true;
        this.form.reset()
        this.form.markAllAsTouched()
      });

    } else {
      this.form.markAllAsTouched()
    }


  }

}
