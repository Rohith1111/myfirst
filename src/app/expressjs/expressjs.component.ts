import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  dtt:string[]=[];
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.dtt=this.ds.expressjs;
    console.log(this.dtt)
  }

}
