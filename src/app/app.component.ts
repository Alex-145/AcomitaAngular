import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AcomitaAngular';

  constructor(private authservice:AuthService, private router:Router) {}
  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }


}
