import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModul } from "../../shared/shared.module";
import { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [ HomePageComponent,  ],

    imports:[
        CommonModule,
        SharedModul,
        RouterModule.forChild([{
            path: "", component:HomePageComponent
        }])
    ],

    exports: [ RouterModule,  ]
})

export class HomePageModule{}