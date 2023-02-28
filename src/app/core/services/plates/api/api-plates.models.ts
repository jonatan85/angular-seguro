
export interface ApiPlates {
    _id: string;
    name: string;
    ingredients: PlatesIngredients;
    img: string;
    price: string;
    count: string;
    description: string;
    
}

export type PlatesIngredients = 
|'Tomate'
|'Harina'
|'Cebolla'
|'Ajo'
|'Aceite de oliva'
|'Sal'
|'Tomillo'
|'Vinagre'
|'Azucar'
|'Perejil'
;
 
