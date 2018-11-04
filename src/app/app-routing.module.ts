import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent }      from './foods/foods.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FoodDetailComponent }  from './food-detail/food-detail.component';
import { IngredDetailComponent }  from './ingred-detail/ingred-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FoodDetailComponent },
  { path: 'detingr/:id1', component: IngredDetailComponent },
  { path: 'foods', component: FoodsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}