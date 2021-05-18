import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeBold'
})

export class MakeBoldPipe implements PipeTransform {
  transform(value: string): string {
        return '<b>' + value + '</b>';
    }

}
