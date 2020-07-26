import { Pipe, PipeTransform } from '@angular/core';
import { LayoverFlight } from '../../model/misc.model';
import { FlightCalculatorService } from '../../services/flight-calculator.service';

@Pipe({
  name: 'flightLayover',
})
export class FlightLayoverPipe implements PipeTransform {
  constructor(private flightCalculator: FlightCalculatorService) {}
  transform(value: LayoverFlight): number {
    const flight1Arrival = this.flightCalculator.getFlightTime(
      value.flight1,
      'arrivalTime'
    );
    const flight2Departure = this.flightCalculator.getFlightTime(
      value.flight2,
      'departureTime'
    );
    console.log(value, flight1Arrival, flight2Departure);
    return flight2Departure - flight1Arrival;
  }
}
