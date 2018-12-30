import { Component, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

 @ViewChild('nameInput') nameInput;
 @ViewChild('amountInput') amountInput;

  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  constructor() { }

  onIngredientAdded(e: any){
    this.ingredients.push(e);
  }

  ngOnInit() {
  }

}
