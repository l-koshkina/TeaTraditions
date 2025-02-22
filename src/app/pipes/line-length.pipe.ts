import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineLength'
})
export class LineLengthPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      return value.substring(0, 94) + '...';
    } else {
      return value;
    }
  }

}
