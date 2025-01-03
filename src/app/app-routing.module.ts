import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatelogComponent } from './catelog/catelog.component';
import { CartComponent } from './cart/cart.component';

const routes : Routes = [
  {path : 'home' , component : HomeComponent, title : 'Home'},
  {path : 'catalog' , component: CatelogComponent, title : 'Catalog'},
  {path: 'cart', component: CartComponent, title: 'Cart'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 