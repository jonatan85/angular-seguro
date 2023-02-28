import { Ingredients } from './../ingredients/ingredients.models';

export interface Plates {
    _id: string;
    name: string;
    ingredients: Ingredients;
    img: string;
    price: string;
    count: string;
    description: string;
    
}

