import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: []
})
export class CountryTableComponent {



  @Input() countries: Country[] = [];


  constructor() { }

}
