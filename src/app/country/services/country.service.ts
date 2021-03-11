import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;flag;population;alpha2Code')
  }

  constructor(private http: HttpClient) { }

  countrySearch(searchWord: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchWord}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  capitalSearch(searchWord: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchWord}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  seeCountry(cid: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${cid}`;
    return this.http.get<Country>(url);
  }

  regionSearch(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
