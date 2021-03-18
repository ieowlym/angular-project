import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldIt'
})

export class BoldItPipe implements PipeTransform {
  transform(value: string): string {
        return '<b>' + value + '</b>';
    }

}
