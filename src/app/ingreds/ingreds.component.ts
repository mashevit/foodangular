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

 ingreds:Ingred[]=[{     idingrenames: -1 ,
  ingrname: "a",numOfDishes:0 } as Ingred];
 
  constructor(private ingerdService: IngerdService) { }

    // id: number;
    // ingrName: string;
    // numOfDishes:number;

  ngOnInit() {
   // this.getFoods();
   this.getFoods();
  }

  getFoods(): void {
    this.ingerdService.getAllIngreds()
    .subscribe(foods =>{ this.ingreds = foods;
    
    
      // this.ingreds.forEach( (element) => {
      //   this.ingerdService.addData(element)
      //   .subscribe(foods => element.numOfDishes = foods);
    // });
      })
//    this.addData();
  }



//   private dataStorage: string = null;
// private retrieveDataResolver;

//   displayData(): void {
// this.addData();

//     // your display code goes here
//     console.log("2. DISPLAYING DATA", this.dataStorage);
//   }


//   retrieveData(): void {

//     this.getFoods();
//     // your async retrieval data logic goes here
//     console.log("1. GETTING DATA FROM SERVER");
//     setTimeout(() => { // <--- Change it - your service data retrieval
//       //Promise.resolve(this.retrieveDataResolver);
//       this.retrieveDataResolver.resolve();
//     //  this.retrieveDataResolver(); // <--- This must be called as soon as the data are ready to be displayed
//     }, 50);
//   }

//   retrieveDataPromise(): Promise<any> {
//     return new Promise((resolve) => {
//       //resolve()
//       //this.retrieveDataResolver = resolve;
//       resolve(this.retrieveDataResolver);
//       this.retrieveData();
//     })
//   }


//   logout(): Promise<Ingred[]> {
//     return new Promise((resolve, reject) => {


//       this.ingerdService.getAllIngreds()
//       .subscribe(foods =>{ this.ingreds = foods;
//         resolve(foods);

//         })
//     //     this.http.delete(this.baseUrl + url, { headers: this.headers() })
//     //         .map((res: IResponse) => {
//     //           var json = res.json();
//     //           json.headers = res.headers;
//     //           return json;
//     //         })
//     //         .subscribe(data => {
//     //           //DO SOMETHING, THEN ----
//     //           resolve(data);
//     //         }, error => reject(error));
//     });
// }

// // logout() {
// //   this.userService.logout().then(response => this.router.navigate(['LandingPage']))
// // }

//  addString(): Promise<any>{
//     return new Promise((resolve, reject) => {

//       // setTimeout(() => { // <--- Change it - your service data retrieval
//       //   //Promise.resolve(this.retrieveDataResolver);
//       //   resolve(this.getFoods());
//       // //  this.retrieveDataResolver(); // <--- This must be called as soon as the data are ready to be displayed
//       // }, 400);

//       this.getFoods();
//       resolve('timer complete');
//       // setTimeout(
//       //   () => {
//       //     resolve(previous + ' ' + current)
//       //   }, 
//       //   Math.floor(Math.random() * 100) + 1
//       // )
//     })
//   }
  
//   retrieveAndThenDisplay() {
//   //  this.retrieveDataPromise().then(() => {this.displayData()});
//   this.logout().then((a) => {this.addData2(a)});
//   }


//   onClick(){
//     console.log('onClick calling process');
//     this.process().then(
//       (n) => {
//         console.log('onClick process promise resolved');
//        //this.name = n;
//       });
//     console.log('onClick done');
//   }
//   process() {
//     return new Promise(
//       (resolve)=>{ 
//         console.log('process setting timer');
//         window.setTimeout(()=>{
//           console.log('process timer completed; calling resolve');
//           resolve('timer complete')}, 1000);
//       });
//   }


  // "use strict";
  // performUpload (imgStatus : string) : Promise<{imgstatus : string}> {
  //   return new Promise((resolve) => {
  //     console.log(`Status: ${imgStatus}`);
  //     setTimeout(() => {
  //       resolve({ imgStatus: imgStatus });
  //     }, 1000);
  //   });
  // }
  // }
  
  // var upload;
  // var compress;
  // var transfer;
  
  // performUpload('uploading...')
  // .then((res) => {
  //   upload = res;
  //   return performUpload('compressing...');
  // })
  // .then((res) => {
  //   upload = res;
  //   return performUpload('transferring...');
  // })
  // .then((res) => {
  //   upload = res;
  //   return performUpload('Image upload completed.');
  // });



  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //dishName =name;

    this.ingerdService.newInrged({  ingrname: name } as Ingred)
      .subscribe(idfood => {
        this.ingreds.push({  ingrname: name, idingrenames:idfood} as Ingred);
      });
  }

  delete(food: Ingred): void {
    this.ingreds = this.ingreds.filter(h => h !== food);
    this.ingerdService.deleteIngred1(food.idingrenames).subscribe();
  }

  addData():void{

      this.ingreds.forEach( (element) => {
        this.ingerdService.addData(element)
        .subscribe(foods => element.numOfDishes = foods);
    });
      }
      addData2(ingarr:Ingred[]):void{

        ingarr.forEach( (element) => {
          this.ingerdService.addData(element)
          .subscribe(foods => element.numOfDishes = foods);
      });
      this.ingreds=ingarr;
        }

      addData1(ingre:Ingred):void{

        this.ingerdService.addData(ingre)
        .subscribe(foods => ingre.numOfDishes = foods);
      }

    
}
  


