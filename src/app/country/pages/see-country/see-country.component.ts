import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ cid }) => this.countryService.seeCountry(cid)))
      .subscribe(country => this.country = country)
  }
}
