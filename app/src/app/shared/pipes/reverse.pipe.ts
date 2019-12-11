import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any{
    
    let str = '';

    for (let i = value.length - 1 ; i >= 0; i--){
      str += value[i];
    }
    
    return str;
  }

}
