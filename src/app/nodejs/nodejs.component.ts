import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  dtp:string[]=[];
  constructor(private ds:DataService) {

   }

  ngOnInit() {
    this.dtp=this.ds.nodejs;
    console.log(this.dtp)
  }

}
