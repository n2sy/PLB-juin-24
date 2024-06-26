import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], search: string): any[] {
    if (search.length == 0) return value;
    else {
      // let newTab = [];
      // for (const serv of value) {
      //   if (serv['status'] == search) newTab.push(serv);
      // }
      // return newTab;
      return value.filter((serv) => serv['status'] == search);
    }
  }
}
