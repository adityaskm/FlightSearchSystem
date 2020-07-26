import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoDigitPipe } from './two-digit.pipe';



@NgModule({
  declarations: [TwoDigitPipe],
  imports: [
    CommonModule
  ],
  exports: [TwoDigitPipe]
})
export class TwoDigitPipeModule { }
