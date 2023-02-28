import { ApiIngredients } from './api/api-ingredients.models';
import { ApiIngredientsService } from './api/api-ingredients.service';
import { Ingredients } from './ingredients.models';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private apiIngredientsService: ApiIngredientsService 
  ) { }

  public getPlates(): Observable<Ingredients[]> {
    return this.apiIngredientsService.getApiIngredients().pipe(
      map((apiIngredients: ApiIngredients[]) => { 
        return apiIngredients.map((apiIngredient) => ({
          id: apiIngredient.id,
          name: apiIngredient.name,
          description: apiIngredient.description,
          calories: apiIngredient.calories,
          img: apiIngredient.img
        }));
      })
    );
  }
}
