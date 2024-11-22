import { Component } from '@angular/core';
import { CountriesService } from '../../../shared/services/countries.service';
import { Country } from '../../../shared/interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {

  constructor( private CountriesService: CountriesService ){}

  public countries: Country[] =[];

  searchByRegion( term : string){
    this.CountriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries })

    }

}
