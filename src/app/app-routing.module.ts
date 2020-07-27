import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Sections/home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'**', pathMatch:'full', redirectTo:'home' }
];

export const app_routing = RouterModule.forRoot(routes)

