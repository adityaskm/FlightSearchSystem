import { Pipe, PipeTransform } from '@angular/core';
import { FlightCalculatorService } from '../../services/flight-calculator.service';
import { LayoverFlight } from '../../model/misc.model';

@Pipe({
  name: 'layoverFlightDuration',
})
export class LayoverFlightDurationPipe implements PipeTransform {
  constructor(private flightCalculator: FlightCalculatorService) {}
  transform(layoverFlight: LayoverFlight): Date {
    const flight1Departure = this.flightCalculator.getFlightTime(
      layoverFlight.flight1,
      'departureTime'
    );
    const flight2Arrival = this.flightCalculator.getFlightTime(
      layoverFlight.flight2,
      'arrivalTime'
    );
    return new Date(flight2Arrival - flight1Departure);
  }
}
