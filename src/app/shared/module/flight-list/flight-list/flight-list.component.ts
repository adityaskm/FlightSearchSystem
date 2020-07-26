import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  Flight,
  LayoverFlight,
  FlightDisplayList,
} from '../../../model/misc.model';
import { DatePipe } from '@angular/common';
import { FlightCalculatorService } from '../../../services/flight-calculator.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  providers: [DatePipe, FlightCalculatorService],
})
export class FlightListComponent implements OnInit, OnChanges {
  @Input() origin: string;
  @Input() destination: string;
  @Input() date: Date;
  @Input() flightList: Flight[];
  @Input() passengers = 1;

  @Input() flightPriceRefiner = 0;

  // We calculate this here, since we only want to take the current date and origin, destination into consideration
  @Output() maxFlightPriceRefiner = new EventEmitter<number>();
  @Output() minFlightPriceRefiner = new EventEmitter<number>();

  directFlightList: Flight[] = [];

  layoverFlightList: LayoverFlight[] = [];

  flightDisplayList: FlightDisplayList = [];
  flightDisplayListRefined: FlightDisplayList = [];

  MIN_FLIGHT_LAYOVER = 3000000;

  flightBooked: Flight | LayoverFlight;

  constructor(
    private datePipe: DatePipe,
    private flightcalculator: FlightCalculatorService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.origin ||
      changes.destination ||
      changes.date ||
      changes.passengers ||
      changes.flightList
    ) {
      if (changes.origin) {
        this.flightcalculator.origin = changes.origin.currentValue;
      }
      if (changes.destination) {
        this.flightcalculator.destination = changes.destination.currentValue;
      }
      if (changes.date) {
        this.transformDate();
      }
      this.directFlightList = this.flightcalculator.getDirectFlights(
        this.flightList
      );
      this.layoverFlightList = this.flightcalculator.getLayoverFlights(
        this.flightList
      );
      this.flightDisplayList = this.flightcalculator.sortFlightDisplayList([
        ...this.directFlightList,
        ...this.layoverFlightList,
      ]);
      this.refineFlightDisplayList();
      this.calculatePriceRefiner();
    }
    if (changes.flightPriceRefiner) {
      this.refineFlightDisplayList();
    }
    this.flightBooked = null;
  }

  transformDate(): void {
    this.flightcalculator.dateString = this.datePipe.transform(
      this.date,
      'yyyy/MM/dd'
    );
  }

  refineFlightDisplayList(): void {
    this.flightDisplayListRefined = this.flightDisplayList.filter(
      (flight) => flight.price * this.passengers <= this.flightPriceRefiner
    );
    console.log(
      'this.flightPriceRefiner',
      this.flightPriceRefiner,
      this.flightDisplayList.length,
      this.flightDisplayListRefined
    );
  }

  calculatePriceRefiner(): void {
    this.maxFlightPriceRefiner.emit(
      this.flightDisplayList[this.flightDisplayList.length - 1].price *
        this.passengers
    );
    this.minFlightPriceRefiner.emit(
      this.flightDisplayList[0].price * this.passengers
    );
  }
}
