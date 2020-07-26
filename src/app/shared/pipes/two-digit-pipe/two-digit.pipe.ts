import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigit',
})
export class TwoDigitPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(':')
      .map((digitString) =>
        parseInt(digitString, 10).toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      )
      .join(':');
  }
}
