import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
            private recipeService: RecipeBookService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.formInit();
      }
    );
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private formInit() {
    let recipeName = '';
    let recipePath = '';
    let recipeDesciption = '';
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imgPath;
      recipeDesciption = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipePath),
      'description': new FormControl(recipeDesciption)
    });
  }

}
