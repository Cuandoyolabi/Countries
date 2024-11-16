import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './app/shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './app/shared/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
imports: [
  RouterModule.forRoot( routes ),
],
exports: [
  RouterModule,
]

})
export class AppRoutingModule { }
