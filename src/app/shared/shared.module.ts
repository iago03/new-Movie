import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ InputComponent, ButtonComponent, CardComponent, HeaderComponent, FooterComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [ InputComponent, ButtonComponent, CardComponent, HeaderComponent, FooterComponent ],
})

export class SharedModul{}