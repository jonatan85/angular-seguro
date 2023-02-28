import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // subject de tipo boolean.
  // Nos va a emitir si el usuario esta logeado, con un true y si no lo esta nos devulve un false.
                                                                  // Añadimo el 1 para emitir el ultimo valor.
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    // El ususario no esta logeado de inicio.
    this.userLogged$.next(false);
   }

  // Esto lo tenemos que hacer con el servicio de la api.
  // Para hacer el login.
   public login() {
    this.userLogged$.next(true);
   }
  // Para hacer el logout.
  public logout() {
    this.userLogged$.next(false);
  }
}
