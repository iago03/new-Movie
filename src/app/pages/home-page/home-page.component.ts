import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviListInfo } from 'src/app/shared/inteface/shared-interface';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  data$:Observable<MoviListInfo[]>;

  constructor(private auth:AngularFireAuth, private router:Router, private http:HttpService) { }

  ngOnInit(): void {
    this.getAllMovieList()
  }


  logOut(){
    // this.auth.signOut().then(v => {
    //   this.router.navigate([''])
    // });
  }

  getAllMovieList(){
    this.data$ = this.http.getAllMoviesList(1)
  }

}
