import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  public error:boolean = false
  public errorMessage!:string

  constructor( public authService: AuthService) { }

  ngOnInit() {

  }

  onSubmitLoginForm (loginForm: NgForm) {
    if (loginForm.valid) {
      this.login(loginForm)

    } else {
      this.error = true
      this.errorMessage = "Enter valid values on the form"
    }
  }

  private login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      response => {
        // Manejar la respuesta aquí, por ejemplo, mostrar el token de autenticación
        if (response.status == 1 && response.authToken) {
          this.authService.setAuthToken(response.authToken)
          this.error = false
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
