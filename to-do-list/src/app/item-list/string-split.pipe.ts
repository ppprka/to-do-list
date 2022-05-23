import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringSplit',
  pure: false,
})
export class StringSplitPipe implements PipeTransform {

  transform(value: string): string {
    let newValue: Array<string> = [];
    for (let val of value.toString().split(' ')) {
      val.split(/(?=[A-Z])/).map(item => item.toLowerCase()).forEach(item => newValue.push(item));
    }
    newValue[0] = `${newValue[0].charAt(0).toUpperCase()}${newValue[0].substring(1,newValue[0].length)}`
    return  newValue.join(' ');
  }

}
