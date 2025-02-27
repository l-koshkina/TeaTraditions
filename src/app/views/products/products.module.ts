import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from './products/products.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductComponent} from './product/product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
  ],
  exports: [
    ProductComponent,
    ProductsComponent,
    // ProductsRoutingModule
  ]
})
export class ProductsModule { }
