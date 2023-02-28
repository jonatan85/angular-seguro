import { ApiIngredients } from './api-ingredients.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const INGREDIENTS_URL  = 'https://63d403a68d4e68c14eb7bdf8.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class ApiIngredientsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiIngredients(): Observable<ApiIngredients[]> {
    return this.http.get<ApiIngredients[]>(`${INGREDIENTS_URL}/ingredients`);
  }
}
