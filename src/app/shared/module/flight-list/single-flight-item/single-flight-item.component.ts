import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../../model/misc.model';

@Component({
  selector: 'app-single-flight-item',
  templateUrl: './single-flight-item.component.html',
  styleUrls: ['./single-flight-item.component.scss'],
})
export class SingleFlightItemComponent implements OnInit {
  @Input() flight: Flight;
  @Input() passengers = 1;
  @Output() flightBooked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  bookFlight(): void {
    this.flightBooked.emit();
  }
}
