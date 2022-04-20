import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InputModul } from "../shared/input.module";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
    declarations: [ HomePageComponent ],

    imports:[
        CommonModule,
        InputModul,
        RouterModule.forChild([{
            path: "", component:HomePageComponent
        }])
    ],

    exports: [ RouterModule ]
})

export class HomePageModule{}