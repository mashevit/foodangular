import { Component, OnInit , Input} from '@angular/core';
import { Food } from '../food';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FoodService }  from '../food.service';
import { IngerdService }  from '../ingerd.service';
import{Indish} from '../indish';
import {Ingred} from '../ingredi';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input() food: Food;
  ingreds: Ingred[];
  constructor( private route: ActivatedRoute,
    private foodService: FoodService,
    private ingerdService: IngerdService,
    private location: Location) { }

    ngOnInit(): void {
      this.getFood();
      this.getIngreds();
    }
    
    getFood(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.foodService.getFood(id)
        .subscribe(food => this.food = food);
    }

    getIngreds(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.ingerdService.getIngreds(id)
        .subscribe(ingreds => this.ingreds = ingreds);
    }

    deleteIngr(food:Food,ingred:Ingred ):void{
     const a=food.id;
      const b=ingred.id;
      this.ingreds = this.ingreds.filter(h => h !== ingred);
      this.ingerdService.deleteIngred({     idDish: a ,
        idIngred: b } as Indish).subscribe();

    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.foodService.updateFood(this.food)
        .subscribe(() => this.goBack());
    }
}
