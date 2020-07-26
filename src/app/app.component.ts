import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  FlightType,
  Flight,
  FlightSearchData,
} from './shared/model/misc.model';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thoughtworks';

  flightType: FlightType = 'ONE_WAY';

  formErrorMessage = ' ';

  displayResults = false;

  private _flightList: Flight[];
  public get flightList(): Flight[] {
    return this._flightList;
  }
  public set flightList(value: Flight[]) {
    this._flightList = value;
    if (this._flightList) {
      this.flightOrigins = this._flightList
        .map((flight) => flight.origin)
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort();
      this.flightDestinations = this._flightList
        .map((flight) => flight.destination)
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort();
    } else {
      this.flightOrigins = [];
      this.flightDestinations = [];
    }
  }

  flightOrigins: string[] = [];
  flightDestinations: string[] = [];

  flightSearchForm = new FormGroup({
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    departure: new FormControl(new Date(), [Validators.required]),
    return: new FormControl(new Date()),
    passengers: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
  });

  flightSearchData: FlightSearchData;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getFlightList();
  }

  getFlightList(): void {
    this.apiService
      .getFlightList()
      .subscribe((flightList) => (this.flightList = flightList));
  }

  changeFlightType(flightType: FlightType): void {
    this.flightType = flightType;
    if (this.flightType === 'RETURN') {
      this.flightSearchForm.controls.return.setValidators([
        Validators.required,
      ]);
    } else {
      this.flightSearchForm.controls.return.clearValidators();
    }
  }

  validateForm(): boolean {
    if (!this.flightSearchForm.valid) {
      this.formErrorMessage = 'Please Check all the fields.';
      return false;
    } else if (
      this.flightType === 'RETURN' &&
      this.flightSearchForm.controls.departure.value.getTime() >=
        this.flightSearchForm.controls.return.value.getTime()
    ) {
      this.formErrorMessage =
        'Please set your Return atleast one day after departure.';
      return false;
    } else {
      this.formErrorMessage = ' ';
      return true;
    }
  }

  searchFlights(): void {
    if (this.validateForm()) {
      this.flightSearchData = this.flightSearchForm.value;
    }
  }
}
