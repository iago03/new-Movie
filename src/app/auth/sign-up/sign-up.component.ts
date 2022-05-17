import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit, OnDestroy {

  subscribe:Subscription;
  form: FormGroup;
  requestError:boolean;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router, private firebaseArr:FirebaseService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  ngOnDestroy(): void {
    if(this.subscribe != undefined){
      setTimeout(() => {
        this.subscribe.unsubscribe();
      },2000)
    }
  }


  signUp() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.auth.createUserWithEmailAndPassword(email, password)
      .then((resp) => {
          localStorage.setItem('uId', resp.user?.uid as string);
          this.addArrInLocalStorage(resp.user?.uid as string);
          this.router.navigate(['/home']);
          this.requestError = false;
        })
        .catch(() => {
          this.requestError = true;
          this.form.reset()
          this.form.get('email')?.markAsTouched();
        });

    } else {
      this.form.markAllAsTouched()
    }
  }
  
  addArrInLocalStorage(id:string | null){
    this.subscribe = this.firebaseArr.getFavoriteItemsFormsFireStore(id).subscribe( o => {
      localStorage.setItem('firebaseArr', JSON.stringify(o));
    })
  }

}
