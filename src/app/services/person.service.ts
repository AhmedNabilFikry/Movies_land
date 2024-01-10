import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Iperson } from '../models/Iperson';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // People Api &page=2
apiUrl:string = '';
apiKey:string = '?api_key=f1aca93e54807386df3f6972a5c33b50';
params:string = 'trending/person/day';
constructor(private _HttpClient:HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

getTrendingPersons(pageNumber:number) :Observable<Iperson[]>
{
  return this._HttpClient.get<Iperson[]>(`${this.apiUrl}${this.params}${this.apiKey}&page=${pageNumber}`)
}

}
