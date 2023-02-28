import { PlatesIngredients } from "../../plates/api/api-plates.models";

export interface ApiIngredients {
    id: string;
    name: PlatesIngredients;
    img: string;
    calories: string;
    description: string;
}