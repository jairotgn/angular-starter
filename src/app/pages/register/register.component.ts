import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error?:string;


  constructor(
    private titleService:Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService:UserService ) {
      titleService.setTitle("Register page");
  }


   // submit form
   onSubmit(f: NgForm) {

    if (f.valid) {
      this.userService.register(f.value).subscribe(
        data => {
            this.error = '';
            this.userService.setToken(data.token);
            this.router.navigate(['public/login'], { queryParams: { registerOk: '1' }});
        },
        err => {
            this.error = err.error.message;
      });
    }
  }

  ngOnInit(): void {
  }
}
