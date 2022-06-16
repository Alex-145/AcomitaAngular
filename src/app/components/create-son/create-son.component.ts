import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Son } from 'src/app/models/son.model';
import { SonService } from 'src/app/services/son.service';

@Component({
  selector: 'app-create-son',
  templateUrl: './create-son.component.html',
  styleUrls: ['./create-son.component.css']
})
export class CreateSonComponent implements OnInit {

  constructor(public sonService:SonService, private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(sonForm:NgForm){
    if(sonForm.value.id==null){
      this.sonService.CreateSon(sonForm.value).subscribe((response) => {
        this.router.navigate(["/list-son"]);
      });
    }else{
      this.sonService.UpdateSon(sonForm.value.id,sonForm.value).subscribe((response) => {
        this.router.navigate(["/list-son"]);
      });
      this.resetForm(sonForm);
    }
    this.resetForm(sonForm);
  }

  resetForm(sonForm:NgForm){
    if(sonForm!=null){
      sonForm.reset();
      this.sonService.selectSon=new Son();
    }
  }
}
