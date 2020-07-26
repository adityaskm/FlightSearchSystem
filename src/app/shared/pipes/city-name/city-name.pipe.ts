import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityName',
})
export class CityNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/ *\([^)]*\) */g, '');
  }
}
