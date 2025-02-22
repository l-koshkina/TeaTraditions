import { Routes } from '@angular/router';
import {OrderComponent} from './components/pages/order/order.component';
import {MainComponent} from './components/pages/main/main.component';
import {ProductComponent} from './components/pages/product/product.component';
import {ProductsComponent} from './components/pages/products/products.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductComponent},
  { path: 'order', component: OrderComponent},
  { path: '**', redirectTo: ''},
];
