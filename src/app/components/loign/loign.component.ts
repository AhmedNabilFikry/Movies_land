import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loign',
  templateUrl: './loign.component.html',
  styleUrl: './loign.component.css'
})
export class LoignComponent {

  validemail:string = "user@example.com"
  validpassword:string = "P@ssw0rd";
  IsLoadnig: boolean = false;
  errorMsg:string = '';
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password:  new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/)])
  });
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  submitloginForm(loginForm:FormGroup)
  {
    if (loginForm.valid) {
      this.IsLoadnig = true;
      this._AuthService.signIn(loginForm.value).subscribe({
        next:(response) => {
          this.IsLoadnig = false;
          if (response.message === 'Succeeded') {
            this.IsLoadnig = false;
            localStorage.setItem('userToken',response.user.token);
            this._AuthService.saveUserData();
            this._Router.navigate(['/home'])
          }
          else{
            this.errorMsg = response.message;
            this.IsLoadnig = false;
          }
        }
      });
    }
  }
}
