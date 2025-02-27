import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductsModule} from './app/views/products/products.module';
import {AppComponent} from './app/app.component';
import {OrderModule} from './app/views/order/order.module';
import {MainModule} from './app/views/main/main.module';
import {RouterModule} from '@angular/router';
import {routes} from './app/app.routes';
import {SharedModule} from './app/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    OrderModule,
    MainModule,
    SharedModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
