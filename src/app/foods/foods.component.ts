import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
//import { FOODS } from '../mock-foods';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foods: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods()
    .subscribe(foods => this.foods = foods);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //dishName =name;
    let foodtmp:Food = new Food();
    foodtmp.dishname=name;
    this.foodService.addFood(foodtmp)
      .subscribe(food => {
        this.foods.push(food);
      });
  }

  delete(food: Food): void {
    this.foods = this.foods.filter(h => h !== food);
    this.foodService.deleteFood(food).subscribe();
  }
}