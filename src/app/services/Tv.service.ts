import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itv } from '../models/Itv';

@Injectable({
  providedIn: 'root'
})
export class TvService {
apiUrl:string = '';
apiKey:string = '?api_key=f1aca93e54807386df3f6972a5c33b50';
params:string = '&include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc';
  constructor(private _HttpClient:HttpClient)
  {
    this.apiUrl = environment.apiUrl;
   }

   // Get the list of TV shows and series airing today
   getTodayTVShows(pageNumber:number) :Observable<Itv[]>
   {
// Tv Api discover/tv?api_key=f1aca93e54807386df3f6972a5c33b50
    const url = `${this.apiUrl}discover/tv${this.apiKey}${this.params}&page=${pageNumber}`;
    return this._HttpClient.get<Itv[]>(url);
   }

}
