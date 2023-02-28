import { Plates } from 'src/app/core/services/plates/plates.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
// Los pipes son como un aspersor entra el agua de una manera y sale de otra.
          // Entrada.   // indicamos la divison // Salida.
  transform(plates: Plates[], page: number = 0, search: string = '' ): Plates[] {
    // Le indicamos que la busqueda empiece en cero caracteres.
    if(search.length === 0)
    // Para obtener los primeros cinco platos.
    return plates.slice(page, page + 4);

    // Le indicamos que empiece a buscar cuando hay algo en el search.
    const filterPlates = plates.filter( plate => plate.name.includes(search));
    
    // Para paginar las busquedas.
    return filterPlates.slice(page, page +5);
  }

}


// Para generar una pipe.
// ng generate pipe pagination
