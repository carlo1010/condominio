/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBrands'
})
export class FilterBrandsPipe implements PipeTransform {
    // filter brand
    transform(brands: Array<any>, firstLetter?) {
        if (firstLetter === 'all') {
            return brands;
        } else {
            return brands.filter(brand => brand.name.charAt(0) === firstLetter.toLowerCase());
        }
    }
}
