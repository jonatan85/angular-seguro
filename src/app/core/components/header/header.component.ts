import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // Para saber si estamos logeado o no.
  public isLogged: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    // Indicamos que la variable publica isLogged se iagual a lo que venga de el observable isLogged.
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

 

  public navigateToNotFound() {
    this.router.navigate(['no-existe', 'nada']);
  }
}
