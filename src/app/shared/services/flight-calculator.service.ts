import { Injectable } from '@angular/core';
import { Flight, LayoverFlight, FlightDisplayList } from '../model/misc.model';

@Injectable({
  providedIn: 'root',
})
export class FlightCalculatorService {
  MIN_FLIGHT_LAYOVER = 3000000;
  dateString = '';
  origin = '';
  destination = '';
  constructor() {}

  getDirectFlights(flightList: Flight[]): Flight[] {
    return flightList.filter((flight) => this.getDirectFlightMatch(flight));
  }

  getDirectFlightMatch(flight: Flight): boolean {
    return (
      flight.date + '' === this.dateString &&
      flight.origin === this.origin &&
      flight.destination === this.destination
    );
  }

  getLayoverFlights(flightList: Flight[]): LayoverFlight[] {
    return flightList
      .filter(
        (flight) =>
          flight.date + '' === this.dateString && flight.origin === this.origin
      )
      .map((flight) => {
        const layOverFlight = new LayoverFlight();
        layOverFlight.flight1 = flight;
        layOverFlight.flight2 = this.getLayoverFlightMatch(flight, flightList);
        return layOverFlight;
      })
      .filter((layOverFlight) => layOverFlight.flight2);
  }

  getLayoverFlightMatch(currentFlight: Flight, flightList: Flight[]): Flight {
    return flightList
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

  calculateFlightDuration(flight: Flight): void {
    const arrival = this.getFlightTime(flight, 'arrivalTime');
    const departure = this.getFlightTime(flight, 'departureTime');
    console.log(flight, departure, arrival);
    flight.duration = arrival - departure;
  }
}
