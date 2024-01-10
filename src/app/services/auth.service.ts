import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
UserData:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient, private _Router:Router)
  {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('userToken')) {
      this.saveUserData();
    }
  }

  signUp(formdata:object) :Observable<any>
  {
    return this._HttpClient.post('https://localhost:7144/api/Account/Register',formdata);
  }
  signIn(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://localhost:7144/api/Account/Login',formData);
  }

  signOut()
  {
    localStorage.removeItem('userToken');
    this.UserData.next(null);
    this._Router.navigate(['/login']);
  }
  saveUserData() {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      try {
        const decodedToken: any = jwtDecode(userToken);
        this.UserData.next(decodedToken);
        console.log(this.UserData.value);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('User token not found in localStorage');
    }
  }
}
