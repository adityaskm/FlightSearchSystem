import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from './shared/module/date-picker/date-picker.module';

import { HttpClientModule } from '@angular/common/http';
import { FlightListModule } from './shared/module/flight-list/flight-list.module';
import { MatSliderModule } from '@angular/material/slider';

const subModules = [DatePickerModule, FlightListModule];

const angularMaterialModules = [MatSliderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...angularMaterialModules,
    ...subModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
