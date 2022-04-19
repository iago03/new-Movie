import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])

const routes: Routes = [

  {path: '', loadChildren: () => import("./auth/sign-in/signIn.module").then(m => m.SignInModule)},
  {path: 'sing-up', loadChildren: () => import("./auth/sign-up/sign-up.module").then(m => m.SignUpMpdule)},
  {path: 'home', loadChildren: () => import('./pages/home-page.module').then(m => m.HomePageModule), 
  canActivate: [AngularFireAuthGuard], 
  data: { authGuardPipe: redirectUnauthorizedToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
