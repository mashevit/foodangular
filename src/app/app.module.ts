import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { LocationStrategy,HashLocationStrategy }    from '@angular/common';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { FoodSearchComponent } from './food-search/food-search.component';
import { IngredSearchComponent } from './ingred-search/ingred-search.component';
import { IngredDetailComponent } from './ingred-detail/ingred-detail.component';
import { IngredsComponent } from './ingreds/ingreds.component';
//import { AlertModule } from 'ngx-bootstrap';
import { Provider } from '@angular/core';
//import { AppComponent} from ‘./app/’;
import { BrowserXhr,HttpModule  } from '@angular/http';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
@NgModule({

  
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FoodSearchComponent,
    IngredSearchComponent,
    IngredDetailComponent,
    IngredsComponent,
  
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // // and returns simulated server responses.
    // // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  // providers: [{provide: BrowserXhr, useClass:CustExtBrowserXhr},
  //   {provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
