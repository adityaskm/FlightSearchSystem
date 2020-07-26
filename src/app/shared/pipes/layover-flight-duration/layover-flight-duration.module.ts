import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoverFlightDurationPipe } from './layover-flight-duration.pipe';



@NgModule({
  declarations: [LayoverFlightDurationPipe],
  imports: [
    CommonModule
  ],
  exports: [LayoverFlightDurationPipe]
})
export class LayoverFlightDurationModule { }
