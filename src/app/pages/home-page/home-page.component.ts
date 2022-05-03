import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, map, Observable, of, Subscription, zip } from 'rxjs';
import { MoviListInfo } from 'src/app/shared/inteface/shared-interface';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit, OnDestroy {

  data$:BehaviorSubject<MoviListInfo[]> = new BehaviorSubject<MoviListInfo[]>([]);
  serchData$:Observable<MoviListInfo[] | undefined>
  subscribeData:Subscription;

  @ViewChildren('button') buttons:QueryList<ElementRef>;
  search:string;
  debounce:any;
  loading = true;
  page = 1;
  routerName = "now_playing";

  constructor(private http:HttpService, private router:Router) { }

  ngOnInit(): void {
    this.sessionStorageCheck()
    this.getAllMovieList()
  }

  ngOnDestroy(){
    this.subscribeData.unsubscribe()
  }

  getAllMovieList(){
    this.subscribeData = this.http.getAllMoviesList(1,"now_playing").subscribe(v => this.data$.next(v));
  }

  rout(event:Event, name:string){
    this.routerName = name;
    this.page = 1;
    
    this.buttons.forEach(o => o.nativeElement.classList.remove('active'));
    (event.target as HTMLButtonElement).classList.toggle("active");
    this.subscribeData = this.http.getAllMoviesList(1,name).subscribe(v => this.data$.next(v));
    
  }

  navigate(id:number){
    this.router.navigate(['movi-info',id]);
  }

  onKey(){
    this.loading = true
    sessionStorage.setItem("serchResult", this.search);
    clearTimeout(this.debounce)

    if(this.search != ""){
      this.debounce = setTimeout(() => {
        this.serchData$ = this.http.getSearchData(this.search);
        console.log(this.serchData$)
        this.loading = false;
      },500)
    }else{
      this.serchData$ = of();
    }
  }

  sessionStorageCheck(){
    if(sessionStorage.getItem("serchResult")){
      this.search = sessionStorage.getItem("serchResult") as string;
      this.serchData$ = this.http.getSearchData(this.search);
      this.loading = false;
    }
  }


  showMore(){
    this.page++;
    this.subscribeData = zip(this.data$, this.http.getAllMoviesList(this.page,this.routerName)).pipe(map(v => [...v[0],...v[1]]))
    .subscribe(v => this.data$.next(v));
  }

}
