import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Ingred} from './ingredi';
import{Indish} from './indish'
import{Food} from './food'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class IngerdService {
  private baseUrl ='http://aaa-projm.7e14.starter-us-west-2.openshiftapps.com/rest';
  private baseUrl0='http://127.0.0.1:8080/rest'
  private foodsUrl = this.baseUrl0+'/ingr';  // URL to web api

  private foodsUrl1 = this.baseUrl0+'/q';  // URL to web api
  private ingredSearchUrl=this.baseUrl0+'/qingred';
  private getIngredUrl=this.baseUrl0+'/oneingre/retoneingre';
  constructor(    
    private http: HttpClient,
    private messageService: MessageService) { }


    /** GET hero by id. Will 404 if id not found */
getIngreds(id: number): Observable<Ingred[]> {
  const url = `${this.foodsUrl}/retrieveallid/${id}`;
  return this.http.get<Ingred[]>(url).pipe(
    tap(_ => this.log(`fetched ingreds for food id=${id}`)),
    catchError(this.handleError<Ingred[]>(`getFood id=${id}`))
  );
}


    /** GET hero by id. Will 404 if id not found */
    getAllIngreds(): Observable<Ingred[]> {
      const url = `${this.foodsUrl}/retrallingr`;
      return this.http.get<Ingred[]>(url).pipe(
        tap(_ => this.log(`fetched ingreds`)),
        catchError(this.handleError<Ingred[]>(`getIngreds`))
      );
    }


/** GET hero by id. Will 404 if id not found */
getIngred(id: number): Observable<Ingred> {
  const url = `${this.getIngredUrl}/${id}`;
  return this.http.get<Ingred>(url).pipe(
    tap(_ => this.log(`fetched ingred id=${id}`)),
    catchError(this.handleError<Ingred>(`getIngred id=${id}`))
  );
}

deleteIngred (indish: Indish): Observable<Ingred> {
  //const id = typeof food === 'number' ? food : food.id;
  const url = `${this.foodsUrl}/deloneingr`;

  return this.http.post<any>(url, indish, httpOptions).pipe(
    tap(_ => this.log(`deleted ingredi id= ${indish.idIngred} from food id=${indish.idDish}`)),
    catchError(this.handleError<Ingred>('deleteIngred'))
  );
}

deleteIngred1 (id: number): Observable<any> {
  //const id = typeof food === 'number' ? food : food.id;
  const url = `${this.foodsUrl1}/delingre/${id}`;

  return this.http.get<any>(url).pipe(
    tap(_ => this.log(`fetched ingred id=${id}`)),
    catchError(this.handleError<Ingred>(`getIngred id=${id}`))
  );
}
//count dishes for ingreds list
addIngred (indish: Indish): Observable<Ingred> {
  //const id = typeof food === 'number' ? food : food.id;
  const url = `${this.foodsUrl}/addoneingr`;

  return this.http.post<any>(url, indish, httpOptions).pipe(
    tap(_ => this.log(`added ingredi id= ${indish.idIngred} to food id=${indish.idDish}`)),
    catchError(this.handleError<Ingred>('addIngred'))
  );
}

addData(ingred:Ingred): Observable<number>{
  const url = `${this.foodsUrl}/countdfi/${ingred.id}`;
  return this.http.get<number>(url).pipe(
  //  tap(_ => this.log(`fetched ingred det id=${ingred.id}`)),
    catchError(this.handleError<number>(`getIngred det id=${ingred.id}`))
  );

}


foodsForIngred(ingred:Ingred): Observable<Food[]>{
  const url = `${this.foodsUrl}/getdfi/${ingred.id}`;
  return this.http.get<Food[]>(url).pipe(
  //  tap(_ => this.log(`fetched ingred det id=${ingred.id}`)),
    catchError(this.handleError<Food[]>(`getfoods for Ingred id=${ingred.id}`))
  );
  
}



/** POST: add a new hero to the server */
newInrged (ingred: Ingred): Observable<number> {
  const url = `${this.foodsUrl}/newingr`;
  return this.http.post<number>(url, ingred, httpOptions).pipe(
    tap((food: number) => this.log(`added food w/ id=${food}`)),
    catchError(this.handleError<number>('addFood'))
  );
}

private log(message: string) {
  this.messageService.add(`IngredService: ${message}`);
}

/* GET heroes whose name contains search term */
searchIngreds(term: string): Observable<Ingred[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  
  return this.http.get<Ingred[]>(`${this.ingredSearchUrl}?name=${term}`).pipe( 
   
    tap(_ => this.log(`found Ingreds matching "${term}"`)),
    catchError(this.handleError<Ingred[]>('searchIngreds', []))
  );
}



updateIngred (ingred: Ingred): Observable<any> {
  const url = `${this.foodsUrl}/editingre`;
  return this.http.post(url, ingred, httpOptions).pipe(
    tap(_ => this.log(`updated ingred id=${ingred.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
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
