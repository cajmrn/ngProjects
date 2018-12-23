import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  //creating recipies array to hold the recipe models we created see recipe.model.ts
  recipies: Recipe[] = [
    new Recipe("Macarons", "the most beautiful cookies on earth", "https://iambaker.net/wp-content/uploads/2018/03/Lemon-Raspberry-Macarons-4.jpg"),
    new Recipe("Macarons2", "the most beautiful cookies on earth", "https://iambaker.net/wp-content/uploads/2018/03/Lemon-Raspberry-Macarons-4.jpg"),
  ];

  constructor() { }

  ngOnInit(){}

}
