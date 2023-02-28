import { AbstractControl, ValidatorFn } from '@angular/forms';

// Devolver una función que devuelva a su vez null si no hay errores,
// o un objeto con los errores en casod e que los haya.
// La funcion tiene que devolver un tipo especifico de angular llamado validatorFuction.
                                    // Tiene que devolver una ValidatorsFn.
export function isNotBadIngredients(): ValidatorFn{ // Etos va a devolver un mapa de errores si hay errores o null si no hay errores.
    // Lo anterior siginifica que vamos a devolver una funcion.
                // Recibe un control que igula AbstractControl, que es equivalente a formControl.
    return (control: AbstractControl) => {
        // Esta funcion es el validador, que es una funcion que va a ejecutar angular cada vez que necesite revisar si es valido el campo.
        // Es un mal ingrediente cunado el valor de el formulario es igual a sal.
        const isBadIngredient = control.value === 'Sal';
        // Devolvemos que si es sal es un ingrediente malo y si no es null.
        return isBadIngredient ? {
            // Dentro de las llaves añadimos el error.
            isBadIngredient: true
        } : null;
    };
}

// Que tiene que hacer un validador personalizado, lo primero que tiene que hacer es que cumpla una función.

// Lo tenemos que usar dentro de los validadores de el plates-create-component.