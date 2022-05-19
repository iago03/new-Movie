import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  uId:string | null;
  data$:Observable<any>;

  constructor(private getData:FirebaseService, private router:Router) { }

  ngOnInit(): void {
    this.uId = localStorage.getItem("uId");
    this.data$ = this.getData.getFavoriteItemsFormsFireStore(this.uId);
  }

  navigate(id:string){
    this.router.navigate(['movi-info',id]);
  }

}
