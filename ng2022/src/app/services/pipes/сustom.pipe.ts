import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Custom'})
export class СustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    return value.replace(args[0], args[1]);
  }

}
