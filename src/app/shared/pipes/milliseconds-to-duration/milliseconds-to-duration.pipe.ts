import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToDuration',
})
export class MillisecondsToDurationPipe implements PipeTransform {
  transform(value: number): string {
    return this.milliSecondsToMinutes(value);
  }

  milliSecondsToMinutes(milliseconds: number): string {
    const seconds = milliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    return (
      (hours > 0 ? hours + ':' : '') + remainingMinutes + ':' + remainingSeconds
    );
  }
}
