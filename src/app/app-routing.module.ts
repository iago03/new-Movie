import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])

const routes: Routes = [

  {path: '', loadChildren: () => import("./auth/sign-in/signIn.module").then(m => m.SignInModule)},

  {path: 'sing-up', loadChildren: () => import("./auth/sign-up/sign-up.module").then(m => m.SignUpMpdule)},

  {path: 'home', loadChildren: () => import('./pages/home-page/page.module').then(m => m.HomePageModule), 
  canActivate: [AngularFireAuthGuard], 
  data: { authGuardPipe: redirectUnauthorizedToLogin }},

  {path: 'favorite', loadChildren: () => import('./pages/favorite/favorit.module').then(m => m.FavoritModule), 
  canActivate: [AngularFireAuthGuard], 
  data: { authGuardPipe: redirectUnauthorizedToLogin }},

  {path: 'movi-info/:id', loadChildren: () => import ("./pages/movie-info/movi-info.module").then(m => m.MovieInfoModue),
  canActivate: [AngularFireAuthGuard], 
  data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
