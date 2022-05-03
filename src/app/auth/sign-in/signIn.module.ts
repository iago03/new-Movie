import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModul } from "../../shared/shared.module";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CommonModule,
        SharedModul,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: '', component:SignInComponent,
        }])
    ],
    exports: [ RouterModule ],
})

export class SignInModule{}