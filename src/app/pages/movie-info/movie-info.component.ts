import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviItemInfo } from 'src/app/shared/inteface/shared-interface';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  Id:string;
  movieInfo$:Observable<MoviItemInfo>;
  videoUrl:SafeResourceUrl;

  constructor(private activeRoute:ActivatedRoute, private http:HttpService, private sanitaizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getDataFromActivateRoute();
    this.getMovieInfo();
    this.getVideo();

  }

  getDataFromActivateRoute(){
    this.activeRoute.params.subscribe((params:Params) => {
      this.Id = params['id'];
    })
  }

  getMovieInfo(){
    this.movieInfo$ = this.http.getPopularMoviesItemInfo(this.Id)
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

}
