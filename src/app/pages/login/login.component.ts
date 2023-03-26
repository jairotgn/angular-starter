import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:boolean = false;

  constructor(
    public titleService:Title,
    public userService:UserService ) {

      titleService.setTitle("Login");
  }

  ngOnInit(): void {

  }

  // submit form
  onSubmit(f: NgForm) {
    if (f.valid) {

      this.userService.login(f.value).subscribe(
        data => {
          this.error = false;
          this.userService.setToken(data.token);
          alert("Login successful!")
        },
        err => {
          this.error = true;
          console.log(err);
          alert("Login error !")
        });
    }
  }
}
