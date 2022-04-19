import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.signOut().then(v => {
      this.router.navigate([''])
    });
  }

}
