import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInModule } from './sign-in/signIn.module';
import { SignUpMpdule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SignUpMpdule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
