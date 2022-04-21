import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChildren('button') buttons:QueryList<ElementRef>;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getAllMovieList()
  }

  getAllMovieList(){
    this.data$ = this.http.getAllMoviesList(1,"now_playing")
  }

  rout(event:Event, name:string){
    
    this.buttons.forEach(o => o.nativeElement.classList.remove('active'));
    (event.target as HTMLButtonElement).classList.toggle("active");
    this.data$ = this.http.getAllMoviesList(1,name);
    
  }

}
