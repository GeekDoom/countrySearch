import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
    `li{ cursor:pointer;}`
  ]
})
export class ByCapitalComponent {

  searchWord: string = '';
  cathErr: boolean = false;
  countries: Country[] = [];
  capitalSugestedSearch: Country[] = [];
  showSugestions: boolean = false;

  constructor(private countryService: CountryService) { }

  search(searchWord: string) {
    this.cathErr = false;
    this.searchWord = searchWord;
    this.showSugestions = false;
    this.countryService.capitalSearch(searchWord)
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

    this.countryService.capitalSearch(searchWord)
      .subscribe(countries => this.capitalSugestedSearch = countries.splice(0, 5),
        (err) => this.capitalSugestedSearch = [],
      );

  }

  searchSugestion(searchWord: string) {
    this.search(searchWord);
    this.showSugestions = false
  }

}
