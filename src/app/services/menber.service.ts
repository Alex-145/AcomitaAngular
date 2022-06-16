import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menber } from '../models/menber.model';

@Injectable({
  providedIn: 'root'
})
export class MenberService {

  selectMenber:Menber=new Menber();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api/';

  GetMenber():Observable<Menber>{
    return this.http.get<Menber>(this.baseurl+'menbers/');
  }
  CreateMenber(menber:Menber):Observable<Menber>{
    return this.http.post(this.baseurl+'menbers/',menber,{headers:this.reqHeader});
  }
  deleteMenber(id:number){
    return this.http.delete(this.baseurl+'menbers/'+id+'/');
  }

  //update
  UpdateMenber(id:number, menber:Menber){
    return this.http.put(this.baseurl+'menbers/'+id+'/',menber,{headers:this.reqHeader});
  }
}
