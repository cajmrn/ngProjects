import { Component, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

 @ViewChild('nameInput') nameInput;
 @ViewChild('amountInput') amountInput;

  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChange.subscribe(
      (ingredients: Ingredient []) => {
        this.ingredients = ingredients;
      }
    )
  }

}
