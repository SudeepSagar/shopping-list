import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchStr: any, ...args: any[]): any {
    if (!value || value.length == 0) {
      return null;
    }
    if (!searchStr) {
      return value;
    }
    searchStr = searchStr.toLowerCase();

    return value.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(searchStr);
    });
  }

}
