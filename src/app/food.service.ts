import { Injectable } from '@angular/core';
import { Food } from './food';
//import { FOODS } from './mock-foods';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class FoodService {



  private foodsUrl = 'http://127.0.0.1:8080/rest/dish';  // URL to web api

  private foodsUrl1 = 'http://127.0.0.1:8080/rest/q';  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

 /** GET heroes from the server */
getFoods (): Observable<Food[]> {

  const url = `${this.foodsUrl}/retrieveall`;

  return this.http.get<Food[]>(url)
  .pipe(
    tap(foods => this.log('fetched foods')),
    catchError(this.handleError('getfoods', []))
  );
}

/** PUT: update the hero on the server */
updateFood (food: Food): Observable<any> {
  const url = `${this.foodsUrl}/edit`;
  return this.http.post(url, food, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${food.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

/** GET hero by id. Will 404 if id not found */
getFood(id: number): Observable<Food> {
  const url = `${this.foodsUrl}/retrieve/${id}`;
  return this.http.get<Food>(url).pipe(
    tap(_ => this.log(`fetched food id=${id}`)),
    catchError(this.handleError<Food>(`getFood id=${id}`))
  );
}

/** POST: add a new hero to the server */
addFood (food: Food): Observable<Food> {
  const url = `${this.foodsUrl}/savec`;
  return this.http.post<Food>(url, food, httpOptions).pipe(
    tap((food: Food) => this.log(`added food w/ id=${food.id}`)),
    catchError(this.handleError<Food>('addFood'))
  );
}

  // getFood(id: number): Observable<Food> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(FOODS.find(food => food.id === id));
  // }


/** DELETE: delete the hero from the server */
deleteFood (food: Food | number): Observable<Food> {
  const id = typeof food === 'number' ? food : food.id;
  const url = `${this.foodsUrl}/delete1/${id}`;

  return this.http.post<Food>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted food id=${id}`)),
    catchError(this.handleError<Food>('deleteFood'))
  );
}

/* GET heroes whose name contains search term */
searchFoods(term: string): Observable<Food[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }

  return this.http.get<Food[]>(`${this.foodsUrl1}?name=${term}`).pipe( 
   
    tap(_ => this.log(`found foods matching "${term}"`)),
    catchError(this.handleError<Food[]>('searchHeroes', []))
  );
}

 //


  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
