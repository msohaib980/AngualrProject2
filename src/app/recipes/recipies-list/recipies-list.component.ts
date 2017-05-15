import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe",'This is simply a test',
    'http://cfile21.uf.tistory.com/image/2560693C571A11B92E749A'),
    new Recipe("A Test Recipe",'This is simply a test',
    'http://cfile21.uf.tistory.com/image/2560693C571A11B92E749A')
  ];
  constructor() { }

  ngOnInit() {
  }

}
