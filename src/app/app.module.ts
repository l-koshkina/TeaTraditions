import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductsModule} from './views/products/products.module';
import {AppComponent} from './app.component';
import {OrderModule} from './views/order/order.module';
import {MainModule} from './views/main/main.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
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
