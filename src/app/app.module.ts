import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMenberComponent } from './components/create-menber/create-menber.component';
import { ListMenberComponent } from './components/list-menber/list-menber.component';
import { FormsModule } from '@angular/forms';
import { MenberService } from './services/menber.service';
import { CreateSonComponent } from './components/create-son/create-son.component';
import { ListSonComponent } from './components/list-son/list-son.component';
import { SonService } from './services/son.service';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateMenberComponent,
    ListMenberComponent,
    CreateSonComponent,
    ListSonComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added


  ],
  providers: [MenberService, SonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
