import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:boolean      = false;
  registerOk:boolean = false;

  constructor(
    private titleService:Title,
    private userService:UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) {
      titleService.setTitle("Login page");
  }

  ngOnInit(): void {

    // if user registred in show message
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['registerOk']) {
        this.registerOk = true;
      }
    });

    // if token exist check token
    this.userService.loginCheck().subscribe(
      data => {
        if(data.token) {
            this.error = false;
            this.userService.setToken(data.token);
            this.router.navigate(['private/adminpanel']);
          }
        },
      err => {
    });
  }

  // submit form
  onSubmit(f: NgForm) {
    if (f.valid) {
      this.userService.login(f.value).subscribe(
        data => {
          this.error = false;
          if(data.token) {
            this.error = false;
            this.userService.setToken(data.token);
            this.router.navigate(['private/users']);
          }
        },
        err => {
          this.error = true;
        });
    }
  }
}
