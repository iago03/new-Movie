import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputModul } from "../../shared/input.module";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        InputModul,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: '', component:SignInComponent,
        }])
    ],
    exports: [ RouterModule ],
})

export class SignInModule{}