import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogAdminComponent implements OnInit {

  public id?:number;
  public blog?:any;

  constructor(private apiService : ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = <any>this.activatedRoute.snapshot.paramMap.get('id')

    if (this.id) {
      this.apiService.get('blog/'+this.id).subscribe(
        response => {
          this.blog = response
        }
      );
    }
  }

  save() {
    this.apiService.post('blog/'+this.id, this.blog).subscribe(
      response => {

        if (response.status == 1) {
          alert('Saved')
        }
      }
    );
  }
}
