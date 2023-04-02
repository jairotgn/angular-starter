import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:boolean = false;

  constructor(
    public titleService:Title,
    public userService:UserService ) {
      titleService.setTitle("Register page");
  }


   // submit form
   onSubmit(f: NgForm) {
    if (f.valid) {
      this.userService.register(f.value).subscribe(
        data => {
          this.error = false;
          this.userService.setToken(data.token);
          alert("Register sussesfull")
        },
        err => {
          this.error = true;
        });
    }
  }

  ngOnInit(): void {
  }
}
