import {AfterViewInit, Component, ElementRef, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {delay, of, Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent implements AfterViewInit, OnDestroy {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  private popupSubscription: Subscription | null = null;

  constructor(private modalService: NgbModal) {
  }

  ngAfterViewInit() {
    this.popupSubscription = of(true)
      .pipe(delay(10000))
      .subscribe(() => {
        this.modalService.open(this.popup, { animation: true })
      });

    this.initAccordion();
  }

  initAccordion() {
    setTimeout(() => {
      $('#accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
      });
    }, 0);
  }

  ngOnDestroy() {
    this.popupSubscription?.unsubscribe();
  }
}
