import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppComponent } from './app.component';
import { ByCountryPageComponent } from './by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './by-region-page/by-region-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
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
