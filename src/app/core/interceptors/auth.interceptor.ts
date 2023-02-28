import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// El decorador es inyectable.
@Injectable()                       // Se implementa una interfaz, HttpInterceptor.
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  
  // Nos obliga a tener la funcion intercep antes de hacer la llamada a la API. 
          // La request nos indica la peticion que estamos haciendo.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Nos iventamos el token esto nos lo tiene que devolver la API.
    const token = 'asdghasjkhdg';
   // Podriamos indicar que solo afecte a las peticiones con post. 
    if(request.method === 'POST'){
    // Crea una copia de la peticion actual.
    request = request.clone({
      // Ha esta copia le podemos añadir informacion.
      // En la cabecera autorization, que es donde va el token en en nodeJs.
      // Set Header par modificar los header de nuestra peticion.
      setHeaders: {
        // Que es la cabecera de jsonWebToken, de nodeJs.
                      // El token siempre venia con la cabecera Bearer seguido de el token.
        Authorization: `Bearer ${token}`
        // Esto lo que hace es añadir a la cabecera el token.
        // Esto recibido desde la api de nodeJs sabriamos si el usuario esta autheticado o no.
      }  
    });
  }

    // Hacemos lo que queramos y seguido la llamada a la api.
    return next.handle(request);
  }
}


// Se usan sobre el app-module o el core para que esten sobre toda la aplicacion.
// Se usa para las llamadas a la api se aplica como un filtro, de json web token.

// Para que aplique los introducimos en core module en providers.

// Para genererar en terminal.
// ng g interceptor auth