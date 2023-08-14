import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsAdminComponent implements OnInit {


  public columns: string[] = ['id', 'title', 'created_at' ,'edit'];
  public blogs?: any[];

  public dataSource: any = [];


  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.get('blog').subscribe(
      response => {
        this.dataSource = response
      }
    );
  }

}
