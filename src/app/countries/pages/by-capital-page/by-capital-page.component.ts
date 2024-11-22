import { Component } from '@angular/core';
import { CountriesService } from '../../../shared/services/countries.service';
import { Country } from '../../../shared/interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  constructor( private CountriesService: CountriesService ){}

  public countries: Country[] =[];

  searchByCapital( term : string){
    this.CountriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries })

    }
}
