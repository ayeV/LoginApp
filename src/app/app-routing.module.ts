import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
 
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
