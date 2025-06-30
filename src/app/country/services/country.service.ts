import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  searchByCapital(arg0: any): unknown {
    throw new Error('Method not implemented.');
  }

  private http = inject(HttpClient);

  searhByCapital(query: string): Observable<Country[]>{

    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
      .pipe( map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError(error => {
      console.log('Error fetching', error);

        return throwError(() => new Error(`No se pudo obtener paises con ese query ${ query }`));
      })
    );
  };
};
