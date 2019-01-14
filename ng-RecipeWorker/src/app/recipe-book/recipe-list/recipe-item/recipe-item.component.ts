import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeBookService } from '../../recipe-book.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor(private recipeService: RecipeBookService) { }

  ngOnInit() {
  }



}
