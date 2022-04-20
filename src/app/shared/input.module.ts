import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [ InputComponent, ButtonComponent, CardComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [ InputComponent, ButtonComponent, CardComponent ],
})

export class InputModul{}