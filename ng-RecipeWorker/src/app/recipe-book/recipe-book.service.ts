import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  private recipies: Recipe[] = [
    new Recipe(
        "Macarons",
        "the most beautiful cookies on earth",
        "https://iambaker.net/wp-content/uploads/2018/03/Lemon-Raspberry-Macarons-4.jpg",
        [
          new Ingredient("Almond Flour", 1),
          new Ingredient("Butter", 4)
        ]),
    new Recipe(
      "Sandwich",
      "the most beautiful sandwhich on earth",
      "https://iambaker.net/wp-content/uploads/2018/03/Lemon-Raspberry-Macarons-4.jpg",
      [
        new Ingredient("bread", 2),
        new Ingredient("ham", 1)
      ]),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shopplingListService: ShoppingListService) { }

  getRecipes() {
    // returns a copy
    return this.recipies.slice();
  }
  getRecipe(id: number) {
    return this.recipies[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopplingListService.addIngredients(ingredients);
  }
}
