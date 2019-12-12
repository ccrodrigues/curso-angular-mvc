import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: any): any {
    if (!isString(value)) {
        return value;
    }
    const onlyDigits = removeNonDigits(value);

    if(onlyDigits && onlyDigits.length === 11) {
        return formatCpf(onlyDigits);
    }

  }
}

function removeNonDigits(value: string): string {
  return value.replace(/\D/g,'');
}

function formatCpf(value: string): string {

  return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`;
}


/*   transform(value: any): any {
  if (!isString(value)) {
    return value;
}
const onlyDigits = removeNonDigits(value);

if(onlyDigits && onlyDigits.length === 11) {
    return formatCpf(onlyDigits);
}

}
}

function removeNonDigits(value: string): string {
return value.replace(/\D/g,'');
}

function formatCpf(value: string): string {

return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`;
} */