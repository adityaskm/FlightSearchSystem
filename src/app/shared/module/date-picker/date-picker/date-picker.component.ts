import { Component, OnInit, forwardRef } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  date = new Date();
  constructor() {}

  ngOnInit(): void {}

  // For the Control Value Accessor
  onChange = (val: Date) => {};
  onTouched = () => {};

  dateChanged(event: MatDatepickerInputEvent<Date>): void {
    this.date = event.value;
    this.onChange(this.date);
  }

  writeValue(val: Date): void {
    this.date = val || new Date();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
