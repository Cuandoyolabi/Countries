import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from "../shared/shared.module";

//Componentes
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryTableComponent

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
]
})
export class CountriesModule { }
