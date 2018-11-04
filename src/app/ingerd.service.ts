import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Ingred} from './ingredi';
import{Indish} from './indish'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class IngerdService {

  private baseUrl='http://127.0.0.1:8080/rest'
  private foodsUrl = 'http://127.0.0.1:8080/rest/ingr';  // URL to web api

  private foodsUrl1 = 'http://127.0.0.1:8080/rest/q';  // URL to web api
  private ingredSearchUrl=this.baseUrl+'/qingred';
  private getIngredUrl=this.baseUrl+'/oneingre/retoneingre';
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


addIngred (indish: Indish): Observable<Ingred> {
  //const id = typeof food === 'number' ? food : food.id;
  const url = `${this.foodsUrl}/addoneingr`;

  return this.http.post<any>(url, indish, httpOptions).pipe(
    tap(_ => this.log(`added ingredi id= ${indish.idIngred} to food id=${indish.idDish}`)),
    catchError(this.handleError<Ingred>('addIngred'))
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
