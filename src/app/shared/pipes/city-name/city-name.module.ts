import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityNamePipe } from './city-name.pipe';



@NgModule({
  declarations: [CityNamePipe],
  imports: [
    CommonModule
  ],
  exports: [CityNamePipe]
})
export class CityNameModule { }
