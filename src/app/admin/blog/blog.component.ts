import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogAdminComponent implements OnInit {

  public columns: string[] = ['id', 'title', 'edit'];

  public dataSource: any = [
    { id: 1, title: 'Fisrt blog ' },
    { id: 2, title: 'Second Second blog' },
    { id: 3, title: '3 blog' },
  ];

  constructor() { }

  ngOnInit() {


  }

}
