import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol'
})
export class SetCurrencyPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (args && args.currencySymbolRight) {
      return value + ' ' + args.currencySymbolRight;
    } else if (args && args.currencySymbolLeft) {
      return args.currencySymbolLeft + ' ' + value;
    }
    return value;
  }
}
