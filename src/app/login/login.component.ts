import { Component, OnInit } from '@angular/core';
import { LgService } from '../lg.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private lgc:LgService) { 
  
  }
  ngOnInit()
  {

  }
  setdata(data:string){
    
    this.lgc.email=data;

  }

}
