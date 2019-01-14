import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient []>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]){
    this.ingredients.push(... ings);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
