import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Ingred }         from '../ingredi';
import { IngerdService }  from '../ingerd.service';
import{Food} from '../food'

@Component({
  selector: 'app-ingred-detail',
  templateUrl: './ingred-detail.component.html',
  styleUrls: ['./ingred-detail.component.css']
})
export class IngredDetailComponent implements OnInit {

  @Input() ingred: Ingred;
 foods:Food[];

  constructor(
    private route: ActivatedRoute,
    private ingredService: IngerdService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIngred();
  }
 
  getIngred(): void {
    const id = +this.route.snapshot.paramMap.get('id1');
    this.ingredService.getIngred(id)
      .subscribe(ingred =>{ this.ingred = ingred;this.getfoods(ingred);});
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.ingredService.updateIngred(this.ingred)
      .subscribe(() => this.goBack());
  }

getfoods(ingre:Ingred):void{

  this.ingredService.foodsForIngred(ingre)
      .subscribe(foods=>this.foods=foods );

}

}
