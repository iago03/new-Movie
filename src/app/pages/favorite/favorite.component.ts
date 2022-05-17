import { Component, OnInit } from '@angular/core';
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

  constructor(private getData:FirebaseService) { }

  ngOnInit(): void {
    this.uId = localStorage.getItem("uId");
    this.data$ = this.getData.getFavoriteItemsFormsFireStore(this.uId);
  }

}
