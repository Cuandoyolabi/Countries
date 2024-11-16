import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppComponent } from './app.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
