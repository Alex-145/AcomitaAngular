import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

public email:string="";
public password:string="";

onSubmitLogin(){
  this.authService.loginEmail(this.email,this.password).subscribe((token:any)=>{
    console.log(token.access_token);
    localStorage.setItem('isLoggedIn',"true");
    localStorage.setItem('token', token.access_token);
    this.toastr.success('Bienvenido: '+this.email);
    this.router.navigate(['/dashboard']);
  },err=>{
    console.log("error: "+err);
    }
  );
}



}
