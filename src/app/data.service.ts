import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  javascript:string[]=["dynamic dtypes","prototyping","hi java script"]
  angular:string[]=["Interpolation","event binding","two way"]
  nodejs:string[]=["welcome to NodeJs","jsnode"]
  expressjs:string[]=["welcome to expressjs","jsexpress"]

  constructor(private hc:HttpClient){

  }
  getData():Observable<object[]>
  {
    return this.hc.get<object[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserdata():Observable<object>
  {
    return this.hc.get<object>('https://reqres.in/api/users');
  }



}
