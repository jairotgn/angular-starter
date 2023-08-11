import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsAdminComponent implements OnInit {


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