import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../../model/misc.model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent implements OnInit {
  @Input() flight: Flight;
  @Input() passengers = 1;
  @Input() mode: 'single' | 'multi' = 'single';
  @Output() flightBooked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  bookFlight(): void {
    this.flightBooked.emit();
  }
}
