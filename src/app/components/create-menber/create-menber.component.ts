import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Menber } from 'src/app/models/menber.model';
import { MenberService } from 'src/app/services/menber.service';

@Component({
  selector: 'app-create-menber',
  templateUrl: './create-menber.component.html',
  styleUrls: ['./create-menber.component.css']
})
export class CreateMenberComponent implements OnInit {

  constructor(public menberService:MenberService, private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(menberForm:NgForm){
    if(menberForm.value.id==null){
      this.menberService.CreateMenber(menberForm.value).subscribe((response) => {
        this.router.navigate(["/list-menber"]);
      });
    }else{
      this.menberService.UpdateMenber(menberForm.value.id,menberForm.value).subscribe((response) => {
        this.router.navigate(["/list-menber"]);
      });
      this.resetForm(menberForm);
    }
    this.resetForm(menberForm);
  }

  resetForm(menberForm:NgForm){
    if(menberForm!=null){
      menberForm.reset();
      this.menberService.selectMenber=new Menber();
    }
  }
}
