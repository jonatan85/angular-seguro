import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { Router } from '@angular/router';

// El decorador es inyectable por que lo podemos usar desde cualquier modulo.
@Injectable({
  providedIn: 'root'
})


// Podemos usar varias guardias a la vez pude ser CanActivate y CanDeacttivate, pero es recomendable dejarlas para una sola funcionalidad.
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  // Metodo.
  canActivate(
    // Ruta activa.
    route: ActivatedRouteSnapshot,
    // Estado de el route en directo.
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.userLogged$.pipe(
      // Solo emite una vez el observable.
      take(1),
      // Si esta logeado no dirige a hacia un componenete y si no a otro.
      map((isLogged: boolean) => {
        // Si no esta logeado el usuario que nos lleve a la ruta de login.
            // Si estas logeado devuelve true.
        if(isLogged) {return true;}
        // Necesitamos el router para poder redirigir a una url desde una guardia.
                          // Nos crea un arbol de url para poder hacer la rerideccion desde la guardia.
                                          // Le pasamos lo mismo que a el navigate login, que es la url a la que queremos navegar.
        return this.router.createUrlTree(['login']); // Ahora si el usuario esta logeado devuelbe true y si no te devuelve a login. 
      })
    )
  }
  
}

// Las guardias se incluyen en el app-routing module.

// Para genererar en terminal.
// ng g guard auth 
