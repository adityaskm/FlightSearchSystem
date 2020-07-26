import { Component, OnInit, Input } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
