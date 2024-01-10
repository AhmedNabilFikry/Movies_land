import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../models/Imovie';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(movies:Imovie[] , term:string): Imovie[] {
  //   return movies.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()));
  // }
  transform<T>(items: T[] , term:string , key: keyof T ):T[] {
    return term && term !== '' ?
    items.filter((items) => String(items[key]).toLowerCase().includes(term.toLowerCase())) : items;
  }

}
