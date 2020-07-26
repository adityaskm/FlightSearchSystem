import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../../model/misc.model';

@Component({
  selector: 'app-single-flight-item',
  templateUrl: './single-flight-item.component.html',
  styleUrls: ['./single-flight-item.component.scss'],
})
export class SingleFlightItemComponent implements OnInit {
  @Input() flight: Flight;
  constructor() {}

  ngOnInit(): void {}
}
