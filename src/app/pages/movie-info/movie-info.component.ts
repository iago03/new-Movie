import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviItemInfo } from 'src/app/shared/inteface/shared-interface';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  Id:string;
  uId:string | null;
  alreadyAdd = false;
  movieInfo$:Observable<MoviItemInfo>;
  videoUrl:SafeResourceUrl;

  constructor(private activeRoute:ActivatedRoute, private http:HttpService, private sanitaizer:DomSanitizer, private addFirebaseStore:FirebaseService) { }

  ngOnInit(): void {
    this.getDataFromActivateRoute();
    this.getMovieInfo();
    this.getVideo();
    this.checkLocalStorageData()

  }

  getDataFromActivateRoute(){
    this.activeRoute.params.subscribe((params:Params) => {
      this.Id = params['id'];
    })
  }

  getMovieInfo(){
    this.movieInfo$ = this.http.getMoviesItemInfo(this.Id)
  }

  addInFireStore(img:string, data:string){
    this.alreadyAdd = true;
    this.uId = localStorage.getItem('uId');
    this.addFirebaseStore.postDataFromFireStore(img, data, this.Id, this.uId);
    this.addInLocalStorageArr();
  }

  getVideo(){
    this.http.getMovieVideoLink(this.Id).subscribe({
    
    next: (v) => {
      this.videoUrl = this.sanitaizer.bypassSecurityTrustResourceUrl(v);
      console.log(this.videoUrl)
    },
    error: (err) => {
      console.log(err)
    }}
    );
  }


  checkLocalStorageData(){
    let data = JSON.parse(localStorage.getItem("firebaseArr") as string);
    if(data.some((e:any) => e.id === this.Id)){
      this.alreadyAdd = true;
    }
  }

  addInLocalStorageArr(){
    let obj = { id: this.Id};
    let arr = JSON.parse(localStorage.getItem("firebaseArr") as string);
    arr.push(obj);
    localStorage.setItem('firebaseArr', JSON.stringify(arr));
  }

}
