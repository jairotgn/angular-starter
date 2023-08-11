import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blogs!: any[];

  constructor(private apiService : ApiService) {

  }

  ngOnInit( ) {
    this.apiService.get('blog').subscribe(
      response => {
        this.blogs = response
      }
    );
  }
}
