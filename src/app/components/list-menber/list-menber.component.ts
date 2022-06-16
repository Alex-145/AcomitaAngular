import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menber } from 'src/app/models/menber.model';
import { MenberService } from 'src/app/services/menber.service';

@Component({
  selector: 'app-list-menber',
  templateUrl: './list-menber.component.html',
  styleUrls: ['./list-menber.component.css']
})
export class ListMenberComponent implements OnInit {

  MenberList:any=[]
  constructor(public menberService:MenberService, private router:Router) { }

  ngOnInit(): void {
    this.loadMenber();
  }
  loadMenber(){
    return this.menberService.GetMenber().subscribe((data:{})=>{
      console.log(data);
      this.MenberList=data;
    })
  }
  deleteMenber(id:number){
    this.menberService.deleteMenber(id).subscribe((response)=>{
      this.loadMenber();
    })
  }

  onEdit(menber:Menber){
    console.log(menber);
    this.menberService.selectMenber=Object.assign({},menber);
    this.router.navigate(["/add-menber"]);
  }

}
