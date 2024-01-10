import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(overview:string , limit:number): unknown {
    return overview.split(' ').slice(0,limit).join(' ');
  }

}
