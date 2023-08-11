import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public isLoged?: boolean

  // ERRORS
  public error:boolean = false
  public errorMessage!:string

  constructor( public authService: AuthService, private router: Router, private location:Location) { }

  ngOnInit() {

  }

  // MAIN FORM UBMIT FUNCTION
  onSubmitLoginForm (loginForm: NgForm) {

    // CHECK VALID FORM
    if (loginForm.valid) {
      this.login(loginForm)
    } else {
      this.error = true
      this.errorMessage = "Enter valid values on the form"
    }
  }

  // LOGIN SUBSCRIBE
  private login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      response => {
        // Manejar la respuesta aquí, por ejemplo, mostrar el token de autenticación
        if (response.status == 1 && response.authToken) {
          this.authService.setAuthToken(response.authToken)
          this.error   = false
          this.isLoged = true
          window.location.href = "/admin";

        }else {
          this.error        = true
          this.errorMessage = "Incorrect email or password"
        }
      },
      error => {
        this.error = true
      }
    );
  }
}
