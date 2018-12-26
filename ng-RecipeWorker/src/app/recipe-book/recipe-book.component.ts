import {Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector:'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls:['./recipe-book.component.css']
})
export class recipeBookComponent {

   itemSelected: Recipe;

    setSelected(e:any){
        this.itemSelected = e;
    }
    
}