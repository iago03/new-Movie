import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MoviItemInfo, MoviListInfo } from '../inteface/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  imgPath = "http://image.tmdb.org/t/p/w500";
  api_key = "730c458a75766d797ebf72e6c2791bf9";

  constructor(private http: HttpClient) { }

  getAllMoviesList(page: number, name: string) {
    return this.http.get<Observable<MoviListInfo[]>>(`https://api.themoviedb.org/3/movie/${name}?api_key=${this.api_key}&language=en-US&page=${page}`)
      .pipe(map((response: any): MoviListInfo[] => {
        let newData = response.results.map((o: MoviListInfo) => {

          o.backdrop_path = this.imgPath + o.backdrop_path;
          o.poster_path = this.imgPath + o.poster_path;

          let newDataItem: MoviListInfo = o;

          return newDataItem
        });
        return newData
      }));
  }



  getMoviesItemInfo(id: string) {
    return this.http.get<Observable<MoviItemInfo>>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`)
      .pipe(map((response: any): MoviItemInfo => {

        response.backdrop_path = this.imgPath + response.backdrop_path;
        response.poster_path = this.imgPath + response.poster_path;

        let newData = response;
        return newData
      }));

  }


  getMovieVideoLink(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=730c458a75766d797ebf72e6c2791bf9&language=en-US`)
      .pipe(map((response: any): string => {
        let video = response.results.filter((v: any) => v.name === "Official Trailer");
        let videoUrl = `http://www.youtube.com/embed/${video[0].key}?modestbranding=1`
        return videoUrl
      }))
  }


  getSearchData(filmName: string) {

    return this.http.get<Observable<MoviListInfo[]>>(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&query=${filmName}&page=1&include_adult=false`)
      .pipe(map((response: any): MoviListInfo[] => {
        let newData = response.results.map((o: MoviListInfo) => {

          o.backdrop_path = this.imgPath + o.backdrop_path;
          o.poster_path = this.imgPath + o.poster_path;

          let newDataItem: MoviListInfo = o;

          return newDataItem
        });
        return newData
      }));

  }


}
