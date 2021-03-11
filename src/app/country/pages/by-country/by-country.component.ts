import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li{
      cursor:pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  searchWord: string = '';
  cathErr: boolean = false;
  countries: Country[] = [];
  countriesSugestedSearch: Country[] = [];
  showSugestions: boolean = false;

  constructor(private countryService: CountryService) { }

  search(searchWord: string) {
    this.cathErr = false;
    this.searchWord = searchWord;
    this.showSugestions = false;
    this.countryService.countrySearch(searchWord)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.cathErr = true;
        this.countries = [];
      })
  }

  sugestion(searchWord: string) {
    this.cathErr = false;
    this.searchWord = searchWord;
    this.showSugestions = true;

    this.countryService.countrySearch(searchWord)
      .subscribe(countries => this.countriesSugestedSearch = countries.splice(0, 5),
        (err) => this.countriesSugestedSearch = [],
      );

  }

  searchSugestion(searchWord: string) {
    this.search(searchWord);
    this.showSugestions = false
  }



}
