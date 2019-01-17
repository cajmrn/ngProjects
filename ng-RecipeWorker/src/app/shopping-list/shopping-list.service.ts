import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient []>();
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
    this.ingredientsChange.next(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]){
    this.ingredients.push(... ings);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
