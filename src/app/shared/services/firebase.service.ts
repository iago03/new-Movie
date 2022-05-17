import { Injectable } from "@angular/core";import { AngularFireAuth } from "@angular/fire/compat/auth";
4
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
    providedIn: 'root'
})

export class FirebaseService{

    constructor(private angularFireStore:AngularFirestore){}

    postDataFromFireStore(img:string, data:string, id:string, uId:string | null){
        this.angularFireStore.collection(`${uId}`).add(
            {
                poster_path: img,
                release_date: data,
                id: id,
            }
        );
    }

    getFavoriteItemsFormsFireStore(uId:string | null){
      return  this.angularFireStore.collection(`${uId}`, ref => ref).valueChanges();
    }
    

    gedId(uId:string | null){
      return  this.angularFireStore.collection(`${uId}`, ref => ref)
    }

    delete(uId:string | null, id:any){
        return  this.angularFireStore.collection(`${uId}`).doc(id).delete();
    }
}