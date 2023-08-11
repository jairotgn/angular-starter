import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplecms';

  public isLoged : boolean = false;

  constructor(private authService:AuthService, private router:Router) {
    this.isLoged = AuthService.isLoged
  }

  public logout() {
   this.authService.logout()

   this.router.navigateByUrl('');

  }
}
