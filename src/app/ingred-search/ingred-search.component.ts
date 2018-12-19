import { Component, OnInit ,Input} from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { IngerdService }  from '../ingerd.service';
import{Indish} from '../indish';
import {Ingred} from '../ingredi'; 
import{Food} from '../food';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { AttachSession } from '../../../node_modules/protractor/built/driverProviders';

@Component({
  selector: 'app-ingred-search',
  templateUrl: './ingred-search.component.html',
  styleUrls: ['./ingred-search.component.css']
})
export class IngredSearchComponent implements OnInit {
  selectedIngred:Ingred;//Observable<>;
  //name:string;
  //nullIngred:Ingred;
  private nullIngred={     ingrname: "" ,
  idingrenames: -1 } as Ingred;
  @Input() food: Food;
  ingreds$: Observable<Ingred[]>;
  private searchTerms = new Subject<string>();
  constructor(private ingredService: IngerdService) { }
private c:string;
private d:number;
  setSelectedIngred(ingr:Ingred){this.selectedIngred=ingr;}


  search(term: string): void {
    this.searchTerms.next(term);
   // this.selectedIngred=this.nullIngred;
  }
 
  addIngred(food:Food,ingred:Ingred){
    if(ingred.idingrenames>0){
    const a=food.iddish;
    const b=ingred.idingrenames;
   // this.ingreds = this.ingreds.filter(h => h !== ingred);
    this.ingredService.addIngred({     idDish: a ,
      idIngred: b } as Indish).subscribe();
    }
    else
    {
      // const a=food.id;
      //const b=ingred.id;
      //c:String;
      this.c=ingred.ingrname;
     // this.ingreds = this.ingreds.filter(h => h !== ingred);
      this.ingredService.newInrged({     ingrname:this.c  } as Ingred).subscribe(num=>this.d=num);}
      this.selectedIngred.ingrname=this.c;
      this.selectedIngred.idingrenames=this.d;
      if(this.d>0){this.addIngred(food,({ idingrenames: this.d ,
        ingrname: this.c } as Ingred))}
  }

  ngOnInit() {
    this.selectedIngred={     ingrname: "" ,
    idingrenames: -1 } as Ingred;
    this.ingreds$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.ingredService.searchIngreds(term)),
    );
  }

}
