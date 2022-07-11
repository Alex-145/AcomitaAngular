import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMenberComponent } from './components/create-menber/create-menber.component';
import { CreateSonComponent } from './components/create-son/create-son.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListMenberComponent } from './components/list-menber/list-menber.component';
import { ListSonComponent } from './components/list-son/list-son.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'list-menber',component:ListMenberComponent},
  {path:'add-menber', component:CreateMenberComponent},
  {path:'list-son',component:ListSonComponent},
  {path:'add-son',component:CreateSonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
