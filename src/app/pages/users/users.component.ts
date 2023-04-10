import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public users?:any

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.apiService.users({}).subscribe(
      data => {
        this.users = data
      },
      err => {

      });
  }
}
