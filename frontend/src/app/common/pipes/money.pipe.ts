import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === undefined) {
      return '0,00';
  } else {
      value = parseFloat(value);
      return (value).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  }

}
