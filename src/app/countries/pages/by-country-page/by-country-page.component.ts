import { Component } from '@angular/core';
import { Country } from '../../../shared/interfaces/country';
import { CountriesService } from '../../../shared/services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  constructor( private CountriesService: CountriesService ){}

  public countries: Country[] =[];

  searchByCountry( term : string){
    this.CountriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries })

    }

}
