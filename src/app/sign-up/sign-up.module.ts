import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputModul } from "../shared/input.module";
import { SignUpComponent } from "./sign-up.component";

@NgModule({
    declarations: [ SignUpComponent ],

    imports:[ 
        InputModul,
        ReactiveFormsModule
    ],

    exports: [ SignUpComponent ]
})

export class SignUpMpdule{}