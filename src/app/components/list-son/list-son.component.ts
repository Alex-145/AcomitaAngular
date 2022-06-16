import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Son } from 'src/app/models/son.model';
import { SonService } from 'src/app/services/son.service';

@Component({
  selector: 'app-list-son',
  templateUrl: './list-son.component.html',
  styleUrls: ['./list-son.component.css']
})
export class ListSonComponent implements OnInit {

  SonList:any=[]
  constructor(public sonService:SonService, private router:Router) { }

  ngOnInit(): void {
    this.loadSon();
  }
  loadSon(){
    return this.sonService.GetSon().subscribe((data:{})=>{
      console.log(data);
      this.SonList=data;
    })
  }
  deleteSon(id:number){
    this.sonService.deleteSon(id).subscribe((response)=>{
      this.loadSon();
    })
  }

  onEdit(son:Son){
    console.log(son);
    this.sonService.selectSon=Object.assign({},son);
    this.router.navigate(["/add-son"]);
  }

}
