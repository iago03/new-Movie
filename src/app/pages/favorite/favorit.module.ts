import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModul } from "src/app/shared/shared.module";
import { FavoriteComponent } from "./favorite.component";

@NgModule({
    declarations: [ FavoriteComponent ],

    imports: [ 
        SharedModul,
        CommonModule,
        RouterModule.forChild([{
            path: "", component:FavoriteComponent
        }])
    ],

    exports: [ FavoriteComponent ]
})

export class FavoritModule{}