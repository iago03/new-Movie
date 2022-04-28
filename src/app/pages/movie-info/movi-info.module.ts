import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModul } from "src/app/shared/shared.module";
import { MovieInfoComponent } from "./movie-info.component";

@NgModule({
    declarations: [ MovieInfoComponent ],
    imports: [ 
        CommonModule,
        SharedModul,
        RouterModule.forChild([{
            path: "", component:MovieInfoComponent
        }])
    ],
    exports: [ MovieInfoComponent ]
})

export class MovieInfoModue{}