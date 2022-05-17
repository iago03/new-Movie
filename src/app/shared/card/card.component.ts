import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviListInfo } from '../inteface/shared-interface';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  subscribe:Subscription;

  @Input() uId:string | null;

  @Input() favorit = false;

  @Input() cardItem:MoviListInfo

  constructor(private firebase:FirebaseService) { }

  delete(){
    this.subscribe = this.firebase.gedId(this.uId).stateChanges().subscribe((v:any) => {
    let itemId = v.find((e:any) =>e.payload.doc.data().id === this.cardItem.id)

    this.firebase.delete(this.uId,itemId.payload.doc.id);
    })

    setTimeout(() => {
      this.subscribe.unsubscribe();
    },500)
    
  }
}
