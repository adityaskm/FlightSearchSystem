import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightLayoverPipe } from './flight-layover.pipe';



@NgModule({
  declarations: [FlightLayoverPipe],
  imports: [
    CommonModule
  ],
  exports: [FlightLayoverPipe]
})
export class LayoverFlightDelayModule { }
