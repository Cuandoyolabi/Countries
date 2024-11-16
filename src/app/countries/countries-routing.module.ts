import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
  path: 'by-capital',
  component: ByCapitalPageComponent
  },
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
    },
]

@NgModule({
  imports: [],
  exports: [],
})
export class CountriesRoutingModule { }
