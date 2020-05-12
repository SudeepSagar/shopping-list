import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(value: any, searchString: any, ...args: any[]): any {
    if (!value || value.length == 0) {
      return null;
    }
    return value.sort((a, b) => {
      if (searchString === 'disc') {
        return b.discount - a.discount;
      }
      return searchString === 'asc' ? a.price.display - b.price.display : b.price.display - a.price.display;
    });
  }
}
