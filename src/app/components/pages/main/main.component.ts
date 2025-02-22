import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import {delay, of, Subscription} from 'rxjs';

declare var $: any;

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, NgIf],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  ngAfterViewInit() {
    $("#accordion").accordion();
  }

  showPopup: boolean = false;
  private popupSubscription: Subscription | null = null;

  ngOnInit() {
    this.popupSubscription = of(true)
      .pipe(delay(10000))
      .subscribe(() => {
        this.showPopup = true;
      });
  }

  ngOnDestroy() {
    this.popupSubscription?.unsubscribe();
  }

  hidePopup() {
    this.showPopup = false;
  }

}
