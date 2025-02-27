import {AfterViewInit, Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-root',
  // imports: [AppModule, RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
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
