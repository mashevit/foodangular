import { Component, OnInit } from '@angular/core';
import { Ingred } from '../ingredi';
//import { FOODS } from '../mock-foods';
import { IngerdService } from '../ingerd.service';
@Component({
  selector: 'app-ingreds',
  templateUrl: './ingreds.component.html',
  styleUrls: ['./ingreds.component.css']
})
export class IngredsComponent implements OnInit {

 ingreds:Ingred[];

  constructor(private ingerdService: IngerdService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.ingerdService.getAllIngreds()
    .subscribe(foods =>{ this.ingreds = foods;
    
    
      this.ingreds.forEach( (element) => {
        this.ingerdService.addData(element)
        .subscribe(foods => element.numOfDishes = foods);
    });
      });
//    this.addData();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //dishName =name;

    this.ingerdService.newInrged({  ingrName: name } as Ingred)
      .subscribe(food => {
        this.ingreds.push({  ingrName: name, id:food} as Ingred);
      });
  }

  delete(food: Ingred): void {
    this.ingreds = this.ingreds.filter(h => h !== food);
    this.ingerdService.deleteIngred1(food.id).subscribe();
  }

  addData():void{

      this.ingreds.forEach( (element) => {
        this.ingerdService.addData(element)
        .subscribe(foods => element.numOfDishes = foods);
    });
      }


      addData1(ingre:Ingred):void{

        this.ingerdService.addData(ingre)
        .subscribe(foods => ingre.numOfDishes = foods);
      }

    
}
  


