import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputModul } from "../shared/input.module";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        InputModul,
        ReactiveFormsModule,
    ],
    exports: [ SignInComponent ],
})

export class SignInModule{}