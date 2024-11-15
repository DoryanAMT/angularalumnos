import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import Login from '../../models/login';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(
    private _service: ServiceLogin,
    private _router: Router
  ){}

  @ViewChild("cajanombre") cajaNombre!:ElementRef;
  @ViewChild("cajapassword") cajaPassword!:ElementRef;

  ngOnInit(): void {
    
  }

  authLogin():void{
    let nombre = this.cajaNombre.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    let login = new Login(nombre, password);

    this._service.authLogin(login).then(result => {
      console.log("login exitoso: ", result)
      this._router.navigate(["/"]);
    })
  }
}
