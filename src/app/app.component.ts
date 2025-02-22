import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {MainComponent} from './components/pages/main/main.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {OrderComponent} from './components/pages/order/order.component';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, ProductsComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
      $('#form').submit(function (e: JQuery.SubmitEvent) {
        e.preventDefault();

        $('.order').hide();
        $('.order-message').removeClass('d-none');

        return true;
      });
  }
}
