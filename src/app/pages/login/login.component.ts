import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  public loginUser() {
    this.auth.login();
    this.router.navigate(['account']);
  }
}
