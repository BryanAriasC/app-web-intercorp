import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(value: string): string  {
    
    let fecha = value.split('-'); // 2020-10-01

    let yyyy = fecha[0];
    let mm = fecha[1];
    let dd = fecha[2];

    let f = dd+"/"+mm+"/"+yyyy;
    
    return f;

  }

}
