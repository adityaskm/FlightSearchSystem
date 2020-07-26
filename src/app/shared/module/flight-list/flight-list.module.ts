import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SingleFlightItemComponent } from './single-flight-item/single-flight-item.component';
import { MultiFlightItemComponent } from './multi-flight-item/multi-flight-item.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CityNameModule } from '../../pipes/city-name/city-name.module';
import { TwoDigitPipeModule } from '../../pipes/two-digit-pipe/two-digit-pipe.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoverFlightDurationModule } from '../../pipes/layover-flight-duration/layover-flight-duration.module';
import { LayoverFlightDelayModule } from '../../pipes/layover-flight-delay/layover-flight-delay.module';
import { MillisecondsToDurationModule } from '../../pipes/milliseconds-to-duration/milliseconds-to-duration.module';

const angularMaterialModules = [MatExpansionModule];
const libraryModules = [PerfectScrollbarModule];
const sharedModuels = [
  CityNameModule,
  TwoDigitPipeModule,
  LayoverFlightDurationModule,
  LayoverFlightDelayModule,
  MillisecondsToDurationModule,
];

@NgModule({
  declarations: [
    FlightListComponent,
    SingleFlightItemComponent,
    MultiFlightItemComponent,
    FlightInfoComponent,
  ],
  imports: [
    CommonModule,
    ...angularMaterialModules,
    ...libraryModules,
    ...sharedModuels,
  ],
  exports: [FlightListComponent],
})
export class FlightListModule {}
