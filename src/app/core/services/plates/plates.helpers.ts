
import { Ingredients } from './../ingredients/ingredients.models';
import { ApiPlates } from './api/api-plates.models';
import { Plates} from './plates.models'; 

export function transformPlates(apiPlates: ApiPlates, selectedIngredients?: Ingredients): Plates{
     return {
        ...apiPlates,
        ingredients: selectedIngredients
            ? selectedIngredients
            : {name: apiPlates.ingredients}
     }
}