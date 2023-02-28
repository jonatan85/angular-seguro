
import { Pipe, PipeTransform } from '@angular/core';
import { PlatesIngredients } from 'src/app/core/services/plates/api/api-plates.models';
import { Plates } from 'src/app/core/services/plates/plates.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Plates[] | null, name: string = '', ingredients?: PlatesIngredients): Plates[] {
    if (!value) { return []; }
    if (!name && !ingredients) { return value; }
    console.log(name);
    
    return value.filter((Plates) => {
      return Plates.name.includes(name)
        && (Plates.ingredients.name === ingredients || !ingredients);
    });
  }

}
