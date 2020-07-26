import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MillisecondsToDurationPipe } from './milliseconds-to-duration.pipe';



@NgModule({
  declarations: [MillisecondsToDurationPipe],
  imports: [
    CommonModule
  ],
  exports: [MillisecondsToDurationPipe]
})
export class MillisecondsToDurationModule { }
