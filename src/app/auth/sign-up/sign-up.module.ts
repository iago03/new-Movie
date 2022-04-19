import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputModul } from "../../shared/input.module";
import { SignUpComponent } from "./sign-up.component";

@NgModule({
    declarations: [ SignUpComponent ],

    imports:[ 
        InputModul,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: "", component:SignUpComponent,
        }])
    ],

    exports: [ RouterModule ]
})

export class SignUpMpdule{}