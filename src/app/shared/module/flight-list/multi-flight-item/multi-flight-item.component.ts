import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoverFlight } from '../../../model/misc.model';

@Component({
  selector: 'app-multi-flight-item',
  templateUrl: './multi-flight-item.component.html',
  styleUrls: ['./multi-flight-item.component.scss'],
})
export class MultiFlightItemComponent implements OnInit {
  @Input() layoverFlight: LayoverFlight = new LayoverFlight();
  @Input() passengers = 1;
  @Output() flightBooked = new EventEmitter();

  showDetails = false;
  constructor() {}

  ngOnInit(): void {}
  bookFlight(): void {
    this.flightBooked.emit();
  }
}
