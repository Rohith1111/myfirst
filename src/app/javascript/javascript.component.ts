import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  k:string[]=[];
  constructor(private ds:DataService) { 

  }
ngOnInit(){
  this.k=this.ds.javascript;
  console.log(this.k)
  
}
 
}
