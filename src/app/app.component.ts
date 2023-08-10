import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplecms';

  public isLoged : boolean = false;

  constructor(private authService:AuthService) {

    this.isLoged = AuthService.isLoged

  }
}
