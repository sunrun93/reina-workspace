import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private http: Http) { }
  testList;

  ngOnInit() {
    this.getData();
  }

  private getData(){
    this.http.get('assets/list-demo.json').subscribe(datas => {
      this.testList = JSON.parse(datas['_body']);
    })
  }



}
