import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cheesy Burger', 'Burger with Cheddar', 
    'http://burgerillas.com/uploads/slayt/slayt_1506331415.png'),
    new Recipe('Kumpir', 'Kumru Kumpir', 
    'http://i.milliyet.com.tr/GazeteHaberIciResim/2017/04/07/fft16_mf8892943.Jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
