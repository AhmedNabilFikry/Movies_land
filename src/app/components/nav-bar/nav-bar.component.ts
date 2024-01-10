import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit{
  Islogin:Boolean = false;
  userName:any = {};
  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    this._AuthService.UserData.subscribe({
      next:() => {
        if (this._AuthService.UserData.getValue() != null) {
          this.Islogin = true;
          this.userName = this._AuthService.UserData.getValue();
          console.log(this.userName.displayName)
        }
        else{
          this.Islogin = false;
        }
      }
    })
   }

   logOut()
   {
    this._AuthService.signOut();
   }
}
