import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SingleFlightItemComponent } from './single-flight-item/single-flight-item.component';
import { MultiFlightItemComponent } from './multi-flight-item/multi-flight-item.component';



@NgModule({
  declarations: [FlightListComponent, SingleFlightItemComponent, MultiFlightItemComponent],
  imports: [
    CommonModule
  ],
  exports: [FlightListComponent]
})
export class FlightListModule { }
