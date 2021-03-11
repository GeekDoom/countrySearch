import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActive)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.regionActive) { return;}
    this.regionActive = region;
    this.countries = [];
    this.countryService.regionSearch(region)
      .subscribe((countries) => {
        this.countries = countries;
      })
  }
}
