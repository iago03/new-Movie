import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
    declarations: [ HomePageComponent ],

    imports:[
        RouterModule.forChild([{
            path: "", component:HomePageComponent
        }])
    ],

    exports: [ RouterModule ]
})

export class HomePageModule{}