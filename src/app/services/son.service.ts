import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Son } from '../models/son.model';

@Injectable({
  providedIn: 'root'
})
export class SonService {

  selectSon:Son=new Son();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api/';

  GetSon():Observable<Son>{
    return this.http.get<Son>(this.baseurl+'sons/');
  }
  CreateSon(son:Son):Observable<Son>{
    return this.http.post(this.baseurl+'sons/',son,{headers:this.reqHeader});
  }
  deleteSon(id:number){
    return this.http.delete(this.baseurl+'sons/'+id+'/');
  }

  //update
  UpdateSon(id:number, son:Son){
    return this.http.put(this.baseurl+'sons/'+id+'/',son,{headers:this.reqHeader});
  }
}
