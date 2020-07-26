import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const angularMaterialModules = [MatDatepickerModule, MatNativeDateModule];

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule, ...angularMaterialModules],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
