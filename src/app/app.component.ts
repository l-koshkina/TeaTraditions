import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})


export class AppComponent implements AfterViewInit, OnInit {

  constructor() {}

  ngOnInit() {
    console.log(environment.production);
  }

  ngAfterViewInit() {

      $('#form').submit(function (e: JQuery.SubmitEvent) {
        e.preventDefault();

        $('.order').hide();
        $('.order-message').removeClass('d-none');

        return true;
      });
    }

}
