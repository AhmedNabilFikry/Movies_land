import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Imovie } from '../models/Imovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 apiUrl:string = '';
 private apiKey = '?api_key=f1aca93e54807386df3f6972a5c33b50';
 private movieUrl = 'trending/${model}/week';
  constructor(private _HttpClient:HttpClient)
  {
   this.apiUrl = environment.apiUrl;
   }

  getModel(model:string):Observable<any>
  {
    const Url = `${this.apiUrl}${this.movieUrl}${this.apiKey}`;
     return this._HttpClient.get(Url.replace('${model}', model));
  }

  getModelDetails(id:string)  // /movie/id
  {
    const Url = `${this.apiUrl}/movie/${id}${this.apiKey}`;
    return this._HttpClient.get(Url);
  }

  getMoviesByPagination(pageNumber:number) :Observable<Imovie[]>
  {
    const url = `${this.apiUrl}/discover/movie${this.apiKey}&include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
    return this._HttpClient.get<Imovie[]>(url);
    // return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=f1aca93e54807386df3f6972a5c33b50&include_adult=false&include_video=false&language=en-US&page=${pagenumber}&sort_by=popularity.desc`);
  }
}
// Tv Api https://api.themoviedb.org/3/discover/tv?api_key=f1aca93e54807386df3f6972a5c33b50&include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc

// People Api https://api.themoviedb.org/3/trending/person/day?api_key=f1aca93e54807386df3f6972a5c33b50&page=2
