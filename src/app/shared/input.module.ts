import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [ InputComponent, ButtonComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [ InputComponent, ButtonComponent ],
})

export class InputModul{}