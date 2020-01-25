import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  arrayData:object[]=[];
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getData().subscribe((data)=>{

      this.arrayData=data;
      console.log(this.arrayData)
    })
       
    
  }

}
