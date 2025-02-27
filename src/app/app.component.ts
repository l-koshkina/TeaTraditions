import {AfterViewInit, Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
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
