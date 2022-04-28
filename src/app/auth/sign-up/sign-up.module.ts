import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModul } from "../../shared/shared.module";
import { SignUpComponent } from "./sign-up.component";

@NgModule({
    declarations: [ SignUpComponent ],

    imports:[ 
        SharedModul,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: "", component:SignUpComponent,
        }])
    ],

    exports: [ RouterModule ]
})

export class SignUpMpdule{}