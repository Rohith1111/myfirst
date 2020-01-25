import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LgService } from '../lg.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  emm:string;
  obj:object;
  constructor(private dt:LgService,private ds:DataService) { 
    this.emm=this.dt.email;
  }

  ngOnInit() {
      this.ds.getUserdata().subscribe((data)=>
      {
        this.obj=data["data"]
      })
  }

}
