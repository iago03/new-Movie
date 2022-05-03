import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequsetInterceptor } from './interceptor/request.interceptor';

const INTERCEPTOR_PROVIDER:Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: RequsetInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [ INTERCEPTOR_PROVIDER ],
  bootstrap: [AppComponent]
})
export class AppModule { }
