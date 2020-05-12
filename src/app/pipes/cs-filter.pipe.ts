import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csFilter'
})
export class CsFilterPipe implements PipeTransform {

  transform(value: any, min: number, max: number, ...args: any[]): any {

    if (!value || value.length == 0) {
      return null;
    }
    return value.filter((e) => e.price.display >= min && e.price.display <= max);
  }

}
