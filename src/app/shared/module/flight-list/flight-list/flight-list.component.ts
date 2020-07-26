import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Flight,
  LayoverFlight,
  FlightDisplayList,
} from '../../../model/misc.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  providers: [DatePipe],
})
export class FlightListComponent implements OnInit, OnChanges {
  @Input() origin: string;
  @Input() destination: string;
  @Input() date: Date;
  @Input() flightList: Flight[];
  @Input() passengers = 1;

  dateString = '';

  directFlightList: Flight[] = [];

  layoverFlightList: LayoverFlight[] = [];

  flightDisplayList: FlightDisplayList = [];

  MIN_FLIGHT_LAYOVER = 3000000;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date) {
      this.transformDate();
    }
    this.directFlightList = this.getDirectFlights();
    this.layoverFlightList = this.getLayoverFlights();
    this.flightDisplayList = this.sortFlightDisplayList([
      ...this.directFlightList,
      ...this.layoverFlightList,
    ]);
  }

  transformDate(): void {
    this.dateString = this.datePipe.transform(this.date, 'yyyy/MM/dd');
  }

  getDirectFlights(): Flight[] {
    return this.flightList.filter((flight) =>
      this.getDirectFlightMatch(flight)
    );
  }

  getDirectFlightMatch(flight: Flight): boolean {
    return (
      flight.date + '' === this.dateString &&
      flight.origin === this.origin &&
      flight.destination === this.destination
    );
  }

  getLayoverFlights(): LayoverFlight[] {
    return this.flightList
      .filter(
        (flight) =>
          flight.date + '' === this.dateString && flight.origin === this.origin
      )
      .map((flight) => {
        const layOverFlight = new LayoverFlight();
        layOverFlight.flight1 = flight;
        layOverFlight.flight2 = this.getLayoverFlightMatch(flight);
        return layOverFlight;
      })
      .filter((layOverFlight) => layOverFlight.flight2);
  }

  getLayoverFlightMatch(currentFlight: Flight): Flight {
    return this.flightList
      .map((flight) => ({
        flight,
        layover: this.checkIflayoverFlightmatches(currentFlight, flight),
      }))
      .filter((flightMatch) => flightMatch.layover > this.MIN_FLIGHT_LAYOVER)
      .sort((item1, item2) => +item1.layover - +item2.layover)[0]?.flight;
  }

  checkIflayoverFlightmatches(
    currentFlight: Flight,
    layoverFlight: Flight
  ): boolean | number {
    const flightmatch =
      currentFlight.date === layoverFlight.date &&
      currentFlight.destination === layoverFlight.origin &&
      layoverFlight.destination === this.destination;
    if (flightmatch) {
      const currentFlightArrivalTime = this.getFlightTime(
        currentFlight,
        'arrivalTime'
      );
      const layOverFlightDepartureTime = this.getFlightTime(
        layoverFlight,
        'departureTime'
      );
      return (
        flightmatch && layOverFlightDepartureTime - currentFlightArrivalTime
      );
    } else {
      return false;
    }
  }

  sortFlightDisplayList(
    flightDisplayList: FlightDisplayList
  ): FlightDisplayList {
    return flightDisplayList.sort((item1, item2) => item1.price - item2.price);
  }

  getFlightTime(
    flight: Flight,
    timeKey: 'arrivalTime' | 'departureTime'
  ): number {
    const time = flight[timeKey].split(':');
    const date = new Date(flight.date);
    date.setHours(parseInt(time[0], 10));
    date.setMinutes(parseInt(time[1], 10));
    return date.getTime();
  }
}
