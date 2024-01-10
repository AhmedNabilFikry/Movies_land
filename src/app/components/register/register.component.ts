import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  validemail:string = "user@example.com"
  validpassword:string = "Pass-word";
  IsLoadnig : boolean = false;
  errorMsg :string = '';
  constructor(private _AuthService:AuthService, private _Router:Router) { }
RegisterForm: FormGroup = new FormGroup({
  firstname: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  lastname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  phonenumber: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{11}/)]),
  email: new FormControl(null,[Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8}$/)]),
})

onRegister(formdata:FormGroup)
{
  this.IsLoadnig = true;
  if (formdata.valid) {
    console.log(formdata.value)
    this._AuthService.signUp(formdata.value).subscribe({
      next:(res) => {
        if (res.message === 'Account Added Successfully') {
          this.IsLoadnig = false;
          this._Router.navigate(['/login'])
        }
        else
        {
          this.IsLoadnig = false;
          this.errorMsg = res.message;
        }
      }
    });
  }
}
}



// Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]
