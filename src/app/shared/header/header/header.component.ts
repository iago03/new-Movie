import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private auth:AngularFireAuth, private router:Router,) { }

  SignOut(){
    this.auth.signOut().then(v => {
      this.router.navigate([''])
    });
  }

}
