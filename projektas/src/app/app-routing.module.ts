import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KontaktaiComponent } from './puslapiai/kontaktai/kontaktai.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';
import { RegistracijaComponent } from './puslapiai/registracija/registracija.component';
import{AngularFireAuthGuard}from '@angular/fire/compat/auth-guard';



export const routes:Routes=[
 
  { path: 'kontaktai', component: KontaktaiComponent },
  { path: 'pagrindinis', component: PagrindinisComponent,canActivate:[AngularFireAuthGuard]},
  { path: 'registracija', component: RegistracijaComponent },
  { path: '**', component: RegistracijaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
