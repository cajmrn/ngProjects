import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // creating recipies array to hold the recipe models we created see recipe.model.ts
  recipies: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeBookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipies = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
