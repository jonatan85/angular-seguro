import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

// El decorador es inyectable.
@Injectable({
  providedIn: 'root'
})
                                            // Pero implementa Resolve, que nos devulve un boolean.
                                                      // Pero queremos que nos devulva un producto(Plates).
export class RequestProductResolver implements Resolve<Plates | null> { // Va a esperar a tener cierta info antes de cargar la ruta es asincrono.
  
  constructor(
    // Tenemos que devolver un producto, para ello creamos el contructor de PlatesService.
    private platesSevice: PlatesService
  ){}  
  
  
                                                                              // Devolvemos un observable de Plates.
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Plates | null> { // Devolvemos un id o null.
    console.log(route, state);

    // Para recuperar el id que vamos añadir en getPlateDetail. No tenemos que suscribirnos ya que recuperoamos la informacion de el route: ActivatedRoutesSnapshot, que es como una fotografia de el momento. 
    const id = route.params['id']
    // Si no existe un id devolvemos null.
    if(!id) {return of(null)}
    
    // Devolvemos un observavle de getPlateDetail. Hasta que el observable no retorne un valor no va a permitir cargar la ruta.
                                        // Es decir hasta que toda la informcacion no este pintada nos vamos a quedar en ruta anterior.
    return this.platesSevice.getPlateDetail(id); // Devolvemos un id que extraemos arriba.
  }
}

// En detail Component, paso final, despues de null.



// Para genererar en terminal.
// ng g resolver request-product

// No son muy utiles, pero se usa si necesitas la informacion cuando carge la lista.
// Ejemplo de jaime en oysho necesitan tener la imformacion de el pais antes de carge la ruta, por eso el loading no les sirve y si el resolver