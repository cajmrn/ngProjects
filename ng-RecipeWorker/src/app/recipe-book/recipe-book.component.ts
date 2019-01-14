import {Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
    selector:'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls:['./recipe-book.component.css'],
    providers:[RecipeBookService]
})
export class recipeBookComponent implements OnInit {

   itemSelected: Recipe;
   constructor(private recipeService: RecipeBookService){

   }
   ngOnInit(){
       this.recipeService.recipeSelected.subscribe(
           (recipe: Recipe) => {
               this.itemSelected = recipe;
           }
       )
   }     
}