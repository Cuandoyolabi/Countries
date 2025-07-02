import { ChangeDetectionStrategy, Component, computed, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal('');

    countryResources = resource<Country[], unknown>({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return []
      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      );
    },
  })


};


  /*
  isLoading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<Country[]>([])

  onSearch( query: string ){

  if(this.isLoading()) return;

  this.isLoading.set(true)
  this.isError.set(null);

  this.isLoading.set(true)

  this.countryService.searhByCapital(query)
  .subscribe({
    next: (countries) => {

      this.isLoading.set(false);
      this.countries.set(countries);

      },
      error: ( err ) => {
        this.isLoading.set(false)
        this.countries.set([])
        this.isError.set(err);
      }
    });

  }
    */



