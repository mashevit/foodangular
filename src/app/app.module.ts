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

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { FoodSearchComponent } from './food-search/food-search.component';
import { IngredSearchComponent } from './ingred-search/ingred-search.component';
import { IngredDetailComponent } from './ingred-detail/ingred-detail.component';
import { IngredsComponent } from './ingreds/ingreds.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
