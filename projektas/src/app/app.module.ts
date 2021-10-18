import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';
import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { PrisijungimasComponent } from './komponentai/prisijungimas/prisijungimas.component';
import { RegistracijaComponent } from './puslapiai/registracija/registracija.component';
import { AtkurimasComponent } from './komponentai/atkurimas/atkurimas.component';
import { VartotojaiComponent } from './komponentai/vartotojai/vartotojai.component';
import { KontaktaiComponent } from './puslapiai/kontaktai/kontaktai.component';
import { PokalbiaiComponent } from './komponentai/pokalbiai/pokalbiai.component';
import { ZinuteComponent } from './komponentai/zinute/zinute.component';
import { TestComponent } from './komponentai/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    MeniuComponent,
    PrisijungimasComponent,
    RegistracijaComponent,
    AtkurimasComponent,
    VartotojaiComponent,
    KontaktaiComponent,
    PokalbiaiComponent,
    ZinuteComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
