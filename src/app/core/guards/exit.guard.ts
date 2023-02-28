import { PlatesCreateComponent } from './../../pages/plates-create/plates-create.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Esta guardia lo que hace es que cuando no queremos ir de la ruta nos muestra un mensaje de error, no nos deja marcharnos o si pero sobre unas condiciones.
export class ExitGuard implements CanDeactivate<PlatesCreateComponent> { // Vamos a iterar sobre el PlatesCreateComponent.
  canDeactivate(
    // Recibe el componente sobre el cual queremos hacer la desactivacion.
    component: PlatesCreateComponent,
    // Esta es la ruta actual.
    currentRoute: ActivatedRouteSnapshot,
    // Estado actual de el router.
    currentState: RouterStateSnapshot,
    // NextState es la ruta a la que estoy intentando acceder.
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // No va avisar con un true que hemos creado en platesCreateComponent cuando el formulario se haya enviado, es decir se haya creado.
    // Asi dejarnos salir de la pantalla con un mensaje o sin un mensaje.
    component.isPlatesCreate
    // Con una condicion para que no nos devulva el mensaje cuando es true le indicamos que si el producto esta creado nos devulva un true.
                                    // Le indicamos que si el formulario no esta sucio (No se ha intentado rellenar) que devulva true.
    if(component?.isPlatesCreate || !component?.platesForm?.dirty) {
      return true;
    }
    // window confirm nos devulve una alerta con un true o un false en forma de boton de si queremos aceptar o no.
    // En base a lo que nos devulva esto es lo queremos devolver a nuestra guardia.
    return window.confirm('Esta seguro de querer salir? No se guardara los datos de el formulario');
  }
  
}



// Para genererar en terminal.
// ng g guard exit  
